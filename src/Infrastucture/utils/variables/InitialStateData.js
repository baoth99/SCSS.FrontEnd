import {PAGING} from '../constants/CommonConstants';

export const StatusState = (message, style) => {
    return {
        message : message,
        style : style
    }
}

export const StatisticDashboardState = {
    amountCompletedRequest: 0,
    amountCancelRequestByUser: 0,
    amountCancelRequestBySystem: 0,
    amountCollectDealTransaction: 0
}

export const registerOTPState = {
    phone: '',
    registerToken: '',
    isDisable: true,
    isInputOTPDisable: true
}

export const initialDataSCTable = {

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
    operatingTimeTo: "00:00",

    nearestDistance: 0,
    nearestDistanceOfAppointment: 0,
    priorityRating: 0.0,
    availableRadius: 0
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

export const initialSellerComplaintSearchFormState = {
    sellerPhone: "",
    sellerName: "",
    page : 1, 
    pageSize: PAGING
}

export const initialCollectorComplaintSearchFormState = {
    collectorPhone: "",
    collectorName: "",
    page : 1, 
    pageSize: PAGING
}

export const initialDealerComplaintSearchFormState = {
    dealerPhone: "",
    dealerName: "",
    page : 1, 
    pageSize: PAGING
}

export const initialComplaintState = {
    list: [],
    total: 0
}

export const CollectorRequestRegisterDetailState = {
    id: "",
    phone: "",
    registerTime: "",
    name: "",
    address: "",
    gender: 0,
    birthDate: "",
    idCard: "",
    imageFile: null
}


export const SCTransactionDetailState = {
    transactionCode: "",
    transactionDate: "",
    address: "",
    feedback: "",
    sellerName: "",
    sellerPhone: "",
    collectorName: "",
    collectorPhone: "",
    collectingRequestDate: "",
    awardPoint: "",
    total: 0,
    transDetails: []
}

export const DCTransactionDetailState = {
    transactionCode: "",
    transactionDateTime: "",
    dealerAddress: "",
    dealerPhone: "",
    dealerOwnerName: "",
    collectorName: "",
    collectorPhone: "",
    awardPoint: "",
    collectorFeedback: "",
    bonusAmountTotal: 0,
    promotions: "",
    total: 0,
    transactionDetails: []
}

export const CollectingRequestDetailState = {
    collectingRequestCode: "",
    collectingRequestDate: "",
    address: "",
    collectingRequestRangeTime: "",
    isBulky: false,
    note: "",
    requestedBy: "",
    status: 0,
    receivedBy: "",
    scrapImageUrl: ""
}

export const CollectorRegisterDefaultState = {
    phone: "",
    name: "",
    birthDate: "",
    gender: 1,
    address: "",
    iDCard: "",
    email: "",
    imageFile: null
}
