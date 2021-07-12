import {FETCH_UNIT, FETCH_UNIT_SUCCESS} from '../../utils/constants/ActionConstants';

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