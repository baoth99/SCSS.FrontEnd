import { call, put, takeEvery, select, delay } from 'redux-saga/effects';
import {FEATCH_STATISTIC_DASHBOARD} from '../utils/constants/ActionConstants';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {GetStatisticDashboard} from '../../Application/redux/actions/DashboardAction';
import {push} from 'connected-react-router';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {ApiGetNoParameters} from '../api/ApiCaller';
import {DashboardEndpoint} from '../api/ApiEndpoint';

function* GetStatisticDashboardSaga() {
    yield put(ShowLoading());

    try {
        const response = yield call(ApiGetNoParameters, DashboardEndpoint);
        const resData = response.data.resData;
        yield put(GetStatisticDashboard(resData));
        
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}


export default function* DashboardSaga() {
    yield takeEvery(FEATCH_STATISTIC_DASHBOARD, GetStatisticDashboardSaga);

}