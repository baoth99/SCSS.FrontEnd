import {FETCH_AMOUNT_BOOKING, HUB_CONNECTION} from '../../../Infrastucture/utils/constants/ActionConstants';


export const FeatchAmountOfBooking = (amount) => {
    return {
        type :FETCH_AMOUNT_BOOKING,
        payload: amount
    }
}

export const FeatchHubConnection = (accessToken) => {
    return {
        type : HUB_CONNECTION,
        payload: accessToken
    }
}