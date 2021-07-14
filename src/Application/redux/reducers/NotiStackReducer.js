import {ENQUEUE_SNACKBAR, REMOVE_SNACKBAR} from '../../../Infrastucture/utils/constants/ActionConstants';

const initialState = {
    notifications: []
}

export default function NotiStackReducer(state = initialState, action) {
    switch(action.type) {
        case ENQUEUE_SNACKBAR: {
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        ...action.notification
                    }
                ]
            }
        }
        case REMOVE_SNACKBAR: {
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.key !== action.key,
                ),
            };
        }
        default:
            return state;
    }
}