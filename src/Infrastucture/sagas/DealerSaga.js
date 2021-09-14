import { call, put, takeEvery} from 'redux-saga/effects';
import {GET_DEALER_DETAIL, SEARCH_DEALER} from '../../Infrastucture/utils/constants/ActionConstants';
import {SearchDealerSucess,GetDealerDetailSuccess} from '../../Application/redux/actions/DealerAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {ApiGet} from '../api/ApiCaller';
import {SearchDealerInfoEndpoint, GetDealerInfoDetailEndpoint} from '../api/ApiEndpoint';
import {push} from 'connected-react-router';
import {DealerInformationRoute} from '../utils/constants/RouteConstants';
import {DEALER_LEADER, DEALER_MEMBER} from '../utils/constants/CommonConstants'


function* SearchDealerSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        payload.status = payload.status == 'null' ? null : payload.status;
        const response = yield call(ApiGet, SearchDealerInfoEndpoint, payload);
        const resData = response.data.resData;
        const totalRecord = response.data.total;
        yield put(SearchDealerSucess(resData, totalRecord));
        
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}


function* GetDealerDetailSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);
    try {
        const response = yield call(ApiGet, GetDealerInfoDetailEndpoint, payload);
        const data = response.data;     
        if (!data.isSuccess) {
            throw "Invalid";
        }
        const resData = data.resData;
        console.log(resData);
        let dealerDetail = {
            accountId: resData.accountId,
            accountName: resData.accountName,
            accountPhone: resData.accountPhone,
            accountRole: resData.accountRole,
            dealerId: resData.dealerId,
            dealerName: resData.dealerName,
            dealerPhone: resData.dealerPhone,
            dealerAddress: resData.dealerAddress,
            dealerLatitude: resData.dealerLatitude,
            dealerLongtitude: resData.dealerLongtitude,
            dealerOpenTime: resData.dealerOpenTime,
            dealerCloseTime: resData.dealerCloseTime,
            dealerCreatedTime: resData.dealerCreatedTime,
            dealerImageUrl: resData.dealerImageUrl,
            dealerIsActive: resData.dealerIsActive,
            dealerIsSubcribed: resData.dealerIsSubcribed,
            dealerType: resData.dealerType,           
        }
        if(dealerDetail.dealerType === DEALER_MEMBER) {
            dealerDetail = {
                ...dealerDetail,
                accountLeaderId : resData.leader.accountId,
                dealerLeaderId: resData.leader.dealerId
            }
        }
        console.log(dealerDetail);
        yield put(GetDealerDetailSuccess({...dealerDetail}));
    } catch (error) {
        if (error == 'Invalid' || error.response.status == 404) {
            yield put(push(DealerInformationRoute));
        } 
        else
        {
            yield RedirectToNoInternet(error);
        }
    }
    yield put(HideLoading());
}

export default function* DealerSaga() {
    yield takeEvery(SEARCH_DEALER, SearchDealerSaga);
    yield takeEvery(GET_DEALER_DETAIL, GetDealerDetailSaga);
}