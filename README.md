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

## :cactus: 브랜치 전략(협의 후 수정)

**브랜치 전략 1**
   - main: 우리가 개발 최종시에 Merge를 하는 곳 
   - feat/{기능명}/#{issue번호}: 기능을 개발하면서 각자가 사용할 브랜치 ex) feat/Home/#3
   - 우리가 정의하는 기능명 → 구현 중인 페이지 (ex. Home, MyPage or Common)
```// 브랜치 생성 ❗❗항상 메인에 체크아웃해서 만들것❗❗
$ git branch feat/{기능명}/#{이슈번호}
// 브랜치 체크아웃
$ git checkout feat/{기능명}/#{이슈번호}
```


**브랜치 전략 2**
  - `feature/담당자명`
    - feature/JongHyuck (파스칼)
  - `담당자명/기능설명`
    - JongHyuck/ui-publishing (-로 연결)
  ```js
  develop
  ㄴ feature/Jonghyuck
  	ㄴ JongHyuck/ui-publishing
  ```
- 🚨 반드시 **직속 상위 브랜치**로 머지
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
	|-- 📁 components
		|-- 📁 common
		|-- 📁 page이름
	|-- 📁 pages
	|-- 📁 services
        |-- 📁 constants
        |-- 📁 hooks
	|-- 📁 assets
		|-- 📁 icon
		|-- 📁 image
	|-- 📁 styles
		|-- GlobalStyles.jsx
		|-- theme.jsx
	|-- 📁 utils
	|-- 📁 store
	|-- App.jsx
	|-- App.css
	|-- index.css
	|-- main.jsx
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
```
📁 **src > components**

 
재사용 가능한 컴포넌트들이 위치하는 폴더입니다.
- common 폴더

⇒ 여러 페이지에서 사용할 공통 컴포넌트 (ex- Button, Header)

- 각 페이지별 폴더

⇒ 각 페이지별 폴더 생성 후, 내부에 연관 컴포넌트 파일 생성하기


📁 **src > assets**
   - 파일명 : `ic_arrow.svg` _(snake case)_
   - 컴포넌트명 (사용할 때) : `IcArrow.svg` _(Pascal case)_


이미지 혹은 폰트와 같은 파일들이 저장되는 폴더입니다.
이미지와 같은 파일들을 public에 직접 넣는 경우도 있는데 둘의 차이는 컴파일시에 필요한지 여부입니다.
파비콘과 같이 index.html내부에서 직접 사용하여 컴파일 단계에서 필요하지 않은 파일들은 public에
반면, 컴포넌트 내부에서 사용하는 이미지 파일인 경우 이 assets 폴더에 위치시켜야 합니다.



📁 **src > hooks**


커스텀 훅이 위치하는 폴더입니다.

📁 **src > pages**


react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치시킵니다.
페이지의 최상단 컴포넌트. 각 컴포넌트를 하나의 페이지에서 호출하는 곳

📁 **src > constants**


공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더입니다.

📁 **src > config**

  
config 파일이 많지 않은 경우 보통 최상위에 위치시켜놓지만 여러개의 config 파일이 있을 경우 폴더로 분리하기도 합니다.

📁 **src > styles**


globalStyle등의 전역 css 파일들이 포함되는 폴더입니다.

📁 **src > services(=api)**


보통 api관련 로직의 모듈 파일이 위치하며 auth와 같이 인증과 관련된 파일이 포함되기도 합니다.

📁 **src > utils**

  
정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더입니다.


📁 **src > store**


리덕스, MobX 등의 상태 관리 라이브러리와 관련된 코드를 저장하는 폴더입니다.
<hr></hr>

### :tongue: 네이밍

- 컴포넌트명 : PascalCase
- 내부함수명 : camelCase
- 변수명 : camelCase
- 상수명 : UPPER_CASE

<aside>
<b>이벤트 핸들러 이름</b>

- handle이벤트명 = () ⇒ {}
- handleClick, handleSubmit, ...
</aside>

