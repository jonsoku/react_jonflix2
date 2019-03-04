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
