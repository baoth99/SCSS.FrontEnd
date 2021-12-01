import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {SEARCH_BOOKING, GET_BOOKING_DETAIL} from '../utils/constants/ActionConstants';
import {GetBookingDetailSuccess, SearchBookingSuccess} from '../../Application/redux/actions/BookingAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {ApiGet} from '../api/ApiCaller';
import {SearchCollectingRequestEndpoint, GetCollectingRequestDetailEndpoint} from '../api/ApiEndpoint';
import {push} from 'connected-react-router';
import {BookingRoute} from '../utils/constants/RouteConstants';


function* SearchBookingSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiGet, SearchCollectingRequestEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchBookingSuccess(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

function* GetBookingDetail({payload}) {
    yield put(ShowLoading());
   
    try {
        const response = yield call(ApiGet, GetCollectingRequestDetailEndpoint, payload);
        const data = response.data;
        if (!data.isSuccess) {
            throw "Invalid";
        }
        const resData = data.resData;
        yield put (GetBookingDetailSuccess(resData));
    } catch (error) {
        if (error == 'Invalid' || error.response.status == 404) {
            yield put(push(BookingRoute));
        } 
        else
        {
            yield RedirectToNoInternet(error);
        }
    }

    yield put(HideLoading());

}

export default function* BookingSaga() {
    yield takeEvery(SEARCH_BOOKING, SearchBookingSaga);
    yield takeEvery(GET_BOOKING_DETAIL, GetBookingDetail);
}
