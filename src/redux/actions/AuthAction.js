import {SIGNED_OUT, STORE_ACCOUNT} from '../../utils/constants/ActionConstants';

export const StoreAccount = (account) => {
    return {
        type: STORE_ACCOUNT,
        payload: account
    }
}

export const Signout = () => {
    return {
        type: SIGNED_OUT
    }
}