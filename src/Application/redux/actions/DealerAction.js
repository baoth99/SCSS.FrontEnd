import {SEARCH_DEALER, SEARCH_DEALER_SUCCESS,
    GET_DEALER_DETAIL, GET_DEALER_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchDealer = ({dealerName, dealerPhone, managedBy, dealerAddress, status, dealerType, page, pageSize}) => {
    return {
        type: SEARCH_DEALER,
        payload:{
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            managedBy: managedBy,
            dealerAddress: dealerAddress,
            status: status,
            dealerType: dealerType,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchDealerSucess = (list, total) => {
    return {
        type: SEARCH_DEALER_SUCCESS,
        payload:{
            list: list,
            total: total
        }
    }
}

export const GetDealerDetail = (id) => {
    return {
        type: GET_DEALER_DETAIL,
        payload: {
            id: id
        }
    }
}

export const GetDealerDetailSuccess = ({accountId, accountName, accountPhone, accountRole, 
                                        dealerId, dealerName, dealerPhone, dealerAddress, 
                                        dealerLatitude, dealerLongtitude, dealerOpenTime, 
                                        dealerCloseTime, dealerCreatedTime, dealerImageUrl, 
                                        dealerIsActive, dealerIsSubcribed, dealerType,
                                        accountLeaderId, dealerLeaderId }) => {
    return {
        type: GET_DEALER_DETAIL_SUCCESS,
        payload: {
            accountId: accountId,
            accountName: accountName,
            accountPhone: accountPhone,
            accountRole: accountRole,
            //
            dealerId: dealerId,
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            dealerAddress: dealerAddress,
            dealerLatitude: dealerLatitude,
            dealerLongtitude: dealerLongtitude,
            dealerOpenTime: dealerOpenTime,
            dealerCloseTime: dealerCloseTime,
            dealerCreatedTime: dealerCreatedTime,
            dealerImageUrl: dealerImageUrl,
            dealerIsActive: dealerIsActive,
            dealerIsSubcribed: dealerIsSubcribed,
            dealerType: dealerType,
            accountLeaderId: accountLeaderId,
            dealerLeaderId: dealerLeaderId
        }
    }
}