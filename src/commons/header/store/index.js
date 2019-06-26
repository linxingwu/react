import { createStore } from 'redux'
import headerData from './reducer'

const store = createStore(headerData)

export default store;