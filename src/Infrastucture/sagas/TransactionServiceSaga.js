import { call, put, takeEvery, delay} from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {GET_TRANSACTION_SERVICE,
        GET_SELL_COLLECT_TRANS_FEE, GET_COLLECT_DEAL_TRANS_FEE,
        GET_SELLER_AWARD_POINT, GET_COLLECTOR_AWARD_POINT,
        MODIFY_SELL_COLLECT_TRANS_FEE, MODIFY_COLLECT_DEAL_TRANS_FEE,
        MODIFY_SELLER_AWARD_POINT, MODIFY_COLLECTOR_AWARD_POINT} from '../utils/constants/ActionConstants';
import {ApiGetNoParameters, ApiPutWithBody} from '../api/ApiCaller';
import {ModifyTransactionFee, GetSellCollectTransactionFee, GetCollectDealTransactionFee,
        ModifyTransactionAward, GetSellCollectTransactionAward, GetCollectDealTransactionAward} from '../api/ApiEndpoint';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {push} from 'connected-react-router';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {GetSellColectTransFeeSuccess, GetCollectDealTransFeeSuccess,
        GetSellerAwardPointSuccess, GetCollectorAwardPointSuccess} from '../../Application/redux/actions/TransactionServiceAction';
import {Notification} from '../utils/constants/MessageConstants';


function* GetTransactionService() {
    yield put(ShowLoading());
    try {
        yield GetSellCollectTransFeeSaga();
        yield GetCollectDealTransFeeSaga();
        yield GetSellerAwardPointSaga();
        yield GetCollectorAwardPointSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}

function* ModifyTransFeeSaga(transactionType, percent) {
    yield put(ShowLoading());
    try {
        var requestModel = {
            transactionType : parseInt(transactionType),
            percent: parseFloat(percent)
        };
        const response = yield call(ApiPutWithBody, ModifyTransactionFee, requestModel);
        if (response.data.isSuccess) {
            const notiDialog = Notification('Thay đổi phí giao dịch thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Thay đổi phí giao dịch không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}


function* ModifySellCollecTransFeeSaga({payload}) {
    yield put(HideConfirmDialog());
    yield ModifyTransFeeSaga(payload.transactionType, payload.percent);
    yield FetchSellCollectTransFeeSaga();
}

function* ModifyCollecDealTransFeeSaga({payload}) {
    yield put(HideConfirmDialog());
    yield ModifyTransFeeSaga(payload.transactionType, payload.percent);
    yield FetchCollectDealTransFeeSaga();
}


function* ModifyAwardPointSaga(transactionType, appliedAmount, amount) {
    yield put(ShowLoading());
    try {
        var requestModel = {
            transactionType : parseInt(transactionType),
            appliedAmount: parseFloat(appliedAmount),
            amount: parseFloat(amount),
        };
        const response = yield call(ApiPutWithBody, ModifyTransactionAward, requestModel);

        if (response.data.isSuccess) {
            const notiDialog = Notification('Thay đổi điểm thưởng thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Thay đổi điểm thưởng không thành công !", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}

function* ModifySellerAwardPointSaga({payload}) {
    yield put(HideConfirmDialog());
    yield ModifyAwardPointSaga(payload.transactionType, payload.appliedAmount, payload.amount);
    yield FetchSellerAwardPointSaga();
}

function* ModifyCollectorAwardPointSaga({payload}) {
    yield put(HideConfirmDialog());
    yield ModifyAwardPointSaga(payload.transactionType, payload.appliedAmount, payload.amount);
    yield FetchCollectorAwardPointSaga();
}


function* FetchSellCollectTransFeeSaga() {
    yield put(ShowLoading());
    try {
        yield GetSellCollectTransFeeSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* FetchCollectDealTransFeeSaga() {
    yield put(ShowLoading());
    try {
        yield GetCollectDealTransFeeSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* FetchSellerAwardPointSaga() {
    yield put(ShowLoading());
    try {
        yield GetSellerAwardPointSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* FetchCollectorAwardPointSaga() {
    yield put(ShowLoading());
    try {
        yield GetCollectorAwardPointSaga();

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* GetSellCollectTransFeeSaga() {
    const response = yield call(ApiGetNoParameters,GetSellCollectTransactionFee);
    let resData = response.data.resData;
    let percent = resData.percent;
    let histories = resData.histories;
    yield put(GetSellColectTransFeeSuccess(percent, histories));
}

function* GetCollectDealTransFeeSaga() {
    const response = yield call(ApiGetNoParameters, GetCollectDealTransactionFee);
    let resData = response.data.resData;
    let percent = resData.percent;
    let histories = resData.histories;
    yield put(GetCollectDealTransFeeSuccess(percent, histories));
}

function* GetSellerAwardPointSaga() {
    const response = yield call(ApiGetNoParameters, GetSellCollectTransactionAward); 
    let resData = response.data.resData;
    let awardPointUsing = {
        appliedAmount: resData.appliedAmount,
        amount: resData.amount
    }
    let histories = resData.histories;
    yield put(GetSellerAwardPointSuccess(awardPointUsing, histories));
}

function* GetCollectorAwardPointSaga() {
    const response = yield call(ApiGetNoParameters, GetCollectDealTransactionAward);
    let resData = response.data.resData;
    let awardPointUsing = {
        appliedAmount: resData.appliedAmount,
        amount: resData.amount
    }
    let histories = resData.histories;
    yield put(GetCollectorAwardPointSuccess(awardPointUsing, histories));
}

export default function* TransactionServiceSaga() {
    yield takeEvery(GET_TRANSACTION_SERVICE, GetTransactionService);
    yield takeEvery(GET_SELL_COLLECT_TRANS_FEE, FetchSellCollectTransFeeSaga);
    yield takeEvery(GET_COLLECT_DEAL_TRANS_FEE, FetchCollectDealTransFeeSaga);
    yield takeEvery(GET_SELLER_AWARD_POINT, FetchSellerAwardPointSaga);
    yield takeEvery(GET_COLLECTOR_AWARD_POINT, FetchCollectorAwardPointSaga);

    yield takeEvery(MODIFY_SELL_COLLECT_TRANS_FEE, ModifySellCollecTransFeeSaga);
    yield takeEvery(MODIFY_COLLECT_DEAL_TRANS_FEE, ModifyCollecDealTransFeeSaga);
    
    yield takeEvery(MODIFY_SELLER_AWARD_POINT, ModifySellerAwardPointSaga);
    yield takeEvery(MODIFY_COLLECTOR_AWARD_POINT, ModifyCollectorAwardPointSaga);

}