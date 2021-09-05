import {SEARCH_COLLECTOR_REQUEST_REGISTER, SEARCH_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        SEARCH_DEALER_REQUEST_REGISTER, SEARCH_DEALER_REQUEST_REGISTER_SUCCESS,
        GET_COLLECTOR_REQUEST_REGISTER,
        GET_COLLECTOR_REQUEST_REGISTER_SUCCESS,
        GET_DEALER_REQUEST_REGISTER,
        GET_DEALER_REQUEST_REGISTER_SUCCESS,
        FEATCH_ALL_REQUEST_REGISTER} from '../../../Infrastucture/utils/constants/ActionConstants';


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


export const SearchDealerRequestRegister = ({phone, name, dealerName, status, page, pageSize}) => {
    return {
        type: SEARCH_DEALER_REQUEST_REGISTER,
        payload: {
            phone: phone,
            name: name,
            dealerName: dealerName,
            status: status,
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