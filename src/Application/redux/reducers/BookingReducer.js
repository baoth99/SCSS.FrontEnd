import {SEARCH_BOOKING, SEARCH_BOOKING_SUCCESS, GET_BOOKING_DETAIL, GET_BOOKING_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';


const BookingReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_BOOKING: {
            return {
                ...state
            }
        }
        case SEARCH_BOOKING_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case GET_BOOKING_DETAIL: {
            return {
                ...state
            }
        }
        case GET_BOOKING_DETAIL_SUCCESS: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default BookingReducer;