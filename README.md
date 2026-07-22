# abeandsungmongol

몽골 여행 일정 공유용 GitHub Pages 정적 사이트입니다.

## 구성

- `index.html`: 화면 구조
- `styles.css`: 반응형 디자인
- `script.js`: 여행 일정, 항공권, 숙소, 준비물 데이터
- `assets/mongolia-hero.webp`: 히어로 이미지

## 자료 업데이트

항공권, 날짜별 계획, 숙소 자료를 받으면 `script.js` 상단의 `tripData`만 수정하면 됩니다.
방문지에는 `mapQuery`를 넣어두면 Google Maps 검색/길찾기 링크가 자동으로 만들어집니다.

## GitHub Pages 배포

1. GitHub에서 `abeandsungmongol` 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 루트에 업로드하거나 push합니다.
3. 저장소 `Settings` -> `Pages`에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, folder는 `/root`로 설정합니다.
5. 배포 주소는 보통 `https://<github-id>.github.io/abeandsungmongol/` 형태입니다.

루트 주소 `https://<github-id>.github.io/`를 원하면 저장소 이름을 `<github-id>.github.io`로 만들어야 합니다.
