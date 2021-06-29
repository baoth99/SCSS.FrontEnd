import {SearchUser, SearchUserSuccess} from '../redux/actions/UserAction';
import {ShowLoading, HideLoading} from '../redux/actions/LoadingAction';

import { call, put, takeEvery, takeLatest, fork, take, delay } from 'redux-saga/effects';

export function* SearchUserSaga({payload}) {
    yield put(ShowLoading());
    const data = payload;
    

    yield put(HideLoading());
}