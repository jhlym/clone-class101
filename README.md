# 사용 라이브러리

| 이름                | 버전     |
| ------------------- | -------- |
| react               | v16.12.0 |
| react-router-dom    | v5.1.2   |
| react-js-pagination | v3.0.2   |
| reactstrap          | v8.4.1   |
| bootstrap           | v4.4.1   |
| styled-components   | v5.0.1   |
| mobx                | v5.15.4  |
| mobx-react-lite     | v1.5.2   |
| typescript          | v3.7.5   |

# 구현 기능

- 전체 페이지
  - mobx를 이용한 상태관리
    - 상품 페이지와 장바구니 페이지 두 곳 모두에서 state 관리하기 위함
    - class101에서는 mobx를 사용하고 있고, 그 스펙을 맞추기 위해 사용
  - bootstrap을 이용한 반응형 페이지
  - bootstrap의 grid system 이용
- 상품 페이지
  - 페이지네이션 구현
  - 상품 장바구니에 담기 기능 구현(장바구니 아이콘 toggle)
- 장바구니 페이지

  - 상품 수량 조절 기능
  - 상품 결제 포함 기능
  - 쿠폰 적용 기능

# 실행 방법

- yarn 패키지 관리자가 필요합니다!
- [yarn 공식 홈페이지](https://classic.yarnpkg.com/en/docs/install/#mac-stable)를 참조하여 설치하시길 바랍니다.

```bash
# 프로젝트 빌드/실행에 필요한 모듈 설치(package.json에 명시되어 있음)
yarn install
# 로컬에서 실행(http://localhost:3000)
yarn start
```
