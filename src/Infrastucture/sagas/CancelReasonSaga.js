import { call, put, takeEvery} from 'redux-saga/effects';
import {GET_CANCEL_REASON, CREATE_NEW_CANCEL_REASON, DELETE_CANCEL_REASON} from '../../Infrastucture/utils/constants/ActionConstants';
import {GetCancelReasonSuccess} from '../../Application/redux/actions/CancelReasonAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {ApiDelete, ApiGetNoParameters, ApiPost} from '../api/ApiCaller';
import {CreateCancelReason, UpdateCancelReason, DeleteCancelReason, GetCancelReasons} from '../api/ApiEndpoint';
import {push} from 'connected-react-router';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {Notification} from '../utils/constants/MessageConstants';


function* GetCancelReasonsSaga() {
    yield put(ShowLoading());
    yield FetchReasonData();
    yield put(HideLoading());
}


function * FetchReasonData() {
    try {
        const response = yield call(ApiGetNoParameters, GetCancelReasons);
        var resData = response.data.resData;
        console.log(resData);
        yield put(GetCancelReasonSuccess(resData));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}


function* CreateNewCancelReasonSaga({payload}) {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiPost, CreateCancelReason, payload);
        if (response.data.isSuccess) {
            const notiDialog = Notification('Tạo lí do hủy thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Tạo lí do hủy không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }
        yield FetchReasonData();
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* DeleteCancelReasonSaga({payload}) {
    yield put(HideConfirmDialog());
    yield put(ShowLoading());

    try {
        const response = yield call(ApiDelete, DeleteCancelReason, payload);
        if (response.data.isSuccess) {
            const notiDialog = Notification('Xóa lí do hủy thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Xóa lí do hủy không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }
        yield FetchReasonData();
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());

}

export default function* CancelReasonSaga() {
    yield takeEvery(GET_CANCEL_REASON, GetCancelReasonsSaga);
    yield takeEvery(CREATE_NEW_CANCEL_REASON, CreateNewCancelReasonSaga);
    yield takeEvery(DELETE_CANCEL_REASON, DeleteCancelReasonSaga)
}
