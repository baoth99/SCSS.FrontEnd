import {PAGING} from '../utils/constants/CommonConstants';


export const initialDataSCTable = {
    // list: [],
    // total: 0
}

export const initialUserFormState = {
    phone: "",
    name: "",
    email: "",
    address: "",
    idCard: "",
    gender: 0,
    role: 0,
    status: 0,
    page : 1, 
    pageSize: PAGING, 
    sortField: 'Name', 
    isSortDesc: false
};

export const initialSCCreateFormState = {
    name: "",
    unit: '',
    image: null,
    description: ""
}

export const initialSCSearchFormState = {
    name: "",
    unit: 0,
    description: "",
    page : 1, 
    pageSize: PAGING, 
    sortField: 'Name', 
    isSortDesc: false
}