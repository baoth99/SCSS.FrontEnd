import {SEARCH_DC_FEEDBACK, SEARCH_DC_FEEDBACK_SUCCESS,
    SEARCH_CS_FEEDBACK, SEARCH_CS_FEEDBACK_SUCCESS} from '../../../Infrastucture/utils/constants/ActionConstants';

export const DCFeedbackListReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_DC_FEEDBACK: {
            return {
                ...state
            };
        }
        case SEARCH_DC_FEEDBACK_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        default: {
            return state;
        }
    }
}

export const CSFeedbackListReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_CS_FEEDBACK: {
            return {
                ...state
            };
        }
        case SEARCH_CS_FEEDBACK_SUCCESS: {
            return {
                list: action.payload.list,
                total: action.payload.total
            }
        }
        default: {
            return state;
        }
    }
}