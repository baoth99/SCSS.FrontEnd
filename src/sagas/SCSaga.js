import {SearchSC, SearchSCSuccess} from '../redux/actions/SCAction';
import {ShowLoading, HideLoading} from '../redux/actions/LoadingAction';
import {EnqueSnackBar, HideSCCreate,
        HideConfirmDialog} from '../redux/actions/ModalAction';

import {SEARCH_SC, SEARCH_SC_SUCCESS, 
        CREATE_NEW_SC, REMOVE_SC} from '../utils/constants/ActionConstants'
import {STATUS} from '../utils/constants/HttpConstant';
import {DataInvalid, SystemException, OtherException} from '../utils/constants/SystemMessageConstant';
import {CREATE_SC_SUCCESS_MESSAGE, SYSTEM_EXCEPTION} from '../utils/constants/MessageConstants';

import { call, put, takeEvery, takeLatest, fork, take, delay } from 'redux-saga/effects';

import {initialSCSearchFormState} from '../variables/InitialStateData';

import {ApiPost} from '../api/ApiCaller';
import {CreateNewSC} from '../api/ApiEndpoint';




const SeedData = [
    {
        id: "891c6f75-6e81-47ad-be38-26db9613b4b0",
        name: "Sắt",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fa05d333-d9b9-46a1-885c-c11d7d9470ba",
        name: "Giấy",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "4448fc09-83c9-41e3-ba60-0bdb388fb82a",
        name: "Đồ nhựa",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fb50e469-8b1e-4fde-9494-8d7a2f2e00ad",
        name: "Đồ Đồng",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "891c6f75-6e81-47ad-be38-26db9613b4b0",
        name: "Sắt",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "fa05d333-d9b9-46a1-885c-c11d7d9470ba",
        name: "Giấy",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    },
    {
        id: "4448fc09-83c9-41e3-ba60-0bdb388fb82a",
        name: "Đồ nhựa",
        unit: "Kí",
        createdBy: "Tran Hoai Bao",
        createdTime: "20/09/2019"
    }
]

function* FetchData() {
    console.log('FetchData')
}


function* SearchSCSaga({payload}) {
    yield put(ShowLoading());
    const data = payload;

    yield put(SearchSCSuccess([...SeedData], 30));


    yield delay(1000);
    yield put(HideLoading());
}

function* RemoveSCSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload.id);
    yield put(HideConfirmDialog());
    yield delay(1000);
    yield put(HideLoading());

    // redirect to /admin/scrap-category
    payload.history.push('/admin/scrap-category');

    // show message
    const notiDialog = {
        message: 'Xóa thành công',
        options: {
            variant: 'success',
        },
    }
    yield put(EnqueSnackBar(notiDialog));

}

function* CreateSCSaga({payload}) {
    yield put(ShowLoading());
    
    console.log(payload);

    var formData = new FormData();
    formData.append('Name', payload.name);
    formData.append('Unit',  payload.unit == '' ? '00000000-0000-0000-0000-000000000000' : payload.unit);
    formData.append('Image', payload.image);
    formData.append('Description', payload.description);

    console.log(formData);
    
    const response = yield call(ApiPost, CreateNewSC ,formData);

    const data = response.data;
    console.log(data);
    // switch (response.status) {
    //     case STATUS.OK: {
    //         if (!data.isSuccess && data.statusCode == STATUS.BAD_REQUEST) {
    //             switch (data.msgCode) {
    //                 case DataInvalid:{
    //                     if(data.resData != null) {
    //                         return data.resData
    //                     } else {
    //                         return SYSTEM_EXCEPTION;
    //                     }
    //                 }
    //                 case SystemException:{
    //                     return SYSTEM_EXCEPTION;
    //                 }
    //                 case OtherException: {
    //                     return SYSTEM_EXCEPTION;
    //                 }
    //                 default:
    //                     break;
    //             }
    //         }
    //     }
    //     case STATUS.BAD_REQUEST: {

    //     }
    //     case STATUS.NOTFOUND: {

    //     }
    //     case STATUS.INTERVAL_SERVER_ERROR: {

    //     }
    //     case STATUS.UNAUTHORIZED: {

    //     }
    //     default:
    //         break;
    // }   
    yield delay(1000);
    yield put(HideLoading());

    //yield put(HideSCCreate());
    //yield put(EnqueSnackBar(notiDialog));

}


export default function* SCSaga () {
    //yield fork(FetchData);
    yield takeEvery(SEARCH_SC, SearchSCSaga);
    yield takeEvery(CREATE_NEW_SC, CreateSCSaga);
    yield takeEvery(REMOVE_SC, RemoveSCSaga);
}