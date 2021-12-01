import {SEARCH_COLLECTOR_REQUEST_REGISTER, SEARCH_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        SEARCH_DEALER_REQUEST_REGISTER, SEARCH_DEALER_REQUEST_REGISTER_SUCCESS,
        GET_COLLECTOR_REQUEST_REGISTER,
        GET_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        GET_DEALER_REQUEST_REGISTER,
        GET_DEALER_REQUEST_REGISTER_SUCCESS,
        FEATCH_ALL_REQUEST_REGISTER,
        CHANGE_REQUEST_REGISTER_STATUS,
        UPDATE_COLLECTOR_REGISTER} from '../../../Infrastucture/utils/constants/ActionConstants';

        

export const UpdateCollectorRegister = ({id, name, address, gender, birthDate, idCard, imageFile}) => {
    return {
        type: UPDATE_COLLECTOR_REGISTER,
        payload: {
            id: id,
            name: name,
            address: address,
            gender: gender,
            birthDate: birthDate,
            idCard: idCard,
            imageFile: imageFile
        }
    }
}



export const FetchAllRequestRegister = () => {
    return {
        type: FEATCH_ALL_REQUEST_REGISTER
    }
}

export const SearchCollectorRequestRegister = ({phone, name, status, page, pageSize}) => {
    return {
        type: SEARCH_COLLECTOR_REQUEST_REGISTER,
        payload: {
            phone: phone,
            name: name,
            status: status,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchCollectorRequestRegisterSuccess = (list, total) => {
    return {
        type: SEARCH_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const GetCollectorRequestRegister = (id) => {
    return {
        type: GET_COLLECTOR_REQUEST_REGISTER,
        payload: {
            id: id
        }
    }
}

export const GetCollectorRequestRegisterSuccess = ({id, name, address, birthDate, gender, idCard, phone, registerTime, status}) => {
    return {
        type: GET_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        payload: {
            id: id,
            name: name,
            address: address,
            birthDate: birthDate,
            gender: gender,
            idCard: idCard,
            phone: phone,
            registerTime: registerTime,
            status: status
        }
    }
}


export const SearchDealerRequestRegister = ({phone, name, dealerName, status, dealerType, page, pageSize}) => {
    return {
        type: SEARCH_DEALER_REQUEST_REGISTER,
        payload: {
            phone: phone,
            name: name,
            dealerName: dealerName,
            status: status,
            dealerType: dealerType,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchDealerRequestRegisterSuccess = (list, total) => {
    return {
        type: SEARCH_DEALER_REQUEST_REGISTER_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const GetDealerRequestRegister = (id) => {
    return {
        type: GET_DEALER_REQUEST_REGISTER,
        payload: {
            id: id
        }
    }
}

export const GetDealerRequestRegisterSuccess = ({id, accountName, accountPhone, accountAddress, 
                                                accountStatus, birthDate, dealerType, gender, idCard,
                                                dealerName, dealerPhone, dealerAddress, dealerImageUrl, dealerLatitude, dealerLongitude,
                                                dealerLeaderName, dealerLeaderId, managerLeaderId, managerName, managerPhone}) => {
    return {
        type: GET_DEALER_REQUEST_REGISTER_SUCCESS,
        payload: {
            id: id,
            accountName: accountName,
            accountPhone: accountPhone,
            accountAddress: accountAddress,
            accountStatus: accountStatus,
            birthDate: birthDate,
            dealerType: dealerType,
            gender: gender,
            idCard: idCard,
            //Dealer Info
            dealerName: dealerName,
            dealerPhone: dealerPhone,
            dealerAddress: dealerAddress,
            dealerImageUrl: dealerImageUrl,
            dealerLatitude: dealerLatitude,
            dealerLongitude: dealerLongitude,
            // Dealer Leader Info
            dealerLeaderName: dealerLeaderName,
            dealerLeaderId: dealerLeaderId,
            managerLeaderId: managerLeaderId,
            managerName: managerName,
            managerPhone: managerPhone
        }
    }
}


export const ChangeRequestRegisterStatus = (id, status) => {
    return {
        type: CHANGE_REQUEST_REGISTER_STATUS,
        payload: {
            id: id,
            status: status
        }
    }
}