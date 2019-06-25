import React,{Fragment} from 'react';
import Header from './commons/header'
import {GlobalStyle} from './style'
import {GlobalFont} from './statics/iconfont/iconfont'

function App() {
  return (
    <Fragment>
      <GlobalStyle/><GlobalFont/>
      <Header/>
    </Fragment>
  );
}

export default App;
