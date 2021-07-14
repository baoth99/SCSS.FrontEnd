import {ApiGetNoParameters} from '../api/ApiCaller';
import {Unit} from '../api/ApiEndpoint';
import { call, put, takeEvery, takeLatest, fork, select } from 'redux-saga/effects';

import {FetchUnitSuccess} from '../../Application/redux/actions/FetchDataAction';
import {FETCH_UNIT} from '../utils/constants/ActionConstants';

function* FetchUnitSaga() {
    console.log('Fetch Unit Saga');
    const response = yield call(ApiGetNoParameters, Unit);
    const unitList = response.data.resData;
    yield put(FetchUnitSuccess(unitList));   
}

function* FetchDataSaga() {
    yield takeEvery(FETCH_UNIT ,FetchUnitSaga);
}


export default FetchDataSaga;