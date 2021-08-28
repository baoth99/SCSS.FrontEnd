import {SearchSCSuccess, GetSCDetailSuccess, SearchSC} from '../../Application/redux/actions/SCAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {EnqueSnackBar, HideSCCreate,
        HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';

import {SEARCH_SC, 
        CREATE_NEW_SC, REMOVE_SC,
        GET_SC_DETAIL, UPDATE_SC } from '../utils/constants/ActionConstants';

import {SCDashboardRoute} from '../utils/constants/RouteConstants';

import { call, put, takeEvery} from 'redux-saga/effects';

import {initialSCSearchFormState} from '../utils/variables/InitialStateData';

import {ApiPost, ApiGet, ApiDelete, ApiPutWithBody} from '../api/ApiCaller';
import {CreateNewSC, SearchSCEndpoint, GetSCDetailEndpoint, GetImage, RemoveSCEndpoint, EditSCEndpoint} from '../api/ApiEndpoint';
import {GetImageToShow} from '../helpers/CommonHelper';
import {Notification} from '../utils/constants/MessageConstants';

import {push} from 'connected-react-router';


function* SearchSCSaga({payload}) {
    console.log("SearchSCSaga");
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
    }

    yield put(HideLoading());
}

function* RemoveSCSaga({payload}) {
    yield put(ShowLoading());
    const id = payload.id;
    
    try {
        const response = yield call(ApiDelete,RemoveSCEndpoint,{id});
        const data = response.data;
        yield put(HideConfirmDialog());

        if (data.isSuccess) {
            const notiDialog = Notification('Xóa Loại Phế Liệu Thành Công','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Có Lỗi Trong Quá Trình Xóa Loại Phế Liệu", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }

    } catch (error) {
        console.log(error);
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideConfirmDialog());
    yield put(HideLoading());

    if (payload.detail) {
        yield put(push(SCDashboardRoute));       
    } else {
        yield put(SearchSC(initialSCSearchFormState));
    }
}

function* CreateSCSaga({payload}) {
    yield put(ShowLoading());
    
    var formData = new FormData();
    formData.append('Name', payload.name);
    formData.append('Unit',  payload.unit == '' ? '00000000-0000-0000-0000-000000000000' : payload.unit);
    formData.append('Image', payload.image);
    formData.append('Description', payload.description);
    
    try {
        const response = yield call(ApiPost, CreateNewSC ,formData);
        const data = response.data;

        if (data.isSuccess) {
            yield put(HideSCCreate());
            const notiDialog = Notification("Tạo Mới Loại Phế Liệu Thành Công", "success");
            yield put(EnqueSnackBar(notiDialog));
            yield put(SearchSC(initialSCSearchFormState));
        } else {
            const notiDialog = Notification("Có Lỗi Trong Quá Trình Tạo Mới Loại Phế Liệu", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(SCDashboardRoute));      
    }
    yield put(HideLoading());
}

function* GetSCDetail({payload}) {
    yield put(ShowLoading());
    const id = payload.id;
    try {
        const response = yield call(ApiGet, GetSCDetailEndpoint, {id}); 
        console.log(response.data);
        if(!response.data.isSuccess) {
            throw "Invalid";
        }

        const resData = response.data.resData;      
        let imageUrl = resData.image;
        if (imageUrl != "") {
            const imgResponse = yield call(ApiGet, GetImage, {image: imageUrl});
            let imageData = imgResponse.data.resData;
            let imageExtension = imageData.extension;
            let imageBase64 = imageData.base64;
            const imgBase64 = GetImageToShow(imageExtension, imageBase64);
            resData.image = imgBase64;
        }      
        console.log(resData);
        yield put(GetSCDetailSuccess({...resData}));
    } catch (error) {
        yield RedirectToNoInternet(error);
        yield put(push(SCDashboardRoute));
    }
    yield put(HideLoading());
}

function* UpdateSC({payload}) {
    yield put(ShowLoading());
    try {
        console.log(payload);
        
        var formData = new FormData();
        formData.append('Id', payload.id)
        formData.append('Name', payload.name);
        formData.append('Unit',  payload.unit == '' ? '00000000-0000-0000-0000-000000000000' : payload.unit);
        formData.append('ImageFile', payload.image);
        formData.append('IsDeleteImg', payload.isDeleteImg);
        formData.append('Description', payload.description);
        const response = yield call(ApiPutWithBody, EditSCEndpoint, formData)
        const data = response.data;

        if (data.isSuccess) {
            const notiDialog = Notification('Cập Nhật Loại Phế Liệu Thành Công','success');
            yield put(EnqueSnackBar(notiDialog));
        } else {
            const notiDialog = Notification("Có Lỗi Trong Quá Trình Cập Nhật Loại Phế Liệu", "fail");
            yield put(EnqueSnackBar(notiDialog));
        }

    } catch (error) {
        console.log(error);
        yield RedirectToNoInternet(error);
        yield put(push(BadRequestRoute));
    }

    yield put(HideLoading());
    yield put(push(SCDashboardRoute));

}

export default function* SCSaga () {
    //yield fork(FetchData);
    yield takeEvery(SEARCH_SC, SearchSCSaga);
    yield takeEvery(CREATE_NEW_SC, CreateSCSaga);
    yield takeEvery(REMOVE_SC, RemoveSCSaga);
    yield takeEvery(GET_SC_DETAIL, GetSCDetail);
    yield takeEvery(UPDATE_SC, UpdateSC);
}