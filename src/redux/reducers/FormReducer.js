import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM, 
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM} from '../../utils/constants/ActionFormConstant';
import {initialSCSearchFormState, initialUserFormState} from '../../variables/InitialStateData';


export const SCSearchFormReducer = (state = initialSCSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_SCSEARCHFORM: {
            return {
                ...action.payload
            }
        }
        
        case CLEAR_SCSEARCHFORM:{
            return {
                ...initialSCSearchFormState
            }
        }
        default:
            return state;
    }
}


export const UserSearchFormReducer = (state = initialUserFormState, action) => {
    switch (action.type) {
        case CHANGE_USERSEARCHFORM: {
            return {
                ...action.payload
            }
        }
        
        case CLEAR_USERSEARCHFORM:{
            return {
                ...initialUserFormState
            }
        }
        default:
            return state;
    }
}