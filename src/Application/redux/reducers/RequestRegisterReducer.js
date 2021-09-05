import {SEARCH_COLLECTOR_REQUEST_REGISTER, SEARCH_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        SEARCH_DEALER_REQUEST_REGISTER, SEARCH_DEALER_REQUEST_REGISTER_SUCCESS,
        GET_COLLECTOR_REQUEST_REGISTER, GET_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        GET_DEALER_REQUEST_REGISTER, GET_DEALER_REQUEST_REGISTER_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

import {initialDataSCTable} from '../../../Infrastucture/utils/variables/InitialStateData';

export const CollectorRegisterRequestDataReducer = (state = initialDataSCTable, action) => {
    switch (action.type) {
        case SEARCH_COLLECTOR_REQUEST_REGISTER: {
            return {
                ...state
            }
        }
        case SEARCH_COLLECTOR_REQUEST_REGISTER_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_COLLECTOR_REQUEST_REGISTER: {
            return {
                ...state
            }
        }
        case GET_COLLECTOR_REQUEST_REGISTER_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default:
            return state;
    }
}



export const DealerRegisterRequestDataReducer = (state = initialDataSCTable, action) => {
    switch (action.type) {
        case SEARCH_DEALER_REQUEST_REGISTER: {
            return {
                ...state
            }
        }
        case SEARCH_DEALER_REQUEST_REGISTER_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_DEALER_REQUEST_REGISTER: {
            return {
                ...state
            }
        }
        case GET_DEALER_REQUEST_REGISTER_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default:
            return state;
    }
}