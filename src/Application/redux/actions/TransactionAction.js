import {SEARCH_DC_TRANSACTION, SEARCH_DC_TRANSACTION_SUCCESS,
        GET_DC_TRANSACTION_DETAIL, GET_DC_TRANSACTION_DETAIL_SUCCESS,
        SEARCH_CS_TRANSACTION, SEARCH_CS_TRANSACTION_SUCCESS,
        GET_CS_TRANSACTION_DETAIL, GET_CS_TRANSACTION_DETAIL_SUCCESS,
        FETCH_ALL_TRASACTION} from '../../../Infrastucture/utils/constants/ActionConstants';

export const FetchAllTransaction = () => {
    return {
        type: FETCH_ALL_TRASACTION
    }
}

export const SearchDCTransaction = ({transactionCode, dealerName,dealerPhone, collectorName, collectorPhone, fromDate, toDate, fromTime, toTime, page, pageSize}) => {
    return {
        type: SEARCH_DC_TRANSACTION,
        payload: {
            transactionCode: transactionCode,
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            collectorName: collectorName,
            collectorPhone: collectorPhone,
            fromDate: fromDate,
            toDate, toDate,
            fromTime: fromTime,
            toTime: toTime,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchDCTransactionSuccess = (list, total) => {
    return {
        type: SEARCH_DC_TRANSACTION_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const GetDCTransactionDetail = (id) => {
    return {
        type: GET_DC_TRANSACTION_DETAIL,
        payload: {
            id: id
        }
    }
}

export const GetDCTransactionDetailSuccess = ({transactionCode, transactionDateTime, dealerAddress, dealerPhone, dealerOwnerName, collectorName, collectorPhone, awardPoint, bonusAmountTotal, promotions, collectorFeedback, transactionDetails, total}) => {
    return {
        type: GET_DC_TRANSACTION_DETAIL_SUCCESS,
        payload: {
            transactionCode: transactionCode,
            transactionDateTime: transactionDateTime,
            dealerAddress: dealerAddress,
            dealerPhone: dealerPhone,
            dealerOwnerName: dealerOwnerName,
            collectorName: collectorName,
            collectorPhone: collectorPhone,
            awardPoint: awardPoint,
            collectorFeedback: collectorFeedback,
            transactionDetails: transactionDetails,
            bonusAmountTotal: bonusAmountTotal,
            promotions: promotions,
            total: total,
        }
    }
}


export const SearchCSTransaction = ({transactionCode, sellerName,sellerPhone, sellerAddress, collectorName, collectorPhone, fromDate, toDate, fromTime, toTime, page, pageSize}) => {
    return {
        type: SEARCH_CS_TRANSACTION,
        payload: {
            transactionCode: transactionCode,
            sellerName: sellerName,
            sellerPhone: sellerPhone,
            sellerAddress: sellerAddress,
            collectorName: collectorName,
            collectorPhone: collectorPhone,
            fromDate: fromDate,
            toDate, toDate,
            fromTime: fromTime,
            toTime: toTime,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchCSTransactionSuccess = (list, total) => {
    return {
        type: SEARCH_CS_TRANSACTION_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const GetCSTransactionDetail = (id) => {
    return {
        type: GET_CS_TRANSACTION_DETAIL,
        payload: {
            id: id
        }
    }
}

export const GetCSTransactionDetailSuccess = ({transactionCode, transactionDate, address, feedback, sellerName, sellerPhone, collectorName, collectorPhone, collectingRequestDate, awardPoint, total, transDetails}) => {
    return {
        type: GET_CS_TRANSACTION_DETAIL_SUCCESS,
        payload: {
            transactionCode: transactionCode,
            transactionDate: transactionDate,
            address: address,
            feedback: feedback,
            sellerName: sellerName,
            sellerPhone: sellerPhone,
            collectorName: collectorName,
            collectorPhone: collectorPhone,
            collectingRequestDate: collectingRequestDate,
            awardPoint: awardPoint,
            total: total,
            transDetails: transDetails
        }
    }
}