## React Project　setup 순서
### `yarn global add npx`
    
### `npx create-react-app jonflix2`
    
### 필요없는 파일 삭제 ( App.js , index.js 만 남기고 삭제 )
    
### git 적용
    
### `.env 파일 생성`
    NODE_PATH=src
    
### `yarn add prop-types`

## 시작
    1. src폴더에 Components폴더 생성
    2. src폴더에 Routes폴더 생성
    3. Routes폴더에 Home, TV, Detail, Search js파일 생성
    4. App.js 파일을 Components 폴더에 넣는다.
    5. yarn add react-router-dom
    
## `yarn add react-router-dom`
    리액트에서 거의 유일한 라우팅 패키지.

## 리다이렉트
    import React from "react";
    import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; <--
    import Home from "Routes/Home";
    import TV from "Routes/TV";
    import Search from "Routes/Search";
    
    export default () => (
        <Router>
            <Switch>  <---
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/tv/popular" render={()=> <h1>Popular</h1>} />
                <Route path="/search" exact component={Search} />
                <Redirect from ="*" to="/" />   <---
            </Switch>
        </Router>
    );

    Redirect, Switch 임포트해주고, Fragment부분에 Switch를 작성
    셋트로 외우기.

## 라우터에 exact 
    exact 를 넣지않으면 url과 비슷한 어떠한 단어도 url 로 인식한다. 



## Screens
-[ ] Home
-[ ] TV Shows
-[ ] Search
-[ ] Detail

## 컴포넌트별로 나누는 이유
    부분적으로 캡슐화해서 관리하기 편하게 하기 위해서 리액트를 쓰는 것.
    글로벌한 css의 경우 이 점에 위배된다. 
    그러므로 css도 각 컴포넌트별로 먹이는 것이 낫다.

## 컴포넌트별로 CSS 먹이는 법 (Header)
    Components 아래 Header 폴더를 만들고 Header.js 와  index.js 를 넣는다.
    폴더를 경로값으로 지정해주면 그 폴더 내의 index.js파일을 읽는다.

## css module
    우리의 className을 임의화해 css가 global이 아닌 local이 되게 만드는 것.
    css파일명을 바꿔준다 (ex : Header.moduel.css)
    그리고 Header.js에서 자바스크립트를 임포트할 때처럼 변경해준다.
    (ex : import styles from "./Header.moduel.css")
    className={styles.navList}와 같이 적용
    이것도 여전히 자바스크립트와 css의 거리가 떨어져있다.
    
    장점 : className을 임의화해 css가 global이 아닌 local이 되게 만드는 것.
    단점 : css에서 클래스명을 자바스크립트처럼 줘야한다. 여전히 클래스명을 기억해야한다.



## `yarn add styled-components` 
    자바스크립트로 css 를 !! 
    적용하고싶은 컴포넌트에 
    import styled from "styled-components";
    
### styled-components : Link
    - Link 를 사용하기위해서는 import 해야한다.  import { Link } from "react-router-dom";
    - 이 Link는 해당 페이지가 내 어플리케이션에 있으면, 그곳으로 브라우져한 방식으로 가지 않고,
    - JavaScript의 방식으로 가게 해준다.
    - 보통 a태그에 Link를 거는듯
    - a 태그에 걸기 싫으면 그냥 const SLink = styled(Link)``;
    - href 는 React Router에는 존재하지 않는다. 그러므로 수정 ! href => to
    
    ❗️ You should not use <Link> outside a <Router> 에러 가 떴을때 
    - Header를 Router.js 안으로 넣는다.
        <Router>
            <>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" exact component={TV} />
                    <Route path="/tv/popular" render={()=> <h1>Popular</h1>} />
                    <Route path="/search" component={Search} />
                    <Redirect from ="*" to="/" />
                </Switch>
            </>
        </Router>
        
### styled-components : GlobalStyles and Header
    Global 스타일을 적용하는 이유는 해당 사이트의 폰트를 설정하거나 SC를 설치하거나..
### `yarn add styled-reset`
    - css 초기화 작업 (겁나편한데?)
    - Components 아래 GlobalStyles.js 파일을 생성한다.
    
        import { createGlobalStyle } from "styled-components";
        import reset from "styled-reset";
        
        const globalStyles = createGlobalStyle`
          ${reset};
          a{
            text-decoration: none;
            color: inherit;
          }
          *{
            box-sizing: border-box;
          }
          body{
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          font-size: 14px;
          background-color: rgba(20,20,20,1);
          }
        `;
        
        export default globalStyles;
    
    
    - App.js에 임포트 
        import GlobalStyles from "Components/GlobalStyles";
        <GlobalStyles />