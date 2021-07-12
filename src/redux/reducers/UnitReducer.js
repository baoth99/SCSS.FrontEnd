import {CREATE_NEW_UNIT, SEARCH_UNIT, SEARCH_UNIT_SUCCESS, REMOVE_UNIT} from '../../utils/constants/ActionConstants';

const UnitReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_UNIT: {
            return {
                ...state
            }
        }
        case SEARCH_UNIT_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        case CREATE_NEW_UNIT: {
            return {
                ...state
            }
        }
        case REMOVE_UNIT: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }        
    }
}
export default UnitReducer;