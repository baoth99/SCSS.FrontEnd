import {SearchSCSuccess, GetSCDetailSuccess} from '../../Application/redux/actions/SCAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {SEARCH_SC, 
        GET_SC_DETAIL } from '../utils/constants/ActionConstants';
import {SCDashboardRoute} from '../utils/constants/RouteConstants';
import { call, put, takeEvery} from 'redux-saga/effects';
import {ApiGet} from '../api/ApiCaller';
import {SearchSCEndpoint, GetSCDetailEndpoint, GetImage} from '../api/ApiEndpoint';

import {push} from 'connected-react-router';


function* SearchSCSaga({payload}) {
    yield put(ShowLoading());
    const data = payload;
    console.log(data);
    try {
        const response = yield call(ApiGet, SearchSCEndpoint, data);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchSCSuccess(resData, totalRecord));

    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}


function* GetSCDetail({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, GetSCDetailEndpoint, payload); 
        const data = response.data;     
        if (!data.isSuccess) {
            throw "Invalid";
        }
        const resData = data.resData;
        yield put(GetSCDetailSuccess({...resData}));
    } catch (error) {
        if (error == 'Invalid' || error.response.status == 404) {
            yield put(push(SCDashboardRoute));
        } 
        else
        {
            yield RedirectToNoInternet(error);
        }
    }
    yield put(HideLoading());
}


export default function* SCSaga () {
    //yield fork(FetchData);
    yield takeEvery(SEARCH_SC, SearchSCSaga);
    yield takeEvery(GET_SC_DETAIL, GetSCDetail);
}