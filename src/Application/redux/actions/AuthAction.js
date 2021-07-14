import {SIGNED_OUT, STORE_ACCOUNT, STORE_ACCOUNT_ERROR} from '../../../Infrastucture/utils/constants/ActionConstants';
import {SetAuthHeader} from '../../../Infrastucture/api/AxiosHeader'

export const StoreAccount = (account) => {
    SetAuthHeader(account.access_token, account.profile.sub);
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