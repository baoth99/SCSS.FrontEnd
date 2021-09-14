import {ApiGetNoParameters} from '../api/ApiCaller';
import { call, put, takeEvery, takeLatest, fork, select } from 'redux-saga/effects';

import {HUB_CONNECTION} from '../utils/constants/ActionConstants';
import {BookingHubMiddleware} from '../services/SignalRService';


function* HubConnectionSaga({payload}) {
    let accessToken = payload;
    BookingHubMiddleware(accessToken);
}

function* FetchDataSaga() {
    yield takeEvery(HUB_CONNECTION, HubConnectionSaga)
}


export default FetchDataSaga;