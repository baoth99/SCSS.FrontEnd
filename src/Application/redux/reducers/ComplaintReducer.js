import {SEARCH_SELLER_COMPLAINT, GET_SELLER_COMPLAINT,
        SEARCH_COLLECTOR_COMPLAINT, GET_COLLECTOR_COMPLAINT,
        SEARCH_DEALER_COMPLAINT, GET_DEALER_COMPLAINT} from '../../../Infrastucture/utils/constants/ActionConstants';
import {initialComplaintState} from '../../../Infrastucture/utils/variables/InitialStateData';

export const SellerComplaintReducer = (state = initialComplaintState, action) => {
    switch (action.type) {
        case SEARCH_SELLER_COMPLAINT: {
            return {
                ...state
            };
        }
        case GET_SELLER_COMPLAINT: {
            return {
                ...state,
                list: action.payload.list,
                total: action.payload.total
            }
        }
        default: {
            return state;
        }
    }
}

export const CollectorComplaintReducer = (state = initialComplaintState, action) => {
    switch (action.type) {
        case SEARCH_COLLECTOR_COMPLAINT: {
            return {
                ...state
            };
        }
        case GET_COLLECTOR_COMPLAINT: {
            return {
                ...state,
                list: action.payload.list,
                total: action.payload.total
            }
        }
        default: {
            return state;
        }
    }
}

export const DealerComplaintReducer = (state = initialComplaintState, action) => {
    switch (action.type) {
        case SEARCH_DEALER_COMPLAINT: {
            return {
                ...state
            };
        }
        case GET_DEALER_COMPLAINT: {
            return {
                ...state,
                list: action.payload.list,
                total: action.payload.total
            }
        }
        default: {
            return state;
        }
    }
}
