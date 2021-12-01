import {SEARCH_SELLER_COMPLAINT, GET_SELLER_COMPLAINT,
        SEARCH_COLLECTOR_COMPLAINT, GET_COLLECTOR_COMPLAINT,
        SEARCH_DEALER_COMPLAINT, GET_DEALER_COMPLAINT,
        REPLY_SELLER_COMPLAINT, REPLY_COLLECTOR_COMPLAINT, REPLY_DEALER_COMPLAINT} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchSellerComplaint = ({sellerPhone, sellerName, page, pageSize}) => {
    return {
        type: SEARCH_SELLER_COMPLAINT,
        payload: {
            sellerPhone: sellerPhone,
            sellerName: sellerName,
            page: page,
            pageSize: pageSize
        }
    }
}

export const GetSellerComplaints = (list, total) => {
    return {
        type: GET_SELLER_COMPLAINT,
        payload : {
            list: list,
            total: total
        }
    }
}

export const SearchCollectorComplaint = ({collectorPhone, collectorName, page, pageSize}) => {
    return {
        type: SEARCH_COLLECTOR_COMPLAINT,
        payload: {
            collectorPhone: collectorPhone,
            collectorName: collectorName,
            page: page,
            pageSize: pageSize
        }
    }
}

export const GetCollectorComplaints = (list, total) => {
    return {
        type: GET_COLLECTOR_COMPLAINT,
        payload: {
            list: list,
            total: total
        }
    }
}

export const SearchDealerComplaint = ({dealerPhone, dealerName, page, pageSize}) => {
    return {
        type: SEARCH_DEALER_COMPLAINT,
        payload: {
            dealerPhone: dealerPhone,
            dealerName: dealerName,
            page: page,
            pageSize: pageSize
        }
    }
}

export const GetDealerComplaints = (list, total) => {
    return {
        type: GET_DEALER_COMPLAINT,
        payload: {
            list: list,
            total: total
        }
    }
}

export const ReplySellerComplaint = ({id, replyContent}) => {
    return {
        type: REPLY_SELLER_COMPLAINT,
        payload: {
            id: id,
            replyContent: replyContent
        }
    }
}

export const ReplyCollectorComplaint = ({id, replyContent}) => {
    return {
        type: REPLY_COLLECTOR_COMPLAINT,
        payload: {
            id: id,
            replyContent: replyContent
        }
    }
}

export const ReplyDealerComplaint = ({id, replyContent}) => {
    return {
        type: REPLY_DEALER_COMPLAINT,
        payload: {
            id: id,
            replyContent: replyContent
        }
    }
}