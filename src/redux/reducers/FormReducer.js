import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM, 
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM,
        CHANGE_UNITSEARCHFORM, CLEAR_UNITSEARCHFORM,
        CHANGE_DC_TRANSACTION_SEARCHFORM, CLEAR_DC_TRANSACTION_SEARCHFORM,
        CHANGE_CS_TRANSACTION_SEARCHFORM, CLEAR_CS_TRANSACTION_SEARCHFORM} from '../../utils/constants/ActionFormConstant';
import {initialSCSearchFormState, initialUserFormState, 
        initialUnitSearchFormState, initialDCTransactionSearchFormState,
        initialCSTransactionSearchFormState} from '../../variables/InitialStateData';



export const CSTransactionSearchFormReducer = (state = initialCSTransactionSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_CS_TRANSACTION_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_CS_TRANSACTION_SEARCHFORM: {
            return {
                ...initialCSTransactionSearchFormState
            }
        }
        default:
            return state;
    }
}



export const DCTransactionSearchFormReducer = (state = initialDCTransactionSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_DC_TRANSACTION_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_DC_TRANSACTION_SEARCHFORM: {
            return {
                ...initialDCTransactionSearchFormState
            }
        }
        default:
            return state;
    }
}



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