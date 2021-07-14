import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import {SCCreateModalReducer,
        ConfirmDialogReducer} from './ModalReducer';
import NotiStackReducer from './NotiStackReducer';
import {SCSearchFormReducer,
        UserSearchFormReducer,
        UnitSearchFormReducer,
        DCTransactionSearchFormReducer,
        CSTransactionSearchFormReducer} from './FormReducer';
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
import UnitReducer from './UnitReducer';
import {FetchUnitReducer} from './FetchDataReducer';
import {DCTransactionTableReducer, CSTransactionTableReducer} from './TransactionReducer'
import { connectRouter } from 'connected-react-router';

const RootReducer = (history) => combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer,
    SCCreateModal: SCCreateModalReducer,
    NotiStack: NotiStackReducer,
    SCSearchForm: SCSearchFormReducer,
    UserSearchForm: UserSearchFormReducer,
    UnitSearchForm: UnitSearchFormReducer,
    DCTransactionSearchForm: DCTransactionSearchFormReducer,
    CSTransactionSearchForm: CSTransactionSearchFormReducer,
    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    DataUnit: UnitReducer,
    DataDCTransaction: DCTransactionTableReducer,
    DataCSTransaction: CSTransactionTableReducer,
    ConfirmDialog: ConfirmDialogReducer,
    FetchUnit: FetchUnitReducer,
    router: connectRouter(history),
});

export default RootReducer;