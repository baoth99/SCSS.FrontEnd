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
        CSTransactionSearchFormReducer,
        BookingSearchFormReducer,
        DCFeedbackSearchFormReducer,
        CSFeedbackSearchFormReducer} from './FormReducer';
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
import UnitReducer from './UnitReducer';
import BookingReducer from './BookingReducer';
import {DCFeedbackListReducer, CSFeedbackListReducer} from './FeedbackReducer';
import {FetchUnitReducer, FeatchAmountOfBookingReducer} from './FetchDataReducer';
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
    BookingSearchForm: BookingSearchFormReducer,
    DCFeedbackSearchForm: DCFeedbackSearchFormReducer,
    CSFeedbackSearchForm: CSFeedbackSearchFormReducer,
    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    DataUnit: UnitReducer,
    DataDCTransaction: DCTransactionTableReducer,
    DataCSTransaction: CSTransactionTableReducer,
    DataDCFeedback :DCFeedbackListReducer,
    DataCSFeedback: CSFeedbackListReducer,
    DataBooking: BookingReducer,
    ConfirmDialog: ConfirmDialogReducer,
    FetchUnit: FetchUnitReducer,
    FeatchAmountOfBooking: FeatchAmountOfBookingReducer,
    router: connectRouter(history),
});

export default RootReducer;