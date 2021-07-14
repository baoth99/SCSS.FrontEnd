import {SHOW_LOADING, HIDE_LOADING} from '../../../Infrastucture/utils/constants/ActionConstants';

export const ShowLoading = () => {
    return {
        type : SHOW_LOADING
    }
}

export const HideLoading = () => {
    return {
        type : HIDE_LOADING
    }
}
