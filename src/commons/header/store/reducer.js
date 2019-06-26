import { combineReducers } from 'redux'
import { SEARCHFOCUSED, SEARCHBLURD } from './headerAction'

const inputFocus = (state = { focused: false }, action)=> {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SEARCHFOCUSED:
            newState.focused = true;
            break;
        case SEARCHBLURD:
            newState.focused = false;
            break;
        default :
            newState.focused = false;
    }
    return newState;
}

const headerData = (state, action) => {
    return inputFocus(state, action);
}
export default headerData;