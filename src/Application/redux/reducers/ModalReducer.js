import {HIDE_SCCREATE_MODAL, SHOW_SCCREATE_MODAL,
        SHOW_CONFIRM_DIALOG, HIDE_CONFIRM_DIALOG} from '../../../Infrastucture/utils/constants/ActionConstants';

const initialState = {
    showModal: false
}

export function SCCreateModalReducer(state = initialState, action)  {
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

const initialConfirmDialogState = {
    showModal: false,
    title: "",
    message: "",
    action: null
}
export function ConfirmDialogReducer(state = initialConfirmDialogState, action) {
    switch (action.type) {
        case SHOW_CONFIRM_DIALOG: {
            return {
                ...action.payload,
                //showModal: true

            }
        }
        case HIDE_CONFIRM_DIALOG: {
            return {
                ...initialConfirmDialogState,
                showModal: false
            }
        }
        default:
            return state;
    }
}