import {SHOW_SCCREATE_MODAL, HIDE_SCCREATE_MODAL,
        ENQUEUE_SNACKBAR, REMOVE_SNACKBAR, 
        SHOW_CONFIRM_DIALOG, HIDE_CONFIRM_DIALOG} from '../../utils/constants/ActionConstants';

export const ShowSCCreate = () => {
    return {
        type : SHOW_SCCREATE_MODAL
    }
}

export const HideSCCreate = () => {
    return {
        type : HIDE_SCCREATE_MODAL
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