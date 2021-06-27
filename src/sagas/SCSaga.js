import {SearchSC, SearchSCSuccess} from '../redux/actions/SCAction';
import {ShowLoading, HideLoading} from '../redux/actions/LoadingAction';
import {SEARCH_SC, SEARCH_SC_SUCCESS} from '../utils/constants/ActionConstants'
import { call, put, takeEvery, takeLatest, fork, take, delay } from 'redux-saga/effects';
import {initialSCSearchFormState} from '../variables/InitialStateData'

const SeedData = [
    {
        id: "891c6f75-6e81-47ad-be38-26db9613b4b0",
        name: "Sắt",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fa05d333-d9b9-46a1-885c-c11d7d9470ba",
        name: "Giấy",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "4448fc09-83c9-41e3-ba60-0bdb388fb82a",
        name: "Đồ nhựa",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fb50e469-8b1e-4fde-9494-8d7a2f2e00ad",
        name: "Đồ Đồng",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "891c6f75-6e81-47ad-be38-26db9613b4b0",
        name: "Sắt",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fa05d333-d9b9-46a1-885c-c11d7d9470ba",
        name: "Giấy",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "4448fc09-83c9-41e3-ba60-0bdb388fb82a",
        name: "Đồ nhựa",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    }
]

function* FetchData() {
    console.log('FetchData')
}


function* SearchSCSaga({payload}) {
    console.log('SearchSCSaga');
    yield put(ShowLoading());
    const data = payload;
    console.log(data);

    yield put(SearchSCSuccess([...SeedData], 30));


    yield delay(1000);
    yield put(HideLoading());
}


export default function* SCSaga () {
    //yield fork(FetchData);
    yield takeEvery(SEARCH_SC, SearchSCSaga)
}