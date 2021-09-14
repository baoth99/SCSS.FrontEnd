import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';

import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {SEARCH_COLLECTOR_REQUEST_REGISTER, SEARCH_DEALER_REQUEST_REGISTER, FEATCH_ALL_REQUEST_REGISTER, 
        GET_COLLECTOR_REQUEST_REGISTER, GET_DEALER_REQUEST_REGISTER, CHANGE_REQUEST_REGISTER_STATUS} from '../utils/constants/ActionConstants';
import {SearchCollectorRequestRegisterSuccess, SearchDealerRequestRegisterSuccess,
        GetCollectorRequestRegisterSuccess, GetDealerRequestRegisterSuccess} from '../../Application/redux/actions/RequestRegisterAction';
import {initialCollectorRRSearchFormState, initialDealerRRSearchFormState} from '../utils/variables/InitialStateData';
import {push} from 'connected-react-router';
import {ApiGet, ApiPutWithBody} from '../api/ApiCaller';
import {GetCollectorRR, GetDealerRR, GetCollectorRRDetail, GetDealerRRDetail, ChangeAccountStatus} from '../api/ApiEndpoint';
import {RequestRegisterRoute} from '../../Infrastucture/utils/constants/RouteConstants'
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {Notification} from '../utils/constants/MessageConstants';
import {DEALER_LEADER, DEALER_MEMBER} from '../utils/constants/CommonConstants'


function* FetchAll() {
    yield put(ShowLoading());

    yield FetchCollectorRequestRegisterSaga(initialCollectorRRSearchFormState);
    yield FetchDealerRequestRegisterSaga(initialDealerRRSearchFormState);

    yield put(HideLoading());
}


function* FetchCollectorRequestRegisterSaga(params) {
    try {
        const response = yield call(ApiGet, GetCollectorRR ,params);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchCollectorRequestRegisterSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}

function* FetchDealerRequestRegisterSaga(params) {
    try {
        const response = yield call(ApiGet, GetDealerRR ,params);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchDealerRequestRegisterSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
}


function* SearchCollectorRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield FetchCollectorRequestRegisterSaga(payload);
    yield put(HideLoading());
}

function* SearchDealerRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield FetchDealerRequestRegisterSaga(payload);
    yield put(HideLoading());
}

function* GetCollectorRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, GetCollectorRRDetail, payload);
        const resData = response.data.resData;
        yield put(GetCollectorRequestRegisterSuccess({...resData}));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* GetDealerRequestRegisterSaga({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, GetDealerRRDetail, payload);
        const resData = response.data.resData;
        let dealerDetail = {
                id: resData.id,
                accountName: resData.accountName,
                accountPhone: resData.accountPhone,
                accountAddress: resData.accountAddress,
                accountStatus: resData.accountStatus,
                birthDate: resData.birthDate,
                dealerType: resData.dealerType,
                gender: resData.gender,
                idCard: resData.idCard,
                //Dealer Info
                dealerName: resData.dealerInformation.dealerName,
                dealerPhone: resData.dealerInformation.dealerPhone,
                dealerAddress: resData.dealerInformation.dealerAddress,
                dealerImageUrl: resData.dealerInformation.dealerImageUrl,
                dealerLatitude: resData.dealerInformation.dealerLatitude,
                dealerLongitude: resData.dealerInformation.dealerLongitude,              
        }

        if(dealerDetail.dealerType === DEALER_MEMBER) {
            dealerDetail = {
                ...dealerDetail,
                dealerLeaderName: resData.dealerLeader.dealerName,
                dealerLeaderId: resData.dealerLeader.dealerId,

                managerLeaderId: resData.dealerLeader.managerId,
                managerName: resData.dealerLeader.managerName,
                managerPhone: resData.dealerLeader.managerPhone
             }
        }
        console.log(dealerDetail);
        yield put(GetDealerRequestRegisterSuccess(dealerDetail));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}


function* ChangeStatusSaga({payload}) {
    yield put(HideConfirmDialog());
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiPutWithBody, ChangeAccountStatus, payload);
        const data = response.data;

        if (data.isSuccess) {
            const notiDialog = Notification(payload.status == 2 ? 'Chấp Thuận Thành Công' : 'Từ Chối Chấp Thuận Thành Công','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Có Lỗi", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());

    yield put(push(RequestRegisterRoute));
}

export default function* RequestRegisterSaga() {
    yield takeEvery(FEATCH_ALL_REQUEST_REGISTER, FetchAll);
    yield takeEvery(SEARCH_COLLECTOR_REQUEST_REGISTER, SearchCollectorRequestRegisterSaga);
    yield takeEvery(SEARCH_DEALER_REQUEST_REGISTER, SearchDealerRequestRegisterSaga);
    yield takeEvery(GET_COLLECTOR_REQUEST_REGISTER, GetCollectorRequestRegisterSaga);
    yield takeEvery(GET_DEALER_REQUEST_REGISTER, GetDealerRequestRegisterSaga);
    yield takeEvery(CHANGE_REQUEST_REGISTER_STATUS, ChangeStatusSaga);
}