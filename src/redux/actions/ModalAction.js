import {SHOW_SCCREATE_MODAL, HIDE_SCCREATE_MODAL,
        ENQUEUE_SNACKBAR, REMOVE_SNACKBAR} from '../../utils/constants/ActionConstants';

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