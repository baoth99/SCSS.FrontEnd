import {FEATCH_IMAGESLIDER_IMAGES_USING, 
        FEATCH_IMAGESLIDER_IMAGES_USING_SUCCESS, 
        FEATCH_IMAGESLIDER_SUCCESS,
        FEATCH_IMAGESLIDER,
        CREATE_IMAGESLIDER_IMAGE,
        VIEW_IMAGESLIDER_DETAIL,
        SAVE_IMAGESLIDER,
        CHANGE_ISSELECTED_IMAGESLIDER} from '../../../Infrastucture/utils/constants/ActionConstants';

export const CreateImageSlider = (imageFile) => {
    return {
        type: CREATE_IMAGESLIDER_IMAGE,
        payload: imageFile
    }
}


export const ChangeIsSelectedImage = (id, isSelected) => {
    return {
        type: CHANGE_ISSELECTED_IMAGESLIDER,
        payload: {
            id: id,
            isSelected: isSelected
        }
    }
}

export const SaveImageSlider = () => {
    return {
        type: SAVE_IMAGESLIDER
    }
}

export const ViewImageSliderDetail = (id) => {
    return {
        type: VIEW_IMAGESLIDER_DETAIL,
        payload: {
            id: id
        }
    }
}

export const FeatchImageSliderUsing = () => {
    return {
        type: FEATCH_IMAGESLIDER_IMAGES_USING
    }
}

export const FeatchImageSliderUsingSuccess = (data) => {
    return {
        type: FEATCH_IMAGESLIDER_IMAGES_USING_SUCCESS,
        payload: data
    }
}

export const FeatchImageSlider = () => {
    return {
        type: FEATCH_IMAGESLIDER
    }
}

export const FeatchImageSliderSuccess = (data) => {
    return {
        type: FEATCH_IMAGESLIDER_SUCCESS,
        payload: data
    }
}