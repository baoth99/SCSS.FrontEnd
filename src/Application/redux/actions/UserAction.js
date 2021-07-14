import {SEARCH_USER, SEARCH_USER_SUCCESS, GET_USER_DETAIL, GET_USER_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchUser = ({phone, name, email, address, idCard, gender, role, status, page, pageSize}) => {
    return {
        type: SEARCH_USER,
        payload: {
            phone: phone,
            name: name,
            email: email,
            address: address,
            idCard: idCard,
            gender: gender,
            role: role, status,
            page: page,
            page: pageSize
        }
    }
}

export const SearchUserSuccess = (data) => {
    return {
        type: SEARCH_USER_SUCCESS,
        payload: data
    }
}


export const GetUserDetail = (id) => {
    return {
        type: GET_USER_DETAIL,
        payload: {
            id: id
        }
    }
}

export const GetUserDetailSuccess = (data) => {
    return {
        type: GET_USER_DETAIL_SUCCESS,
        payload: data
    }
}