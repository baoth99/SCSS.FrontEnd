import { call, put, takeEvery, select } from 'redux-saga/effects';
import {CREATE_NEW_UNIT, SEARCH_UNIT, REMOVE_UNIT} from '../utils/constants/ActionConstants';
import {ApiPost, ApiGet, ApiDelete} from '../api/ApiCaller';
import {CreateNewUnitEndpoint, SearchUnitEndpoint, RemoveUnitEndpoint} from '../api/ApiEndpoint';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {push} from 'connected-react-router';
import {Notification} from '../utils/constants/MessageConstants'
import {RedirectToNoInternet} from './UtilSaga'
import {EnqueSnackBar, HideConfirmDialog} from '../redux/actions/ModalAction';
import {ShowLoading, HideLoading} from '../redux/actions/LoadingAction';
import {SearchUnitSuccess, SearchUnit} from '../redux/actions/UnitAction';
import {initialUnitSearchFormState} from '../variables/InitialStateData'
import {STATUS} from '../utils/constants/HttpConstant'

function* SearchUnitSaga({payload}) {
    yield put(ShowLoading());
    try {
        const response = yield call(ApiGet, SearchUnitEndpoint, {...payload});
        const resData = response.data.resData;
        const totalRecord = response.data.total;

        yield put(SearchUnitSuccess(resData, totalRecord));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
}

function* RemoveUnitSaga({payload}) {
    yield put(ShowLoading());
    try {
        const id = payload;
        const response = yield call(ApiDelete, RemoveUnitEndpoint, id);
        yield put(HideConfirmDialog());

        const notiDialog = Notification('Xóa Đơn Vị Thành Công','success');
        yield put(EnqueSnackBar(notiDialog));

        yield put(SearchUnit(initialUnitSearchFormState))
    } catch (error) {
        console.log(error);
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}


function* CreateUnitSaga({payload}) {
    yield put(ShowLoading());
    try {
        const name = payload
        const response = yield call(ApiPost, CreateNewUnitEndpoint, name );    
        const data = response.data;
        if (data.isSuccess) {
            yield put(SearchUnit(initialUnitSearchFormState))
            const notiDialog = Notification('Tạo mới đơn vị thành công !','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            throw "Invalid";
        }

    } catch (error) {
        console.log(error);
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
}

export default function* UnitSaga () {
    yield takeEvery(SEARCH_UNIT, SearchUnitSaga);
    yield takeEvery(CREATE_NEW_UNIT, CreateUnitSaga);
    yield takeEvery(REMOVE_UNIT, RemoveUnitSaga);
}