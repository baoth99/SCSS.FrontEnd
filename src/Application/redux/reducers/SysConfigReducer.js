import {GET_SYS_CONFIG_INFO, GET_SYS_CONFIG_INFO_SUCCESS, MODIFY_SYS_CONFIG} from '../../../Infrastucture/utils/constants/ActionConstants';

import {initialSysConfigState} from '../../../Infrastucture/utils/variables/InitialStateData';

export const SysConfigReducer = (state = initialSysConfigState, action) => {
    switch (action.type) {
        case GET_SYS_CONFIG_INFO: {
            return {
                ...state
            };
        }
        case GET_SYS_CONFIG_INFO_SUCCESS: {
            return {
                ...state,
                configIsUsing: action.payload.configIsUsing,
                histories : action.payload.histories
            }
        }
        default:{
            return state;
        }
    }
}
