import {SHOW_LOADING, HIDE_LOADING} from '../../utils/constants/ActionConstants';

const initialState = {
    showLoading: false
}

export default function LoadingReducer(state = initialState, action)  {
    switch (action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                showLoading: true
            }
        }
        case HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            }
        }    
        default:
            return state;
    }
}