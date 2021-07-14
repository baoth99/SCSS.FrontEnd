import {SCSS_STORAGE} from '../constants/AuthConstants';


export const LoadAccountInfo = () => {
    let accountFromLocal = localStorage.getItem(SCSS_STORAGE);
    let account = JSON.parse(accountFromLocal);
    return account;
}


export const SaveAccountInfor = (account) => {
    localStorage.setItem(SCSS_STORAGE, JSON.stringify(account));
}