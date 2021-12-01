import {REQUEST_COLLECTOR_REGISTER_OTP, CONFIRM_COLLECTOR_REGISTER_OTP, REGISTER_COLLECTOR_ACCOUNT} from '../utils/constants/ActionConstants';
import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {SaveCollectorRegisterOtp, ClearCollectorRegisterOtp} from '../../Application/redux/actions/RegisterAction';

import {CollectorRegisterAccountOTPEndpoint} from '../api/ApiEndpoint';
import {ApiPost} from '../api/ApiCaller';
import {Notification} from '../utils/constants/MessageConstants';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {push} from 'connected-react-router';

import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

function* CollectorRequestOTP({payload}) {
    yield put(ShowLoading());

    try {
        //const response = yield call(ApiPost, CollectorRegisterAccountOTPEndpoint, payload);
        //const data = response.data;

        yield delay(2000);
        const notiDialog = Notification('Gửi mã OTP thành công','success');
        yield put(EnqueSnackBar(notiDialog));

        // if (data.isSuccess) {
        //     const notiDialog = Notification('Gửi mã OTP thành công','success');
        //     yield put(EnqueSnackBar(notiDialog));
                

        // } else {
        //     const notiDialog = Notification("Số điện thoại đã có trong hệ thống", "fail");
        //     yield put(EnqueSnackBar(notiDialog));
        // }

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* ConfirmCollectorRegisterOTP({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield delay(2000);


    // Check OTP here
    
    //yield put(SaveCollectorRegisterOtp(payload.phone, 'svdmhcjk,fysdjcfyusdyfsd'));

    yield put(HideLoading());

}

function* RegisterCollectorAccountSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);



    yield delay(2000);

    yield put(ClearCollectorRegisterOtp());
    yield put(HideLoading());

}


export default function* RegisterSaga() {
    yield takeEvery(REQUEST_COLLECTOR_REGISTER_OTP, CollectorRequestOTP);
    yield takeEvery(CONFIRM_COLLECTOR_REGISTER_OTP, ConfirmCollectorRegisterOTP);
    yield takeEvery(REGISTER_COLLECTOR_ACCOUNT, RegisterCollectorAccountSaga);
}