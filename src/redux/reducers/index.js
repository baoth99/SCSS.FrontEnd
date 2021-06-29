import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import {SCCreateModalReducer,
        ConfirmDialogReducer} from './ModalReducer';
import NotiStackReducer from './NotiStackReducer';
import {SCSearchFormReducer,
        UserSearchFormReducer} from './FormReducer';
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
        
export default combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer,
    SCCreateModal: SCCreateModalReducer,
    NotiStack: NotiStackReducer,
    SCSearchForm: SCSearchFormReducer,
    UserSearchForm: UserSearchFormReducer,
    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    ConfirmDialog: ConfirmDialogReducer
})