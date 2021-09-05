import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import {SCCreateModalReducer,
        ConfirmDialogReducer,
        ImageSliderDetailReducer} from './ModalReducer';
import NotiStackReducer from './NotiStackReducer';
import {SCSearchFormReducer,
        UserSearchFormReducer,
        UnitSearchFormReducer,
        DCTransactionSearchFormReducer,
        CSTransactionSearchFormReducer,
        BookingSearchFormReducer,
        DCFeedbackSearchFormReducer,
        CSFeedbackSearchFormReducer,
        CollectorRequestRegisterSearchFormReducer,
        DealerRequestRegisterSearchFormReducer} from './FormReducer';
import {CollectorRegisterRequestDataReducer, DealerRegisterRequestDataReducer} from './RequestRegisterReducer'
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
import UnitReducer from './UnitReducer';
import BookingReducer from './BookingReducer';
import {DCFeedbackListReducer, CSFeedbackListReducer} from './FeedbackReducer';
import {FetchUnitReducer, FeatchAmountOfBookingReducer} from './FetchDataReducer';
import {DCTransactionTableReducer, CSTransactionTableReducer} from './TransactionReducer';
import { connectRouter } from 'connected-react-router';
import {ImageSliderReducer, ImageUsingListReducer} from './ImageSliderReducer'

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
    CollectorRequestRegisterSearchForm: CollectorRequestRegisterSearchFormReducer,
    DealerRequestRegisterSearchForm: DealerRequestRegisterSearchFormReducer,
    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    DataUnit: UnitReducer,
    DataDCTransaction: DCTransactionTableReducer,
    DataCSTransaction: CSTransactionTableReducer,
    DataDCFeedback :DCFeedbackListReducer,
    DataCSFeedback: CSFeedbackListReducer,
    DataCollectorRegisterRequest: CollectorRegisterRequestDataReducer,
    DataDealerRegisterRequest: DealerRegisterRequestDataReducer,
    DataBooking: BookingReducer,
    ConfirmDialog: ConfirmDialogReducer,
    FetchUnit: FetchUnitReducer,
    ImageSlider: ImageSliderReducer,
    ImageUsingList: ImageUsingListReducer,
    ImageSliderDetail: ImageSliderDetailReducer,
    FeatchAmountOfBooking: FeatchAmountOfBookingReducer,
    router: connectRouter(history),
});

export default RootReducer;