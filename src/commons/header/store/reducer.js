import * as consts from './headerAction'
import {fromJS} from 'immutable'
const defaultState = fromJS({ focused: false });

const inputFocus = (state = defaultState, action)=> {
    switch (action.type) {
        case consts.SEARCHFOCUSED:
            state = state.set("focused",true)
            break;
        case consts.SEARCHBLURD:
            state = state.set("focused",false)
            break;
        default :
            state = defaultState
    }
    return state;
}

const headerData = (state, action) => {
    return inputFocus(state, action);
}
export default headerData;