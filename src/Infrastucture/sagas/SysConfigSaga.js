import {GetSysConfigInfoSuccess} from '../../Application/redux/actions/SysConfigAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {GET_SYS_CONFIG_INFO, MODIFY_SYS_CONFIG} from '../utils/constants/ActionConstants';
import { call, put, takeEvery, delay} from 'redux-saga/effects';
import {ApiGetNoParameters, ApiPutWithBody} from '../api/ApiCaller';
import {SystemConfigInfo, ModifySystemConfig} from '../api/ApiEndpoint';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {push} from 'connected-react-router';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {Notification} from '../utils/constants/MessageConstants';


function* GetSysConfigInfoSaga() {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiGetNoParameters, SystemConfigInfo);
        const resData = response.data.resData;
        var configIsUsing = {
            cancelTimeRange : resData.cancelTimeRange,
            timeRangeRequestNow: resData.timeRangeRequestNow,
            requestQuantity: resData.requestQuantity,
            maxNumberOfRequestDays: resData.maxNumberOfRequestDays,
            receiveQuantity: resData.receiveQuantity,
            feedbackDeadline: resData.feedbackDeadline,
            operatingTimeFrom: resData.operatingTimeFrom,
            operatingTimeTo: resData.operatingTimeTo
        };
        var histories = resData.histories;

        yield put(GetSysConfigInfoSuccess(configIsUsing, histories));
        // console.log(configIsUsing);
        // console.log(histories);
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}


function* ModifySystemConfigSaga({payload}) {
    yield put(HideConfirmDialog());
    yield put(ShowLoading());
    try {
        var requestModel = {
            cancelTimeRange: parseInt(payload.cancelTimeRange),
            feedbackDeadline: parseInt(payload.feedbackDeadline),
            maxNumberOfRequestDays: parseInt(payload.maxNumberOfRequestDays),
            operatingTimeFrom: payload.operatingTimeFrom,
            operatingTimeTo: payload.operatingTimeTo,
            receiveQuantity: parseInt(payload.receiveQuantity),
            requestQuantity: parseInt(payload.requestQuantity),
            timeRangeRequestNow: parseInt(payload.timeRangeRequestNow)
        }
        const response = yield call(ApiPutWithBody, ModifySystemConfig, requestModel);

        if (response.data.isSuccess) {
            const notiDialog = Notification('Thay đổi cấu hình hệ thống thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Thay đổi cấu hình hệ thống không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }
        
        yield GetSysConfigInfoSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}


export default function* SysConfigSaga () {
    yield takeEvery(GET_SYS_CONFIG_INFO, GetSysConfigInfoSaga)
    yield takeEvery(MODIFY_SYS_CONFIG, ModifySystemConfigSaga)
}