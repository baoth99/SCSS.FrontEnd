import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';

import {SEARCH_DC_TRANSACTION, SEARCH_CS_TRANSACTION, FETCH_ALL_TRASACTION, GET_DC_TRANSACTION_DETAIL, GET_CS_TRANSACTION_DETAIL } from '../utils/constants/ActionConstants';
import {SearchDCTransactionSuccess, SearchCSTransactionSuccess,
        GetDCTransactionDetailSuccess, GetCSTransactionDetailSuccess} from '../../Application/redux/actions/TransactionAction';
import {initialDCTransactionSearchFormState, initialCSTransactionSearchFormState} from '../../Infrastucture/utils/variables/InitialStateData'
import {SearchDCTransactionEndpoint, GetDCTransactionEndpoint, SearchSCTransactionEndpoint, GetSCTransactionEndpoint} from '../api/ApiEndpoint';
import {ApiGet} from '../api/ApiCaller';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {push} from 'connected-react-router';
import {TransactionRoute} from '../utils/constants/RouteConstants';

function* FetchAllTransactionSaga() {
    yield put(ShowLoading());
    yield GetDCTransactionSaga(initialDCTransactionSearchFormState);
    yield GetSCTransactionSaga(initialCSTransactionSearchFormState);
    yield put(HideLoading());
}


function* GetDCTransactionSaga(parameters) {
    try {
        const response = yield call(ApiGet, SearchDCTransactionEndpoint, parameters);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchDCTransactionSuccess(resData, totalRecord));
        
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}

function* GetSCTransactionSaga(parameters) {
    try {
        const response = yield call(ApiGet, SearchSCTransactionEndpoint, parameters);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchCSTransactionSuccess(resData, totalRecord));
        
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}



function* SearchDCTransactionSaga({payload}) {
    yield put(ShowLoading());
    yield GetDCTransactionSaga(payload);
    yield put(HideLoading());

}

function* SearchCSTransactionSaga({payload}) {
    yield put(ShowLoading());
    yield GetSCTransactionSaga(payload);
    yield put(HideLoading());
}


function* GetDCTransactionDetailSaga({payload}) {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiGet, GetDCTransactionEndpoint, payload); 
        const data = response.data;     
        if (!data.isSuccess) {
            throw "Invalid";
        }
        const resData = data.resData;
        yield put(GetDCTransactionDetailSuccess(resData));
    } catch (error) {
        if (error == 'Invalid' || error.response.status == 404) {
            yield put(push(TransactionRoute));
        } 
        else
        {
            yield RedirectToNoInternet(error);
        }
    }
    yield put(HideLoading());

}

function* GetSCTransactionDetailSaga({payload}) {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiGet, GetSCTransactionEndpoint, payload); 
        const data = response.data;     
        if (!data.isSuccess) {
            throw "Invalid";
        }
        const resData = data.resData;
        console.log(resData);
        yield put(GetCSTransactionDetailSuccess(resData));
    } catch (error) {
        if (error == 'Invalid' || error.response.status == 404) {
            yield put(push(TransactionRoute));
        } 
        else
        {
            yield RedirectToNoInternet(error);
        }
    }
    yield put(HideLoading());

}



export default function* TransactionSaga () {
    yield takeEvery(FETCH_ALL_TRASACTION, FetchAllTransactionSaga);   
    yield takeEvery(SEARCH_DC_TRANSACTION, SearchDCTransactionSaga);   
    yield takeEvery(SEARCH_CS_TRANSACTION, SearchCSTransactionSaga);
    yield takeEvery(GET_DC_TRANSACTION_DETAIL, GetDCTransactionDetailSaga);
    yield takeEvery(GET_CS_TRANSACTION_DETAIL, GetSCTransactionDetailSaga);
}