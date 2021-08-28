import {FEATCH_IMAGESLIDER_IMAGES_USING, 
        FEATCH_IMAGESLIDER, FEATCH_IMAGESLIDER_SUCCESS, 
        CREATE_IMAGESLIDER_IMAGE, 
        CHANGE_ISSELECTED_IMAGESLIDER,
        FEATCH_IMAGESLIDER_IMAGES_USING_SUCCESS,
        SAVE_IMAGESLIDER} from '../../../Infrastucture/utils/constants/ActionConstants';

export const ImageUsingListReducer = (state = {}, action) => {
    switch (action.type) {
        case FEATCH_IMAGESLIDER_IMAGES_USING: {
            return {
                ...state
            }
        } 
        case FEATCH_IMAGESLIDER_IMAGES_USING_SUCCESS: {
            return {
                list: action.payload
            }
        }   
        default: {
            return state
        }
    }
}

export const ImageSliderReducer = (state = {list: []}, action) => {
    switch (action.type) {
        case FEATCH_IMAGESLIDER: {
            return {
                ...state
            }
        }   
        case FEATCH_IMAGESLIDER_SUCCESS: {
            return {
                list: [...action.payload]
            }
        }
        case CHANGE_ISSELECTED_IMAGESLIDER: {
            let temp = state.list;
            temp.forEach(item => {
                if(action.payload.id == item.id) {
                    item.isSelected = action.payload.isSelected
                }
            });
            return {
                list: [...temp]
            }
        }
        case SAVE_IMAGESLIDER: {
            return {
                ...state
            };
        }
        case CREATE_IMAGESLIDER_IMAGE: {
            return {
                ...state
            };
        }
        default: {
            return state
        }
    }
}