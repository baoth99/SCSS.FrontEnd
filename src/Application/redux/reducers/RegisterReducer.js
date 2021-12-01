import {CLEAR_COLLECTOR_REGISTER_OTP, SAVE_COLLECTOR_REGISTER_OTP} from '../../../Infrastucture/utils/constants/ActionConstants';

import {registerOTPState} from '../../../Infrastucture/utils/variables/InitialStateData';

export const CollectorRegisterOTPReducer = (state = registerOTPState, action) => {
    switch (action.type) {
        case SAVE_COLLECTOR_REGISTER_OTP: {
            return {
                ...action.payload
            }
        }
        case CLEAR_COLLECTOR_REGISTER_OTP: {
            return {
                ...registerOTPState
            }
        }
        default: {
            return state;
        }
    }
}