import React from 'react';
import Header from './commons/header'
import {GlobalStyle} from './style'
import {GlobalFont} from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from './commons/header/store'

function App() {
  return (
    <Provider store = {store}>
      <GlobalStyle/><GlobalFont/>
      <Header/>
    </Provider>
  );
}

export default App;
