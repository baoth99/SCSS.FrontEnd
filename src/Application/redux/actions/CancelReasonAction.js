import { GET_CANCEL_REASON, GET_CANCEL_REASON_SUCCESS, CREATE_NEW_CANCEL_REASON, UPDATE_CANCEL_REASON, DELETE_CANCEL_REASON} from '../../../Infrastucture/utils/constants/ActionConstants';


export const GetCancelReason = () => {
    return {
        type: GET_CANCEL_REASON,
    }
}

export const GetCancelReasonSuccess = (list) => {
    return {
        type: GET_CANCEL_REASON_SUCCESS,
        payload: {
            list: list
        }
    }
}

export const CreateNewReason = (content) => {
    return {
        type: CREATE_NEW_CANCEL_REASON,
        payload: {
            content: content
        }
    }
}

export const DeleteReason = (id) => {
    return {
        type: DELETE_CANCEL_REASON,
        payload : {
            id: id
        }
    }
}


export const UpdateReason = (id, content) => {
    return {
        type: UPDATE_CANCEL_REASON,
        payload: {
            id: id,
            content: content
        }
    }
}

