import {FETCH_UNIT, FETCH_UNIT_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';
import {BookingHubConnection} from '../../../Infrastucture/services/SignalRService';




export const FeatchAmountOfBookingReducer = (state = 0) => {
    return state;
}



export const FetchUnitReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_UNIT: {
            return [
                ...state
            ]
        }    
        case FETCH_UNIT_SUCCESS: {
            return [
                ...action.payload
            ]
        }
        default:
            return state;
    }
}

