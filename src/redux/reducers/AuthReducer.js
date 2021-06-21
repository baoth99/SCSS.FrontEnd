import {STORE_ACCOUNT, SIGNED_OUT} from '../../utils/constants/ActionConstants'

const initialState = {
    user : null
}

export default function AuthReducer(state = initialState, action)  {
    switch (action.type) {
        case STORE_ACCOUNT:{
            return {
                ...state,
                user: action.payload
            }
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
