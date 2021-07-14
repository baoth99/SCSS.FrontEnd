import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {push} from 'connected-react-router';

import {NoInternetConnetionRoute} from '../utils/constants/RouteConstants'

export function* RedirectToNoInternet(error) {
    if(error.toJSON().message === 'Network Error'){
        yield put(push(NoInternetConnetionRoute));
        return;
    }
}


export function* HandleErrorResponse(error) {
    const errResponse = error.response;
}
