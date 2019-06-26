import { combineReducers } from 'redux-immutable'
import {headerData as headerReducer} from '../commons/header/store'

export default combineReducers({
    header:headerReducer
})

