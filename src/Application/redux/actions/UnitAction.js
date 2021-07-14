import {SEARCH_UNIT, SEARCH_UNIT_SUCCESS, CREATE_NEW_UNIT, REMOVE_UNIT} from '../../../Infrastucture/utils/constants/ActionConstants';

export const SearchUnit = ({name ,page, pageSize}) => {
    return {
        type: SEARCH_UNIT,
        payload: {
            name: name,
            page: page,
            pageSize: pageSize
        }
    }
}

export const SearchUnitSuccess = (list, total) => {
    return {
        type: SEARCH_UNIT_SUCCESS,
        payload: {
            list: list,
            total: total
        }
    }
}

export const CreateNewUnit = (name) => {
    return {
        type: CREATE_NEW_UNIT,
        payload: {
            name: name
        }
    }
}

export const RemoveUnit = (id) => {
    return {
        type: REMOVE_UNIT,
        payload: {
            id: id
        }
    }
}