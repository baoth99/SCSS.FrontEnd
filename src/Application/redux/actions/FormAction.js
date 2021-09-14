import {CHANGE_SCSEARCHFORM, CLEAR_SCSEARCHFORM,
        CHANGE_USERSEARCHFORM, CLEAR_USERSEARCHFORM,
        CHANGE_DC_TRANSACTION_SEARCHFORM, CLEAR_DC_TRANSACTION_SEARCHFORM,
        CHANGE_CS_TRANSACTION_SEARCHFORM, CLEAR_CS_TRANSACTION_SEARCHFORM,
        CHANGE_BOOKING_SEARCHFORM, CLEAR_BOOKING_SEARCHFORM,
        CHANGE_DC_FEEDBACK_SEARCHFORM, CLEAR_DC_FEEDBACK_SEARCHFORM,
        CHANGE_CS_FEEDBACK_SEARCHFORM, CLEAR_CS_FEEDBACK_SEARCHFORM,
        CHANGE_COLLECTOR_REQUEST_REGISTER_SEARCHFORM, CLEAR_COLLECTOR_REQUEST_REGISTER_SEARCHFORM,
        CHANGE_DEALER_REQUEST_REGISTER_SEARCHFORM, CLEAR_DEALER_REQUEST_REGISTER_SEARCHFORM,
        CHANGE_DEALER_SEARCHFORM, CLEAR_DEALER_SEARCHFORM} from '../../../Infrastucture/utils/constants/ActionFormConstant';

// CS Feedback Search Form
export const ChangeCSFeedbackSearchForm = (data) => {
    return {
        type: CHANGE_CS_FEEDBACK_SEARCHFORM,
        payload: data
    }
}

export const ClearCSFeedbackSearchForm = () => {
    return {
        type: CLEAR_CS_FEEDBACK_SEARCHFORM
    }
}

        
// DC Feedback Search Form
export const ChangeDCFeedbackSearchForm = (data) => {
    return {
        type: CHANGE_DC_FEEDBACK_SEARCHFORM,
        payload: data
    }
}

export const ClearDCFeedbackSearchForm = () => {
    return {
        type: CLEAR_DC_FEEDBACK_SEARCHFORM
    }
}

// Booking Search Form
export const ChangeBookingSearchForm = (data) => {
    return {
        type: CHANGE_BOOKING_SEARCHFORM,
        payload: data
    }
}

export const ClearBookingSearchForm = () => {
    return {
        type: CLEAR_BOOKING_SEARCHFORM
    }
}


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


// Request Register Form
export const ChangeCollectorRequestRegisterForm = (data) => {
    return {
        type: CHANGE_COLLECTOR_REQUEST_REGISTER_SEARCHFORM,
        payload: data
    }
}

export const ClearCollectorRequestRegisterForm = () => {
    return {
        type: CLEAR_COLLECTOR_REQUEST_REGISTER_SEARCHFORM
    }
}

export const ChangeDealerRequestRegisterForm = (data) => {
    return {
        type: CHANGE_DEALER_REQUEST_REGISTER_SEARCHFORM,
        payload: data
    }
}

export const ClearDealerRequestRegisterForm = () => {
    return {
        type: CLEAR_DEALER_REQUEST_REGISTER_SEARCHFORM
    }
}

// Dealer Search Form
export const ChangeDealerSearchForm = (data) => {
    return {
        type: CHANGE_DEALER_SEARCHFORM,
        payload: data
    }
}

export const ClearDealerSearchForm = () => {
    return {
        type: CLEAR_DEALER_SEARCHFORM
    }
}
