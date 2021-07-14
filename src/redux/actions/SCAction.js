import {SEARCH_SC, SEARCH_SC_SUCCESS,
        GET_SC_DETAIL, GET_SC_DETAIL_SUCCESS,
        CREATE_NEW_SC, REMOVE_SC, UPDATE_SC} from '../../utils/constants/ActionConstants';

export const RemoveSC= (id, detail) => {
    return {
        type: REMOVE_SC,
        payload: {
            id: id,
            detail: detail
        }
    }
}

export const UpdateSC = ({id, name, unit, image, isDeleteImg, description}) => {
    return {
        type: UPDATE_SC,
        payload: {
            id: id,
            name: name,
            unit: unit,
            image: image,
            isDeleteImg: isDeleteImg,
            description: description
        }
    }
}

export const SearchSC = ({name, description, unit, createdBy , page, pageSize}) => {
    return {
        type: SEARCH_SC,
        payload: {
            name: name,
            description: description,
            unit: unit,
            createdBy: createdBy,
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


export const GetSCDetailSuccess = ({id, name, image, unitId, description, createdBy, createdTime}) => {
    return {
        type: GET_SC_DETAIL_SUCCESS,
        payload: {
            id: id,
            name: name,
            image: image,
            unit: unitId,
            description: description,
            createdBy: createdBy,
            createdTime: createdTime
        }
    }
}

