import {SEARCH_BOOKING, SEARCH_BOOKING_SUCCESS, GET_BOOKING_DETAIL, GET_BOOKING_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchBooking = ({collectingRequestCode, requestedBy, receivedBy, status, fromDate, toDate, page, pageSize}) => {
    return {
        type: SEARCH_BOOKING,
        payload: {
            collectingRequestCode: collectingRequestCode,
            requestedBy: requestedBy,
            receivedBy: receivedBy,
            status: status,
            fromDate: fromDate,
            toDate: toDate,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchBookingSuccess = (list, total) => {
    return {
        type: SEARCH_BOOKING_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const GetBookingDetail = (id) => {
    return {
        type: GET_BOOKING_DETAIL,
        payload : {
            id: id
        }
    }
}

export const GetBookingDetailSuccess = (data) => {
    return {
        type: GET_BOOKING_DETAIL_SUCCESS,
        payload: {
            ...data
        }
    }
}

