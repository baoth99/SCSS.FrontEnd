import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';

import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {SEARCH_COLLECTOR_REQUEST_REGISTER, SEARCH_DEALER_REQUEST_REGISTER, FEATCH_ALL_REQUEST_REGISTER, GET_COLLECTOR_REQUEST_REGISTER } from '../utils/constants/ActionConstants';
import {SearchCollectorRequestRegisterSuccess, SearchDealerRequestRegisterSuccess,
        GetCollectorRequestRegisterSuccess} from '../../Application/redux/actions/RequestRegisterAction';
import {initialCollectorRRSearchFormState, initialDealerRRSearchFormState} from '../utils/variables/InitialStateData';
import {push} from 'connected-react-router';
import {ApiGet, ApiPutWithBody} from '../api/ApiCaller';
import {GetCollectorRR, GetDealerRR, GetCollectorRRDetail} from '../api/ApiEndpoint';


const SeedCollectorData = [
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    }
];
const SeedDealerData = [
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        phone: "0939872902",
        name: " Lê Thị A",
        dealerName: "Ve Chai Demo",
        gender: 1,
        registerTime: "01/07/2021 13:40 PM",
        status: 1
    }
]

function* FetchAll() {
    yield put(ShowLoading());

    yield FetchCollectorRequestRegisterSaga(initialCollectorRRSearchFormState);
    yield FetchDealerRequestRegisterSaga(initialDealerRRSearchFormState);

    yield put(HideLoading());
}


function* FetchCollectorRequestRegisterSaga(params) {
    try {
        const response = yield call(ApiGet, GetCollectorRR ,params);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchCollectorRequestRegisterSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}

function* FetchDealerRequestRegisterSaga(params) {
    try {
        const response = yield call(ApiGet, GetDealerRR ,params);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchDealerRequestRegisterSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}


function* SearchCollectorRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield FetchCollectorRequestRegisterSaga(payload);
    yield put(HideLoading());
}

function* SearchDealerRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield FetchDealerRequestRegisterSaga(payload);
    yield put(HideLoading());
}

function* GetCollectorRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    try {
        console.log(payload);
        const response = yield call(ApiGet, GetCollectorRRDetail, payload);
        const resData = response.data.resData;
        console.log(resData);
        yield put(GetCollectorRequestRegisterSuccess({...resData}));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

export default function* RequestRegisterSaga() {
    yield takeEvery(FEATCH_ALL_REQUEST_REGISTER, FetchAll);
    yield takeEvery(SEARCH_COLLECTOR_REQUEST_REGISTER, SearchCollectorRequestRegisterSaga);
    yield takeEvery(SEARCH_DEALER_REQUEST_REGISTER, SearchDealerRequestRegisterSaga);
    yield takeEvery(GET_COLLECTOR_REQUEST_REGISTER, GetCollectorRequestRegisterSaga);
}