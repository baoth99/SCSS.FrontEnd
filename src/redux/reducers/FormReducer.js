import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM, 
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM,
        CHANGE_UNITSEARCHFORM, CLEAR_UNITSEARCHFORM} from '../../utils/constants/ActionFormConstant';
import {initialSCSearchFormState, initialUserFormState, initialUnitSearchFormState} from '../../variables/InitialStateData';



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

export const UnitSearchFormReducer = (state = initialUnitSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_UNITSEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_UNITSEARCHFORM: {
            return {
                ...initialUnitSearchFormState
            }
        }
        default:
           return state; 
    }
}