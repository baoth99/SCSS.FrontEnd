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
    collectorPhone: "",
    page : 1, 
    pageSize: PAGING
}

// Modify here
export const initialDCFeedbackSearchFormState = {
    transactionCode: "",
    dealerName: "",
    dealerPhone: "",
    collectorName: "",
    page : 1, 
    pageSize: PAGING
}

export const initialBookingSearchFormState = {
    collectingRequestCode: "",
    requestedBy: "",
    receivedBy: "",
    status: 0,
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


export const initialSCSearchFormState = {
    name: "",
    status: 0,
    createdBy: "" ,
    phoneCreatedBy: "",
    role: 0,
    page : 1, 
    pageSize: PAGING
}

export const initialDealerSearchFormState = {
    dealerName: "",
    managedBy: "",
    dealerPhone: "",
    dealerAddress: "",
    status: 'null',
    dealerType: 0,
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
    dealerType: 0,
    page : 1, 
    pageSize: PAGING
}

export const ConfigIsUsing = {
    cancelTimeRange: 0,
    timeRangeRequestNow: 0,
    requestQuantity :0,
    maxNumberOfRequestDays: 0,
    receiveQuantity: 0,
    feedbackDeadline: 0,
    operatingTimeFrom: "00:00",
    operatingTimeTo: "00:00"
};

export const initialSysConfigState = {
    configIsUsing : ConfigIsUsing,
    histories: []
}

/////////////
export const TransFeeUsing = 1;

export const TransFee = {
    percent: TransFeeUsing,
    histories: []
}

////////////
export const AwardPointUsing = {
    appliedAmount: 1,
    amount: 1
}

export const AwardPoint = {
    awardPointUsing: AwardPointUsing,
    histories: []
}
