# Mongol Trip 26'

몽골 여행 일정 공유용 GitHub Pages 정적 사이트입니다.

## 구성

- `index.html`: 화면 구조
- `styles.css`: 반응형 디자인
- `script.js`: 여행 일정, 항공권, 숙소, 준비물 데이터
- `photos.js`: 날짜별 사진 목록 (스크립트가 생성하므로 직접 고치지 않습니다)
- `tools/build-photos.py`: 사진 리사이즈 + `photos.js` 생성
- `assets/mongolia-hero.webp`: 히어로 이미지 (3456px, 모바일용 1600px 별도)

## 자료 업데이트

항공권, 날짜별 계획, 숙소 자료를 받으면 `script.js` 상단의 `tripData`만 수정하면 됩니다.
방문지에는 `mapQuery`를 넣어두면 Google Maps 검색/길찾기 링크가 자동으로 만들어집니다.

## 사진 추가

날짜별(D1~D5) 탭 아래에 사진이 붙습니다. 클릭하면 크게 보입니다.

```bash
pip install Pillow pillow-heif   # 최초 1회
```

1. `photos-raw/d1` ~ `d5`에 폰 사진을 그대로 넣습니다. HEIC/JPEG/PNG/WebP 모두 됩니다.
2. `python tools/build-photos.py` 를 실행합니다.
   원본이 2000px(크게 보기용) + 600px(썸네일용) WebP로 변환되고 `photos.js`가 다시 만들어집니다.
3. `assets/photos/` 와 `photos.js` 를 커밋합니다.

캡션을 넣으려면 해당 폴더에 `caption.txt`를 만들고 한 줄에 하나씩 적습니다.

```
IMG_1234.HEIC = 청헤르 온천 도착
```

**주의**

- `photos-raw/`는 gitignore 대상입니다. 폰 원본은 장당 수 MB이고 git은 지워도 용량이 줄지 않아서,
  변환된 사진만 저장소에 올립니다.
- `photos.js`는 매번 `photos-raw/` 기준으로 새로 만들어집니다. 원본 폴더를 지우면 그 날짜 사진이
  목록에서 빠지므로, `photos-raw/`는 저장소 밖 어딘가에 백업해두세요.
- GitHub Pages 사이트 용량 한도는 1 GB입니다. 변환 후 장당 200~400 KB이므로 수백 장은 여유롭습니다.

## GitHub Pages 배포

1. GitHub에서 `mongol2026` 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 루트에 업로드하거나 push합니다.
3. 저장소 `Settings` -> `Pages`에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, folder는 `/root`로 설정합니다.
5. 배포 주소는 `https://abeyang00.github.io/mongol2026/` 형태입니다.

루트 주소 `https://<github-id>.github.io/`를 원하면 저장소 이름을 `<github-id>.github.io`로 만들어야 합니다.
