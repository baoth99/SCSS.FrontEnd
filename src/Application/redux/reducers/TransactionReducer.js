import {SEARCH_DC_TRANSACTION, SEARCH_DC_TRANSACTION_SUCCESS,
        SEARCH_CS_TRANSACTION, SEARCH_CS_TRANSACTION_SUCCESS,
        GET_DC_TRANSACTION_DETAIL, GET_DC_TRANSACTION_DETAIL_SUCCESS,
        GET_CS_TRANSACTION_DETAIL, GET_CS_TRANSACTION_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const DCTransactionTableReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_DC_TRANSACTION: {
            return {
                ...state
            }
        }
        case SEARCH_DC_TRANSACTION_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_DC_TRANSACTION_DETAIL: {
            return {
                ...state
            }
        }
        case GET_DC_TRANSACTION_DETAIL_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }   
    }
}


export const CSTransactionTableReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_CS_TRANSACTION: {
            return {
                ...state
            }
        }
        case SEARCH_CS_TRANSACTION_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_CS_TRANSACTION_DETAIL: {
            return {
                ...state
            }
        }
        case GET_CS_TRANSACTION_DETAIL_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }   
    }
}