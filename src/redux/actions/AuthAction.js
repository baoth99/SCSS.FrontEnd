import {SIGNED_OUT, STORE_ACCOUNT, STORE_ACCOUNT_ERROR} from '../../utils/constants/ActionConstants';
import {SetAuthHeader} from '../../api/AxiosHeader'

export const StoreAccount = (account) => {
    SetAuthHeader(account.access_token);
    return {
        type: STORE_ACCOUNT,
        payload: account
    }
}

export const StoreAccountError = (account) => {
    return {
        type: STORE_ACCOUNT_ERROR
    }
}


export const Signout = () => {
    return {
        type: SIGNED_OUT
    }
}