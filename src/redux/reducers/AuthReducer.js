import {STORE_ACCOUNT, STORE_ACCOUNT_ERROR, SIGNED_OUT} from '../../utils/constants/ActionConstants'
import {LoadAccountInfo} from '../../utils/storage/AuthStorage'
import userManager from '../../services/AuthService';

const account = LoadAccountInfo();

const initialState = {
    user : account
}

export default function AuthReducer(state = initialState, action)  {
    switch (action.type) {
        case STORE_ACCOUNT:{
            return {
                ...state,
                user: action.payload
            }
        }
        case STORE_ACCOUNT_ERROR:{
            
        }
        case SIGNED_OUT: {
            //remove session storage and local storage
            return {
                ...state,
                user: null
            }
        }
        default:
            return state;
    }
}
