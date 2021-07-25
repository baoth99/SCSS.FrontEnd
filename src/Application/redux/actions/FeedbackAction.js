import {SEARCH_DC_FEEDBACK, SEARCH_DC_FEEDBACK_SUCCESS, SEARCH_CS_FEEDBACK, SEARCH_CS_FEEDBACK_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchDCFeedback = ({transactionCode, dealerName, collectorName, rate, page, pageSize}) => {
    return {
        type: SEARCH_DC_FEEDBACK,
        payload: {
            transactionCode: transactionCode,
            dealerName: dealerName,
            collectorName: collectorName,
            rate: rate,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchDCFeedbackSuccess = (list, total) => {
    return {
        type: SEARCH_DC_FEEDBACK_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}


export const SearchCSFeedback = ({transactionCode, sellerName, collectorName, rate, page, pageSize}) => {
    return {
        type: SEARCH_CS_FEEDBACK,
        payload: {
            transactionCode: transactionCode,
            sellerName: sellerName,
            collectorName: collectorName,
            rate: rate,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchCSFeedbackSuccess = (list, total) => {
    return {
        type: SEARCH_CS_FEEDBACK_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}