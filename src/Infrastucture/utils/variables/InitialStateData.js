import {PAGING} from '../constants/CommonConstants';

export const StatusState = (message, style) => {
    return {
        message : message,
        style : style
    }
}

export const initialDataSCTable = {

}

export const initialCSFeedbackSearchFormState = {
    transactionCode: "",
    sellerName: "",
    collectorName: "",
    rate: -1,
    page : 1, 
    pageSize: PAGING
}

export const initialDCFeedbackSearchFormState = {
    transactionCode: "",
    dealerName: "",
    collectorName: "",
    rate: -1,
    page : 1, 
    pageSize: PAGING
}

export const initialBookingSearchFormState = {
    bookingCode: "",
    bookingBy: "",
    bookingReceive: "",
    status: "",
    fromDate: "",
    toDate: "",
    page : 1, 
    pageSize: PAGING
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
    createdBy: "",
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

export const initialCollectorRRSearchFormState = {
    phone: "",
    name: "",
    status: 0,
    page : 1, 
    pageSize: PAGING
}

export const initialDealerRRSearchFormState = {
    phone: "",
    name: "",
    dealerName: "",
    status: 0,
    page : 1, 
    pageSize: PAGING
}