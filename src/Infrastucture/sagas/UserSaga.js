import {SearchUserSuccess} from '../../Application/redux/actions/UserAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {SEARCH_USER, GET_USER_DETAIL, CHANGE_ACCOUNT_STATUS} from '../utils/constants/ActionConstants'
import { call, put, takeEvery } from 'redux-saga/effects';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {push} from 'connected-react-router';
import {ApiGet} from '../api/ApiCaller';
import {GetUserDetailSuccess} from '../../Application/redux/actions/UserAction';
import {SearchUserEndpoint, GetUserDetailEndpoint} from '../api/ApiEndpoint';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';


function* SearchUserSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiGet, SearchUserEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchUserSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    
    yield put(HideLoading());
}


function* GetUserDetailSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiGet, GetUserDetailEndpoint, payload);
        const resData = response.data.resData;
        console.log(resData);
        yield put(GetUserDetailSuccess(resData));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());

}


function* ChangeAccountStatusSaga({payload}) {
    console.log(payload);
    yield put(HideConfirmDialog());

}


export default function* UserSaga() {
    yield takeEvery(SEARCH_USER, SearchUserSaga);
    yield takeEvery(GET_USER_DETAIL, GetUserDetailSaga);
    yield takeEvery(CHANGE_ACCOUNT_STATUS, ChangeAccountStatusSaga);
}