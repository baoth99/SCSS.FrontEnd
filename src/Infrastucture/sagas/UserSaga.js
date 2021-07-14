import {SearchUser, SearchUserSuccess} from '../../Application/redux/actions/UserAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {SEARCH_USER} from '../utils/constants/ActionConstants'
import { call, put, takeEvery, takeLatest, fork, take, delay } from 'redux-saga/effects';

function* SearchUserSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload)

    yield put(HideLoading());
}


export default function* UserSaga() {
    console.log("User Saga is running !");
    yield takeEvery(SEARCH_USER, SearchUserSaga);
}