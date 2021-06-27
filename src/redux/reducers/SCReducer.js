import {SEARCH_SC_SUCCESS, SEARCH_SC,
        GET_SC_DETAIL, GET_SC_DETAIL_SUCCESS,
        CREATE_NEW_SC} from '../../utils/constants/ActionConstants';

import {initialDataSCTable} from '../../variables/InitialStateData';

export const SCTableReducer = (state = initialDataSCTable, action) => {
    switch (action.type) {
        case SEARCH_SC: {
            return {
                ...state
            };
        }
        case SEARCH_SC_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        } 
        case CREATE_NEW_SC: {
            return {
                ...state
            }
        }
        case GET_SC_DETAIL: {
            return {
                ...state
            }
        }
        case GET_SC_DETAIL_SUCCESS: {
            return {
                data: action.payload
            }
        }
        default:{
            return state;
        }
    }
}
