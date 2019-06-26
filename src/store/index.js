import { createStore, applyMiddleware, compose } from 'redux';

import headerData from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(headerData, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
    ));

export default store;