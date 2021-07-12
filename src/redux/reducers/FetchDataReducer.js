import {FETCH_UNIT, FETCH_UNIT_SUCCESS} from '../../utils/constants/ActionConstants';


export const FetchUnitReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_UNIT: {
            return [
                ...state
            ]
        }    
        case FETCH_UNIT_SUCCESS: {
            return [
                ...action.payload
            ]
        }
        default:
            return state;
    }
}

