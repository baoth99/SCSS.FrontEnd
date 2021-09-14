import {ENQUEUE_SNACKBAR, REMOVE_SNACKBAR, 
        SHOW_CONFIRM_DIALOG, HIDE_CONFIRM_DIALOG,
        SHOW_IMAGE_SLIDER_DETAIL_MODAL, HIDE_IMAGE_SLIDER_DETAIL_MODAL} from '../../../Infrastucture/utils/constants/ActionConstants';


export const ShowImageSliderDetail = (id, name, createdTime, base64String, isSelected) => {
    return {
        type: SHOW_IMAGE_SLIDER_DETAIL_MODAL, 
        payload: {
            id: id,
            name: name,
            createdTime: createdTime,
            base64String: base64String,
            isSelected: isSelected,
            showModal: true
        }
    }
}


export const HideImageSliderDetail = () => {
    return {
        type: HIDE_IMAGE_SLIDER_DETAIL_MODAL
    }
}


export const ShowConfirmDialog = (title, message, action) => {
    return {
        type: SHOW_CONFIRM_DIALOG,
        payload: {
            showModal: true,
            title: title,
            message: message,
            action: action
        }
    }
}

export const HideConfirmDialog = () => {
    return {
        type: HIDE_CONFIRM_DIALOG,
    }
}


export const EnqueSnackBar = (notification) => {
    const key = notification.options && notification.options.key;
    return {
        type: ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || new Date().getTime() + Math.random()
        }
    }
}

export const RemoveSnackBar = (key) => {
    return {
        type: REMOVE_SNACKBAR,
        key
    }
}