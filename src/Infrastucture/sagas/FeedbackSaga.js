import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';

import {SEARCH_DC_FEEDBACK, SEARCH_CS_FEEDBACK} from '../utils/constants/ActionConstants';
import {SearchDCFeedbackSuccess, SearchCSFeedbackSuccess} from '../../Application/redux/actions/FeedbackAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';

const SeedData = [
    {
        transactionCode: "BDC3212312312",
        dealerName: "Vựa Ve Chai Văn Thánh",
        dealerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        collectorRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        dealerName: "Vựa Ve Chai Văn Thánh",
        dealerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        collectorRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        dealerName: "Vựa Ve Chai Văn Thánh",
        dealerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        collectorRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        dealerName: "Vựa Ve Chai Văn Thánh",
        dealerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        collectorRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        dealerName: "Vựa Ve Chai Văn Thánh",
        dealerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        collectorRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    }
]

const SeedDataCS = [
    {
        transactionCode: "BDC3212312312",
        sellerName: "Vựa Ve Chai Văn Thánh",
        sellerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        sellerRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        sellerName: "Vựa Ve Chai Văn Thánh",
        sellerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        sellerRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        sellerName: "Vựa Ve Chai Văn Thánh",
        sellerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        sellerRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        sellerName: "Vựa Ve Chai Văn Thánh",
        sellerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        sellerRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    },
    {
        transactionCode: "BDC3212312312",
        sellerName: "Vựa Ve Chai Văn Thánh",
        sellerFeedback: "Ok ok ok ok, Very Good !!!!!!",
        collectorName: "Lê Thị A",
        collectorFeedback: "Very Good, good, good, good, excellent",
        sellerRate: 4,
        feedbackDateTime: "12/07/2021 13:40"
    }
]
function* SearchDCFeedback({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    
    yield put(SearchDCFeedbackSuccess(SeedData, SeedData.length));
    yield delay(1000);
    yield put(HideLoading());   
}

function* SearchCSFeedback({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    yield put(SearchCSFeedbackSuccess(SeedDataCS, SeedDataCS.length));

    yield delay(1000);
    yield put(HideLoading());   
}
export default function* FeedbackSaga() {
    yield takeEvery(SEARCH_DC_FEEDBACK, SearchDCFeedback);
    yield takeEvery(SEARCH_CS_FEEDBACK, SearchCSFeedback);
}