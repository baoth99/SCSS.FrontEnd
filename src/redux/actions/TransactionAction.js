import {SEARCH_DC_TRANSACTION, SEARCH_DC_TRANSACTION_SUCCESS,
        GET_DC_TRANSACTION_DETAIL, GET_DC_TRANSACTION_DETAIL_SUCCESS,
        SEARCH_CS_TRANSACTION, SEARCH_CS_TRANSACTION_SUCCESS,
        GET_CS_TRANSACTION_DETAIL, GET_CS_TRANSACTION_DETAIL_SUCCESS} from '../../utils/constants/ActionConstants';

export const SearchDCTransaction = ({transactionCode, dealerName,dealerPhone, dealAddress, collectorName, collectorPhone, fromDate, toDate, fromTime, toTime, page, pageSize}) => {
    return {
        type: SEARCH_DC_TRANSACTION,
        payload: {
            transactionCode: transactionCode,
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            dealAddress: dealAddress,
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