import {FETCH_UNIT, FETCH_UNIT_SUCCESS, FETCH_AMOUNT_BOOKING} from '../../../Infrastucture/utils/constants/ActionConstants';

export const FeatchAmountOfBookingReducer = (state = 0, action) => {
    switch (action.type) {
        case FETCH_AMOUNT_BOOKING:{
            return action.payload           
        }
        default: {
            return state
        }
    }
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

