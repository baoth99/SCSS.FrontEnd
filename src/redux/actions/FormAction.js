import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM,
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM} from '../../utils/constants/ActionFormConstant';

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