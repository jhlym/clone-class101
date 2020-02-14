> class101 사이트의 한 페이지를 참고하여 클론 코딩을 진행 해보았습니다.

# 개발 환경(TODO: 버전까지 명시)

- create-react-app with typescript
- mobx
- styled-components

# 구현 페이지

- 상품 목록 페이지

  - bootstrap을 이용한 반응형 페이지
  - bootstrap의 grid system 이용
  - mobx를 이용한 상태관리

    - 상품 페이지와 장바구니 페이지 두 곳 모두에서 state 관리하기 위함
    - class101에서는 mobx를 사용하고 있고, 그 스펙을 맞추기 위해 사용

  - 페이지네이션 구현

- 장바구니 페이지

# 실행 방법

- yarn 패키지 관리자가 필요합니다!
- [yarn 공식 홈페이지](https://classic.yarnpkg.com/en/docs/install/#mac-stable)를 참조하여 설치하시길 바랍니다.

```bash
# 프로젝트 빌드/실행에 필요한 모듈 설치(package.json에 명시되어 있음)
yarn install
# 로컬에서 실행(http://localhost:30000)
yarn start
```
