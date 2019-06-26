import { combineReducers } from 'redux'
import {headerData as headerReducer} from '../commons/header/store'

export default combineReducers({
    header:headerReducer
})

