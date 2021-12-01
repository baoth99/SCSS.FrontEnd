import { call, put, takeEvery, select, delay } from 'redux-saga/effects';
import {SEARCH_SELLER_COMPLAINT, SEARCH_COLLECTOR_COMPLAINT, SEARCH_DEALER_COMPLAINT,
        REPLY_SELLER_COMPLAINT, REPLY_COLLECTOR_COMPLAINT, REPLY_DEALER_COMPLAINT} from '../utils/constants/ActionConstants';

import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {push} from 'connected-react-router';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {GetSellerComplaints, GetCollectorComplaints, GetDealerComplaints} from '../../Application/redux/actions/ComplaintAction';

import {GetSellerComplaintEndpoint, GetCollectorComplaintEndpoint, GetDealerComplaintEndpoint, 
        ReplySellerComplaintEndpoint, ReplyCollectorComplaintEndpoint, ReplyDealerComplaintEndpoint} from '../api/ApiEndpoint';
import {ApiGet, ApiPutWithBody} from '../api/ApiCaller';
import {EnqueSnackBar} from '../../Application/redux/actions/ModalAction';
import {Notification} from '../utils/constants/MessageConstants';

function* SearchSellerComplaintSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiGet, GetSellerComplaintEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;

        yield put(GetSellerComplaints(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* SearchCollectorComplaintSaga({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, GetCollectorComplaintEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;

        yield put(GetCollectorComplaints(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* SearchDealerComplaintSaga({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, GetDealerComplaintEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;

        yield put(GetDealerComplaints(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* ReplySellerComplaintSaga({payload}) {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiPutWithBody, ReplySellerComplaintEndpoint, payload);
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

    yield put(HideLoading());

    payload = yield select(state => state.SellerComplaintSearchForm);
    yield SearchSellerComplaintSaga({payload});
}

function* ReplyCollectorComplaintSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiPutWithBody, ReplyCollectorComplaintEndpoint, payload);
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
    yield put(HideLoading());

    payload = yield select(state => state.CollectorComplaintSearchForm);
    yield SearchCollectorComplaintSaga({payload});

}

function* ReplyDealerComplaintSaga({payload}) {
    console.log(payload);
}

export default function* ComplaintSaga() {
    yield takeEvery(SEARCH_SELLER_COMPLAINT, SearchSellerComplaintSaga);
    yield takeEvery(SEARCH_COLLECTOR_COMPLAINT, SearchCollectorComplaintSaga);
    yield takeEvery(SEARCH_DEALER_COMPLAINT, SearchDealerComplaintSaga);
    yield takeEvery(REPLY_SELLER_COMPLAINT, ReplySellerComplaintSaga);
    yield takeEvery(REPLY_COLLECTOR_COMPLAINT, ReplyCollectorComplaintSaga);
    yield takeEvery(REPLY_DEALER_COMPLAINT, ReplyDealerComplaintSaga);
}