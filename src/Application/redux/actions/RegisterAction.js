import {CLEAR_COLLECTOR_REGISTER_OTP, 
    SAVE_COLLECTOR_REGISTER_OTP, 
    CONFIRM_COLLECTOR_REGISTER_OTP,
    REQUEST_COLLECTOR_REGISTER_OTP,
    REGISTER_COLLECTOR_ACCOUNT} from '../../../Infrastucture/utils/constants/ActionConstants';


export const RegisterCollectorAccount = ({phone, name, birthDate, gender, address, iDCard, email, registerToken, imageFile}) => {
    return {
        type: REGISTER_COLLECTOR_ACCOUNT,
        payload: {
            phone: phone,
            name: name,
            birthDate: birthDate,
            gender: gender,
            address: address,
            iDCard: iDCard,
            email: email,
            registerToken: registerToken,
            imageFile: imageFile
        }
    }
}


export const RequestCollectorRegisterOTP = (phone) => {
    return {
        type: REQUEST_COLLECTOR_REGISTER_OTP,
        payload: {
            phone: phone
        }
    }
}

export const ConfirmCollectorRegisterOTP = (phone, otp) => {
    return {
        type: CONFIRM_COLLECTOR_REGISTER_OTP,
        payload: {
            phone: phone,
            otp: otp
        }
    }
}

export const SaveCollectorRegisterOtp = (phone, registerToken) => {
    return {
        type : SAVE_COLLECTOR_REGISTER_OTP,
        payload: {
            phone: phone,
            registerToken: registerToken,
        }
    }
}

export const ClearCollectorRegisterOtp = () => {
    return {
        type: CLEAR_COLLECTOR_REGISTER_OTP
    }
}
