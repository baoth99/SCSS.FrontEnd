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
import {initialSCSearchFormState, initialUserFormState, 
        initialDCTransactionSearchFormState,
        initialCSTransactionSearchFormState, 
        initialBookingSearchFormState,
        initialDCFeedbackSearchFormState,
        initialCSFeedbackSearchFormState,
        initialCollectorRRSearchFormState,
        initialDealerRRSearchFormState,
        initialDealerSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';


export const DCFeedbackSearchFormReducer = (state = initialDCFeedbackSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_DC_FEEDBACK_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_DC_FEEDBACK_SEARCHFORM: {
            return {
                ...initialDCFeedbackSearchFormState
            }
        }
        default:
            return state;
    }
}

export const CSFeedbackSearchFormReducer = (state = initialCSFeedbackSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_CS_FEEDBACK_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_CS_FEEDBACK_SEARCHFORM: {
            return {
                ...initialCSFeedbackSearchFormState
            }
        }
        default:
            return state;
    }
}

export const BookingSearchFormReducer = (state = initialBookingSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_BOOKING_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_BOOKING_SEARCHFORM: {
            return {
                ...initialBookingSearchFormState
            }
        }       
        default:
            return state;
    }
}


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

export const CollectorRequestRegisterSearchFormReducer = (state = initialCollectorRRSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_COLLECTOR_REQUEST_REGISTER_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_COLLECTOR_REQUEST_REGISTER_SEARCHFORM: {
            return  {
                ...initialCollectorRRSearchFormState
            }
        }
        default:
            return state;
    }
}

export const DealerRequestRegisterSearchFormReducer = (state = initialDealerRRSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_DEALER_REQUEST_REGISTER_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_DEALER_REQUEST_REGISTER_SEARCHFORM: {
            return  {
                ...initialDealerRRSearchFormState
            }
        }
        default:
            return state;
    }
}

export const DealerSearchFormReducer = (state = initialDealerSearchFormState, action) => {
    switch (action.type) {
        case CHANGE_DEALER_SEARCHFORM: {
            return {
                ...action.payload
            }
        }
        case CLEAR_DEALER_SEARCHFORM: {
            return {
                ...initialDealerSearchFormState
            }
        }
        default:
            return state;
    }
}