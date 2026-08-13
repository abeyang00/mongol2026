#!/usr/bin/env python3
"""Resize trip photos for the web and regenerate photos.js.

Workflow
--------
1. Drop originals straight off the phone into photos-raw/d1 .. photos-raw/d5
   (one folder per trip day). HEIC, JPEG, PNG and WebP are all accepted.
2. Run:  python tools/build-photos.py
3. Commit assets/photos/ and photos.js.

Each original becomes two WebP files: a 2000px "full" for the lightbox and a
600px "thumb" for the grid. Originals are never copied into the repo — phone
files are several MB each and git keeps every version forever, so committing
them would bloat the repo permanently.

Keep photos-raw/ around on your machine. photos.js is rebuilt from scratch on
every run, so a day whose raw files are missing locally comes out empty even
if its photos were committed earlier. (photos-raw/ is gitignored, so back it
up somewhere that is not this repo.) If photos-raw/ does not exist at all the
script only creates the folders and leaves photos.js untouched, so a fresh
clone cannot wipe the manifest by accident.

Captions: put a caption.txt next to the photos in a raw folder with one
"filename = caption" line per photo, e.g.
    IMG_1234.HEIC = 청헤르 온천 도착
Photos without an entry simply get no caption.

Requires Pillow (plus pillow-heif for iPhone HEIC files):
    pip install Pillow pillow-heif
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit(
        "Pillow is not installed.\n"
        "  pip install Pillow pillow-heif\n"
        "(pillow-heif is only needed for iPhone .HEIC files.)"
    )

# HEIC support is optional; register it when available.
try:
    import pillow_heif

    pillow_heif.register_heif_opener()
    HEIC_OK = True
except ImportError:
    HEIC_OK = False

ROOT = Path(__file__).resolve().parent.parent
RAW_DIR = ROOT / "photos-raw"
OUT_DIR = ROOT / "assets" / "photos"
MANIFEST = ROOT / "photos.js"

DAYS = ["day1", "day2", "day3", "day4", "day5"]
SOURCE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"}

FULL_WIDTH = 2000
THUMB_WIDTH = 600
FULL_QUALITY = 80
THUMB_QUALITY = 72


def read_captions(folder: Path) -> dict[str, str]:
    """Parse an optional 'filename = caption' file."""
    captions: dict[str, str] = {}
    caption_file = folder / "caption.txt"
    if not caption_file.exists():
        return captions

    # utf-8-sig: Notepad and PowerShell write a BOM, which would otherwise glue
    # itself to the first filename and silently drop that photo's caption.
    for line in caption_file.read_text(encoding="utf-8-sig").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, caption = line.split("=", 1)
        captions[name.strip().lower()] = caption.strip()
    return captions


def convert(source: Path, target: Path, width: int, quality: int) -> tuple[int, int]:
    """Write a resized WebP and return its (width, height)."""
    with Image.open(source) as image:
        # Phone photos carry rotation in EXIF; bake it in so the web sees it upright.
        image = ImageOps.exif_transpose(image)
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")

        if image.width > width:
            height = round(image.height * width / image.width)
            image = image.resize((width, height), Image.LANCZOS)

        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=quality, method=6)
        return image.width, image.height


def js_string(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def build_day(day: str) -> list[dict]:
    """Convert one day's folder; returns manifest entries."""
    short = day.replace("day", "d")
    raw_folder = RAW_DIR / short
    if not raw_folder.is_dir():
        return []

    captions = read_captions(raw_folder)
    sources = sorted(
        (p for p in raw_folder.iterdir() if p.suffix.lower() in SOURCE_SUFFIXES),
        key=lambda p: p.name.lower(),
    )

    entries = []
    for index, source in enumerate(sources, start=1):
        if source.suffix.lower() in {".heic", ".heif"} and not HEIC_OK:
            print(f"  ! skipped {source.name} (install pillow-heif for HEIC)")
            continue

        stem = f"{index:03d}"
        full_path = OUT_DIR / short / f"{stem}.webp"
        thumb_path = OUT_DIR / short / f"{stem}-t.webp"

        width, height = convert(source, full_path, FULL_WIDTH, FULL_QUALITY)
        convert(source, thumb_path, THUMB_WIDTH, THUMB_QUALITY)

        kb = full_path.stat().st_size / 1024
        print(f"  {source.name} -> {short}/{stem}.webp  {width}x{height}  {kb:.0f} KB")

        entries.append(
            {
                "full": f"assets/photos/{short}/{stem}.webp",
                "thumb": f"assets/photos/{short}/{stem}-t.webp",
                "caption": captions.get(source.name.lower(), ""),
            }
        )

    return entries


def write_manifest(photos: dict[str, list[dict]]) -> None:
    lines = [
        "/* AUTO-GENERATED by tools/build-photos.py — do not edit by hand.",
        "   Run the script after dropping photos into photos-raw/dN/ to refresh this file. */",
        "window.tripPhotos = {",
    ]

    for day in DAYS:
        entries = photos.get(day, [])
        if not entries:
            lines.append(f"  {day}: [],")
            continue

        lines.append(f"  {day}: [")
        for entry in entries:
            lines.append(
                "    { full: %s, thumb: %s, caption: %s },"
                % (
                    js_string(entry["full"]),
                    js_string(entry["thumb"]),
                    js_string(entry["caption"]),
                )
            )
        lines.append("  ],")

    lines.append("};")
    MANIFEST.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    if not RAW_DIR.exists():
        for day in DAYS:
            (RAW_DIR / day.replace("day", "d")).mkdir(parents=True, exist_ok=True)
        print(f"Created {RAW_DIR.relative_to(ROOT)}/d1..d5 — drop photos in and re-run.")
        return

    photos = {}
    total = 0
    for day in DAYS:
        print(f"{day}:")
        entries = build_day(day)
        photos[day] = entries
        total += len(entries)
        if not entries:
            print("  (none)")

    write_manifest(photos)

    out_bytes = sum(p.stat().st_size for p in OUT_DIR.rglob("*.webp")) if OUT_DIR.exists() else 0
    print(f"\n{total} photo(s) -> {out_bytes / 1024 / 1024:.1f} MB in assets/photos/")
    print(f"Manifest written to {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
