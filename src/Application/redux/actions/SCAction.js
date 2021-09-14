import {SEARCH_SC, SEARCH_SC_SUCCESS,
        GET_SC_DETAIL, GET_SC_DETAIL_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';


export const SearchSC = ({name, status, phoneCreatedBy, createdBy, role, page, pageSize}) => {
    return {
        type: SEARCH_SC,
        payload: {
            name: name,
            status: status,
            phoneCreatedBy: phoneCreatedBy,
            createdBy: createdBy,
            role: role,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchSCSuccess = (list, total) => {
    return {
        type: SEARCH_SC_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}


export const GetSCDetail = (id) => {
    return {
        type: GET_SC_DETAIL,
        payload: {
            id: id
        }
    }
}


export const GetSCDetailSuccess = ({name, dealerName, manageBy, createdBy, status, imageUrl, role, createdTime, updatedTime, items}) => {
    return {
        type: GET_SC_DETAIL_SUCCESS,
        payload: {
            name: name,
            dealerName: dealerName,
            manageBy: manageBy,
            createdBy: createdBy,
            status: status,
            imageUrl: imageUrl,
            role: role,
            createdTime: createdTime,
            updatedTime: updatedTime,
            items: items
        }
    }
}

