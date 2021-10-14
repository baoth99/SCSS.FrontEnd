import {GET_FEEDBACK, SEARCH_DC_FEEDBACK, SEARCH_DC_FEEDBACK_SUCCESS, SEARCH_CS_FEEDBACK, SEARCH_CS_FEEDBACK_SUCCESS, REPLY_COLLECTOR_FEEDBACK, REPLY_SELLER_FEEDBACK} from '../../../Infrastucture/utils/constants/ActionConstants';



export const GetAllFeedback = () => {
    return {
        type: GET_FEEDBACK
    }
}

export const ReplySellerFeedback = ({feedbackId, repliedContent}) => {
    return {
        type: REPLY_SELLER_FEEDBACK,
        payload: {
            feedbackId: feedbackId,
            repliedContent: repliedContent,
        }
    }
}

export const ReplyCollectorFeedback = ({feedbackId, repliedContent}) => {
    return {
        type: REPLY_COLLECTOR_FEEDBACK,
        payload: {
            feedbackId: feedbackId,
            repliedContent: repliedContent,
        }
    }
}

// Modify here
export const SearchDCFeedback = ({transactionCode, dealerName, dealerPhone, collectorName, page, pageSize}) => {
    return {
        type: SEARCH_DC_FEEDBACK,
        payload: {
            transactionCode: transactionCode,
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            collectorName: collectorName,
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


export const SearchCSFeedback = ({transactionCode, sellerName, collectorName, collectorPhone, page, pageSize}) => {
    return {
        type: SEARCH_CS_FEEDBACK,
        payload: {
            transactionCode: transactionCode,
            sellerName: sellerName,
            collectorName: collectorName,
            collectorPhone: collectorPhone,
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