import { call, put, takeEvery, select } from 'redux-saga/effects';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';
import {FeatchImageSliderSuccess, FeatchImageSliderUsingSuccess} from '../../Application/redux/actions/ImageSliderAction';
import {ShowImageSliderDetail} from '../../Application/redux/actions/ModalAction';
import {RedirectToNoInternet} from './UtilSaga';
import {BadRequestRoute} from '../utils/constants/RouteConstants';
import {FEATCH_IMAGESLIDER_IMAGES_USING, 
        CREATE_IMAGESLIDER_IMAGE,
        VIEW_IMAGESLIDER_DETAIL,
        SAVE_IMAGESLIDER
      } from '../utils/constants/ActionConstants';
import {EnqueSnackBar, HideConfirmDialog} from '../../Application/redux/actions/ModalAction';
import {ApiGetNoParameters, ApiGet, ApiPutWithBody, ApiPost} from '../api/ApiCaller';
import {GetImageList, GetImageUsing, GetImageDetail, ChangeImages, CreateImage} from '../api/ApiEndpoint';
import {push} from 'connected-react-router';
import {GetImageToShow} from '../helpers/CommonHelper';
import {Notification} from '../utils/constants/MessageConstants';


function* ViewImageDetailSaga({payload}) {
    yield put(ShowLoading());

    let result = null;
    try {
      const response = yield call(ApiGet, GetImageDetail, {id: payload.id});
      result = response.data.resData;
      console.log(result);
    } catch (error) {
      yield RedirectToNoInternet(error);
      yield put(push(BadRequestRoute));
    }
    yield put(HideLoading());
    // dispatch action to show modal
    yield put(ShowImageSliderDetail(result.id, result.name, result.createdTime, 
                                    GetImageToShow(result.image.extension, result.image.base64), result.isSelected));
}


function* FeatchImageSliderSaga() {
    yield put(ShowLoading());
    
    yield FeatchImageSliderUsingSaga();

    yield FeatchImageSliderListSaga();

    yield put(HideLoading());

}

function* SaveImageSliderSaga() {
  yield put(ShowLoading());
  let result = false;
  try {
    let data = yield select(state => state.ImageSlider);
    console.log(data);

    const response = yield call(ApiPutWithBody, ChangeImages, data.list);
    result = response.data.isSuccess;

    yield FeatchImageSliderUsingSaga();
    yield FeatchImageSliderListSaga();
    
  } catch (error) {
    yield RedirectToNoInternet(error);
    yield put(push(BadRequestRoute));
  }
  yield put(HideLoading());
  
  if (result) {
    const notiDialog = Notification('Thay đổi hình ảnh thành công !','success');
    yield put(EnqueSnackBar(notiDialog));
  }
}

function* CreateImageSaga({payload}) {
  yield put(ShowLoading());
  let result = false;

  try {
    var formData = new FormData();
    formData.append('Image', payload);
    const response = yield call(ApiPost, CreateImage, formData);
    result = response.data.isSuccess;
    yield FeatchImageSliderListSaga();
  } catch (error) {
    yield RedirectToNoInternet(error);
    yield put(push(BadRequestRoute));
  }
  yield put(HideLoading());
  if (result) {
    const notiDialog = Notification('Thêm mới hình ảnh thành công !','success');
    yield put(EnqueSnackBar(notiDialog));
  }
  else {
    const notiDialog = Notification('Thêm mới hình ảnh thất bại !','error');
    yield put(EnqueSnackBar(notiDialog));
  }
}

function* FeatchImageSliderUsingSaga() {
  try {
    const response = yield call(ApiGetNoParameters, GetImageUsing);
    const imageList = response.data.resData;
    
    let list = imageList.map(item => {
        return GetImageToShow(item.extension, item.base64);
    });

    yield put(FeatchImageSliderUsingSuccess(list));
  } catch (error) {
    yield RedirectToNoInternet(error);
    yield put(push(BadRequestRoute));
  }
}



function* FeatchImageSliderListSaga() {
  try {
    const response = yield call(ApiGetNoParameters, GetImageList);

    const imageList = response.data.resData;
    yield put(FeatchImageSliderSuccess(imageList));

  } catch (error) {
    yield RedirectToNoInternet(error);
    yield put(push(BadRequestRoute));
  }  
}

function* ImageSliderSaga() {
    yield takeEvery(FEATCH_IMAGESLIDER_IMAGES_USING, FeatchImageSliderSaga);
    yield takeEvery(VIEW_IMAGESLIDER_DETAIL, ViewImageDetailSaga);
    yield takeEvery(SAVE_IMAGESLIDER, SaveImageSliderSaga);
    yield takeEvery(CREATE_IMAGESLIDER_IMAGE, CreateImageSaga);
}

export default ImageSliderSaga;