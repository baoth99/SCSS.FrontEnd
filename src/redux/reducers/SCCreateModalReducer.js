import {HIDE_SCCREATE_MODAL, SHOW_SCCREATE_MODAL} from '../../utils/constants/ActionConstants';

const initialState = {
    showModal: false
}

export default function SCCreateModalReducer(state = initialState, action)  {
    switch (action.type) {
        case SHOW_SCCREATE_MODAL: {
            return {
                ...state,
                showModal: true
            }
        }
        case HIDE_SCCREATE_MODAL: {
            return {
                ...state,
                showModal: false
            }
        }    
        default:
            return state;
    }
}