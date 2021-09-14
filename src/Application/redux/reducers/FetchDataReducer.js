import {FETCH_AMOUNT_BOOKING} from '../../../Infrastucture/utils/constants/ActionConstants';

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


