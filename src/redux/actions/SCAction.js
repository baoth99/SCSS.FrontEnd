import {SEARCH_SC, SEARCH_SC_SUCCESS,
        GET_SC_DETAIL, GET_SC_DETAIL_SUCCESS,
        CREATE_NEW_SC, REMOVE_SC} from '../../utils/constants/ActionConstants';

export const RemoveSC= (id, history) => {
    return {
        type: REMOVE_SC,
        payload: {
            id: id,
            history: history
        }
    }
}


export const SearchSC = ({name, description, unit, page, pageSize, sortField, isSortDesc}) => {
    return {
        type: SEARCH_SC,
        payload: {
            name: name,
            description: description,
            unit: unit,
            page: page,
            pageSize: pageSize,
            sortField: sortField,
            isSortDesc: isSortDesc
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

export const CreateNewSC = ({name, unit, image, description}) => {
    return {
        type: CREATE_NEW_SC,
        payload: {
            name: name,
            unit: unit,
            image: image,
            description: description
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

export const GetSCDetailSuccess = (id, name, imageUrl, unit, description, createdBy, createdTime) => {
    return {
        type: GET_SC_DETAIL,
        payload: {
            id: id,
            name: name,
            imageUrl: imageUrl,
            unit: unit,
            description: description,
            createdBy: createdBy,
            createdTime: createdTime
        }
    }
}

