import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../redux/actions/LoadingAction';

import {SEARCH_DC_TRANSACTION, SEARCH_CS_TRANSACTION } from '../utils/constants/ActionConstants';
import {SearchDCTransactionSuccess, SearchCSTransactionSuccess} from '../redux/actions/TransactionAction';


const SeedData = [
    {
        id: "6f71d3da-0ee5-4a49-885d-d222c06a5ee7",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "5bcec014-1d12-4c42-af63-27e3ce03e8cb",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "3424b196-ab80-4ad8-a973-23de8789d4ce",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "2195e3ee-75be-4822-b99d-c28dbdb9af9c",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "c5bcecc3-a9f3-434a-a3a5-8688139baf8a",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn Tình",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị Tánh",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    }
]

function* SearchDCTransactionSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield delay(2000);
    yield put(HideLoading());

}

function* SearchCSTransactionSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield delay(2000);
    yield put(HideLoading());
}

export default function* TransactionSaga () {
    console.log('Transaction Saga is running !');
    yield takeEvery(SEARCH_DC_TRANSACTION, SearchDCTransactionSaga);
    
    yield takeEvery(SEARCH_CS_TRANSACTION, SearchCSTransactionSaga);
}