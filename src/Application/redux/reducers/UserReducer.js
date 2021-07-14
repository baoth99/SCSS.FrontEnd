import {SEARCH_USER, SEARCH_USER_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';
import {initialDataSCTable} from '../../../Infrastucture/utils/variables/InitialStateData';


export const UserTableReducer = (state = initialDataSCTable, action) => {
    switch (action.type) {
        case SEARCH_USER: {
            return {
                ...state
            };
        }
        case SEARCH_USER_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }   
        default:{
            return state;
        }
    }
}

