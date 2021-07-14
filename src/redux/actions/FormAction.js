import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM,
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM,
        CHANGE_UNITSEARCHFORM, CLEAR_UNITSEARCHFORM,
        CHANGE_DC_TRANSACTION_SEARCHFORM, CLEAR_DC_TRANSACTION_SEARCHFORM,
        CHANGE_CS_TRANSACTION_SEARCHFORM, CLEAR_CS_TRANSACTION_SEARCHFORM} from '../../utils/constants/ActionFormConstant';


// CS Transaction Search Form
export const ChangeCSTransactionSearchForm = (data) => {
    return {
        type: CHANGE_CS_TRANSACTION_SEARCHFORM,
        payload: data
    }
}

export const ClearCSTransactionSearchForm = () => {
    return {
        type: CLEAR_CS_TRANSACTION_SEARCHFORM
    }
}

// DC Transaction Search Form
export const ChangeDCTransactionSearchForm = (data) => {
    return {
        type: CHANGE_DC_TRANSACTION_SEARCHFORM,
        payload: data
    }
}

export const ClearDCTransactionSearchForm = () => {
    return {
        type: CLEAR_DC_TRANSACTION_SEARCHFORM
    }
}

// User Search Form
export const ChangeUserSearchForm = (data) => {
    return {
        type: CHANGE_USERSEARCHFORM,
        payload: data
    }
}

export const ClearUserSearchForm = () => {
    return {
        type: CLEAR_USERSEARCHFORM
    }
}

// SC Search Form
export const ChangeSCSearchForm = (data) => {
    return {
        type: CHANGE_SCSEARCHFORM,
        payload: data
    }
}


export const ClearSCSearchForm = () => {
    return {
        type: CLEAR_SCSEARCHFORM
    }
}

// Unit Search Form
export const ChangeUnitSearchForm = (data) => {
    return {
        type: CHANGE_UNITSEARCHFORM,
        payload: data
    }
}

export const ClearUnitSearchForm = () => {
    return {
        type: CLEAR_UNITSEARCHFORM
    }
}