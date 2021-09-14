import {SHOW_CONFIRM_DIALOG, HIDE_CONFIRM_DIALOG,
        SHOW_IMAGE_SLIDER_DETAIL_MODAL, HIDE_IMAGE_SLIDER_DETAIL_MODAL} from '../../../Infrastucture/utils/constants/ActionConstants';

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

const initialImageSliderState = {
    id: '',
    name: '',
    createdTime: '',
    base64String: '',
    isSelected: '',
    showModal: false
}

export function ImageSliderDetailReducer (state = initialImageSliderState, action)  {
    switch (action.type) {
        case SHOW_IMAGE_SLIDER_DETAIL_MODAL: {
            return {
                ...action.payload
            }
        }
        case HIDE_IMAGE_SLIDER_DETAIL_MODAL: {
            return {
                ...initialImageSliderState,
                showModal: false
            }
        }
        default:
           return state;
    }
}