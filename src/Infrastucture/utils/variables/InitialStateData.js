import {PAGING} from '../constants/CommonConstants';


export const initialDataSCTable = {

}

export const initialDCTransactionSearchFormState = {
    transactionCode: "",
    dealerName: "",
    dealerPhone: "",
    dealAddress: "",
    collectorName: "",
    collectorPhone: "",
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    page : 1, 
    pageSize: PAGING
}

export const initialCSTransactionSearchFormState = {
    transactionCode: "",
    sellerName: "",
    sellerPhone: "",
    sellerAddress: "",
    collectorName: "",
    collectorPhone: "",
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    page : 1, 
    pageSize: PAGING
}


export const initialUnitSearchFormState = {
    name: "",
    page : 1, 
    pageSize: PAGING
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
    pageSize: PAGING
};

export const initialSCCreateFormState = {
    name: "",
    unit: "",
    image: null,
    description: ""
}

export const initialSCSearchFormState = {
    name: "",
    unit: "",
    createdBy: "" ,
    description: "",
    page : 1, 
    pageSize: PAGING
}