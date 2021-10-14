import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';

import {GET_FEEDBACK, SEARCH_DC_FEEDBACK, SEARCH_CS_FEEDBACK, REPLY_SELLER_FEEDBACK, REPLY_COLLECTOR_FEEDBACK} from '../utils/constants/ActionConstants';
import {SearchDCFeedbackSuccess, SearchCSFeedbackSuccess} from '../../Application/redux/actions/FeedbackAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {initialCSFeedbackSearchFormState,  initialDCFeedbackSearchFormState} from '../../Infrastucture/utils/variables/InitialStateData'
import {push} from 'connected-react-router';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {Notification} from '../utils/constants/MessageConstants';
import {ApiGet, ApiPutWithBody} from '../api/ApiCaller';

import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {SysSellerFeedback, SysCollectorFeedback, ReplySysFeedback} from '../api/ApiEndpoint';


function* GetAllFeedbackSaga() {
    yield put(ShowLoading());
    yield FetchCSFeedbackSaga(initialCSFeedbackSearchFormState);
    yield FetchDCFeedbackSaga(initialDCFeedbackSearchFormState);
    yield put(HideLoading());   
}


function* FetchCSFeedbackSaga(parameters) {

    try {
        const response = yield call(ApiGet, SysSellerFeedback, parameters);
        const resData = response.data.resData;
        const totalRecord = response.data.total;

        yield put(SearchCSFeedbackSuccess(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

}

function* FetchDCFeedbackSaga(parameters) {
    try {
        const response = yield call(ApiGet, SysCollectorFeedback, parameters);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchDCFeedbackSuccess(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}

function* SearchDCFeedback({payload}) {
    yield put(ShowLoading());
    
    yield FetchDCFeedbackSaga(payload);
    
    yield put(HideLoading());   
}

function* SearchCSFeedback({payload}) {
    yield put(ShowLoading());
    yield FetchCSFeedbackSaga(payload);
    yield put(HideLoading());   
}

function* ReplyFeedbackSaga(parameters) {
    try {
        const response = yield call(ApiPutWithBody, ReplySysFeedback, parameters);
        if (response.data.isSuccess) {
            const notiDialog = Notification('Hồi âm thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Hồi âm không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}

function* ReplySellerFeedbackSaga({payload}) {
    yield put(ShowLoading());
    
    yield ReplyFeedbackSaga(payload);
    yield FetchCSFeedbackSaga(initialCSFeedbackSearchFormState);

    yield put(HideLoading());   
}

function* ReplyCollectorFeedbackSaga({payload}) {
    yield put(ShowLoading());
    
    yield ReplyFeedbackSaga(payload);
    yield FetchDCFeedbackSaga(initialDCFeedbackSearchFormState);

    yield put(HideLoading());   
}
export default function* FeedbackSaga() {
    yield takeEvery(GET_FEEDBACK, GetAllFeedbackSaga);
    yield takeEvery(SEARCH_DC_FEEDBACK, SearchDCFeedback);
    yield takeEvery(SEARCH_CS_FEEDBACK, SearchCSFeedback);
    yield takeEvery(REPLY_SELLER_FEEDBACK, ReplySellerFeedbackSaga);
    yield takeEvery(REPLY_COLLECTOR_FEEDBACK, ReplyCollectorFeedbackSaga);
}