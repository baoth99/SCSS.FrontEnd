import {GET_SYS_CONFIG_INFO, GET_SYS_CONFIG_INFO_SUCCESS, MODIFY_SYS_CONFIG, CHANGE_CONFIG_INFO} from '../../../Infrastucture/utils/constants/ActionConstants';

export const GetSysConfigInfo = () => {
    return {
        type: GET_SYS_CONFIG_INFO
    }
}


export const ChangeConfigInfo = (name) => {
    return {
        type: CHANGE_CONFIG_INFO,
        payload: {
            [name]: name
        }
    }
}


export const GetSysConfigInfoSuccess = (configIsUsing, histories) => {
    return {
        type: GET_SYS_CONFIG_INFO_SUCCESS,
        payload: {
            configIsUsing: configIsUsing,
            histories: histories
        }
    }
}

export const ModifySysConfig = ({cancelTimeRange, timeRangeRequestNow, requestQuantity, 
                                maxNumberOfRequestDays, receiveQuantity, feedbackDeadline, 
                                operatingTimeFrom, operatingTimeTo }) => {
    return {
        type: MODIFY_SYS_CONFIG,
        payload: {
            cancelTimeRange: cancelTimeRange,
            timeRangeRequestNow: timeRangeRequestNow,
            requestQuantity: requestQuantity,
            maxNumberOfRequestDays: maxNumberOfRequestDays,
            receiveQuantity: receiveQuantity,
            feedbackDeadline: feedbackDeadline,
            operatingTimeFrom: operatingTimeFrom,
            operatingTimeTo: operatingTimeTo
        }
    }
}