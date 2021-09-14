import {SEARCH_DEALER, SEARCH_DEALER_SUCCESS,
    GET_DEALER_DETAIL, GET_DEALER_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

const DealerInformationReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_DEALER: {
            return {
                ...state
            }
        }
        case SEARCH_DEALER_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_DEALER_DETAIL: {
            return {
                ...state
            }
        }
        case GET_DEALER_DETAIL_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default DealerInformationReducer;