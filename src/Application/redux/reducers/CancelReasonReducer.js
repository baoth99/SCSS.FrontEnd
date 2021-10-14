import { GET_CANCEL_REASON, GET_CANCEL_REASON_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const CancelReasonReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CANCEL_REASON: {
            return state;
        }
        case GET_CANCEL_REASON_SUCCESS: {
            return action.payload.list;
        }
        default: {
            return state;
        }
    }
}

export default CancelReasonReducer;
