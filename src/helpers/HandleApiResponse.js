import {BadRequest, DataInvalid,DataNotFound,NotFound,OtherException,SystemException} from '../utils/constants/SystemMessageConstant';
import {ACTIVE, SYSTEM_EXCEPTION} from '../utils/constants/MessageConstants';

import {STATUS} from '../utils/constants/HttpConstant';




export const ResponseOK = (data) => {
    if (!data.isSuccess && data.statusCode == STATUS.BAD_REQUEST) {
        switch (data.msgCode) {
            case DataInvalid:{
                if(data.resData != null) {
                    return data.resData
                } else {
                    return SYSTEM_EXCEPTION;
                }
            }
            case SystemException:{
                return SYSTEM_EXCEPTION;
            }
            case OtherException: {
                return SYSTEM_EXCEPTION;
            }
            default:
                break;
        }   
    } else {
        return data.resData;
    }
}

export const HandleApiResponse = (response) => {
    const data = response.data;
    switch (response.status) {
        case STATUS.OK: {
            return ResponseOK(data);
        }
        case STATUS.BAD_REQUEST: {

        }
        case STATUS.NOTFOUND: {

        }
        case STATUS.INTERVAL_SERVER_ERROR: {

        }
        case STATUS.UNAUTHORIZED: {

        }
        default:
            break;
    }   
}

