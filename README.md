# LocalMark - Frontend :art:
<b>[UMC 6th 웹 프로젝트 '로컬마크'] Client</b>
<br/>

## ABOUT LOCAL MARK :runner:
      
### 서비스 이름 & 유래

> <**로컬마크: 로컬 크리에이터를 위한 마켓 플랫폼**>
로컬 크리에이터 산업의 발전 과정에 하나의 **흔적**을 남길 수 있도록,
차별화된 상품을 찾는 소비자의 마음에 **흔적**을 남길 수 있도록
>



<br/>
<br/>
</a>


## ⚙️ 기술 스택

<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library            | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                         |
| Programming Language | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)                                                                                             |
| JavaScript Runtime   | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)                                                                                             |
| Package Manager    | ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)   ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)                                                                                        |
| Data Fetching              | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                        |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
</div>
<br/>

<div>
  
<h2>  📄 컨벤션 및 브랜치 전략 </h2>



<br/>

## 🎋 브랜치 전략

- 브랜치 전략
  - `feature/담당자명`
    - feature/SeungHee (파스칼)
  - `담당자명/기능설명`
    - SeungHee/ui-publishing (-로 연결)
  ```js
  develop
  ㄴ feature/SeungHee
  	ㄴ SeungHee/ui-publishing
  ```
- 🚨 반드시 **직속 상위 브랜치**로 머지
- ❌ 이번 솝커톤에서는 빠른 작업을 위해 issue를 사용하지 않습니다!
- ↩️ PR은 1명 이상이 확인하면 merge (모두가 코드리뷰할 필요 없으나 반드시 한명은 확인해야 함)

### 📚 커밋 컨밴션

- 커밋 단위는 반드시 최소한의 작업 단위로 쪼개서, 한 PR당 10커밋 이상 넘어가지 않도록 합니다.

| 커밋     | 역할                                                                  |
| -------- | --------------------------------------------------------------------- |
| feat     | 기능 구현과 관련된 커밋                                               |
| style    | 코드 순서, css등의 포맷에 관한 커밋 (기능에 변화X)                    |
| design   | UI 구현 (css 구체화) 커밋                                             |
| fix      | 버그를 고친 경우                                                      |
| refactor | 더 좋은 코드로 개선한 경우 (기능에 변화가 없는 경우) ex-코드리뷰 반영 |
| docs     | README.md 등 문서를 작성한 경우                                       |
| chore    | 주석 추가, 자잘한 문서 수정                                           |

<br/>

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 @components
	|-- 📁 @pages
	|-- 📁 api
  |-- 📁 constants
  |-- 📁 hooks
	|-- 📁 assets
		|-- 📁 icon
		|-- 📁 image
	|-- 📁 style
		|-- globalStyle.js
		|-- theme.js
	|-- App.jsx
	|-- main.jsx
	|-- Router.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
|-- yarn.lock
```

📁 **src > assets**
필요한 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon`

- ic_arrow.svg
  필요한 이미지 파일은 Figma 에서 **png로 export** 한 후 `assets/image`폴더에 넣기

- img_picture.png
  index.ts에서 svg 컴포넌트화 하여 export → 컴포넌트에서 import 시 컴포넌트처럼 불러오기

- 파일명 : `ic_arrow.svg` _(snake case)_
- 컴포넌트명 (사용할 때) : `IcArrow.svg` _(Pascal case)_

📁 **src > components**
**common 폴더**
⇒ 여러 페이지에서 사용할 공통 컴포넌트 (ex- Button, Header)

**각 페이지별 폴더**
⇒ 각 페이지별 폴더 생성 후, 내부에 연관 컴포넌트 파일 생성하기

📁 **src > pages**
페이지의 최상단 컴포넌트. 각 컴포넌트를 하나의 페이지에서 호출하는 곳

📁 **src > api**
서버 합동 세미나에서 사용
api 함수 모아놓는곳

📁 **src > hooks**
custom hooks 정의하는 경우 이곳에서 정의 후 사용

📁 **src > constants**
상수 데이터 파일 분리하여 사용하는 경우 이곳에서 정의 후 사용

<br/>



