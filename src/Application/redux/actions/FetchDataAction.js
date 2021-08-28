import {FETCH_UNIT, FETCH_UNIT_SUCCESS, FETCH_AMOUNT_BOOKING, HUB_CONNECTION} from '../../../Infrastucture/utils/constants/ActionConstants';

export const FetchUnit = () => {
    return {
        type: FETCH_UNIT
    }
}

export const FetchUnitSuccess = (data) => {
    return {
        type: FETCH_UNIT_SUCCESS,
        payload: data
    }
}

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