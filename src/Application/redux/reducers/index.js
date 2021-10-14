import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';
import {ConfirmDialogReducer,
        ImageSliderDetailReducer} from './ModalReducer';
import NotiStackReducer from './NotiStackReducer';
import {SCSearchFormReducer,
        UserSearchFormReducer,
        DCTransactionSearchFormReducer,
        CSTransactionSearchFormReducer,
        BookingSearchFormReducer,
        DCFeedbackSearchFormReducer,
        CSFeedbackSearchFormReducer,
        CollectorRequestRegisterSearchFormReducer,
        DealerRequestRegisterSearchFormReducer,
        DealerSearchFormReducer} from './FormReducer';
import {CollectorRegisterRequestDataReducer, DealerRegisterRequestDataReducer} from './RequestRegisterReducer'
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
import BookingReducer from './BookingReducer';
import {DCFeedbackListReducer, CSFeedbackListReducer} from './FeedbackReducer';
import {FeatchAmountOfBookingReducer} from './FetchDataReducer';
import {DCTransactionTableReducer, CSTransactionTableReducer} from './TransactionReducer';
import { connectRouter } from 'connected-react-router';
import {ImageSliderReducer, ImageUsingListReducer} from './ImageSliderReducer';
import DealerReducer from './DealerReducer';
import {SysConfigReducer} from './SysConfigReducer';
import CancelReasonReducer from './CancelReasonReducer';
import {SellCollectTransFeeReducer,
        CollectDealTransFeeReducer,
        SellerAwardPointReducer,
        CollectorAwardPointReducer} from './TransactionServiceReducer'

const RootReducer = (history) => combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer,
    NotiStack: NotiStackReducer,
    SCSearchForm: SCSearchFormReducer,
    UserSearchForm: UserSearchFormReducer,
    DCTransactionSearchForm: DCTransactionSearchFormReducer,
    CSTransactionSearchForm: CSTransactionSearchFormReducer,
    BookingSearchForm: BookingSearchFormReducer,
    DCFeedbackSearchForm: DCFeedbackSearchFormReducer,
    CSFeedbackSearchForm: CSFeedbackSearchFormReducer,
    CollectorRequestRegisterSearchForm: CollectorRequestRegisterSearchFormReducer,
    DealerRequestRegisterSearchForm: DealerRequestRegisterSearchFormReducer,
    DealerSearchForm: DealerSearchFormReducer,
    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    DataDCTransaction: DCTransactionTableReducer,
    DataCSTransaction: CSTransactionTableReducer,
    DataDCFeedback :DCFeedbackListReducer,
    DataCSFeedback: CSFeedbackListReducer,
    DataCollectorRegisterRequest: CollectorRegisterRequestDataReducer,
    DataDealerRegisterRequest: DealerRegisterRequestDataReducer,
    DataBooking: BookingReducer,
    DataDealer: DealerReducer,
    ConfirmDialog: ConfirmDialogReducer,
    ImageSlider: ImageSliderReducer,
    ImageUsingList: ImageUsingListReducer,
    ImageSliderDetail: ImageSliderDetailReducer,
    FeatchAmountOfBooking: FeatchAmountOfBookingReducer,
    SysConfig: SysConfigReducer,
    SellCollectTransFee: SellCollectTransFeeReducer,
    CollectDealTransFee: CollectDealTransFeeReducer,
    SellerAwardPoint: SellerAwardPointReducer,
    CollectorAwardPoint: CollectorAwardPointReducer,
    CancelReason: CancelReasonReducer,
    router: connectRouter(history),
});

export default RootReducer;