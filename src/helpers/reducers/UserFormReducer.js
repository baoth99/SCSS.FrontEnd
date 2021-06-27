import {CHANGE_USERFORM, CLEAR_USERFORM} from '../ActionHookConstants';
import {initialUserFormState} from '../../variables/InitialStateData';

const UserFormReducer = (state, action) => {
    switch(action.type) {
        case CHANGE_USERFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_USERFORM: {
            return {
                ...initialUserFormState
            }
        }
        default: 
            return state;
    }
}


export default UserFormReducer;