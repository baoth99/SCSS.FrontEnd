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
        CollectorRequestRegisterSearchFormReducer,
        DealerRequestRegisterSearchFormReducer,
        DealerSearchFormReducer,
        SellerComplaintSearchFormReducer,
        CollectorComplaintSearchFormReducer,
        DealerComplaintSearchFormReducer} from './FormReducer';
import {CollectorRegisterRequestDataReducer, DealerRegisterRequestDataReducer} from './RequestRegisterReducer'
import {SCTableReducer} from './SCReducer';
import {UserTableReducer} from './UserReducer';
import {BookingReducer, BookingDetailReducer} from './BookingReducer';
import {DCTransactionTableReducer, DCTransactionDetailReducer, CSTransactionTableReducer, CSTransactionDetailReducer} from './TransactionReducer';
import { connectRouter } from 'connected-react-router';
import {ImageSliderReducer, ImageUsingListReducer} from './ImageSliderReducer';
import DealerReducer from './DealerReducer';
import {SysConfigReducer} from './SysConfigReducer';
import CancelReasonReducer from './CancelReasonReducer';
import {SellCollectTransFeeReducer,
        CollectDealTransFeeReducer,
        SellerAwardPointReducer,
        CollectorAwardPointReducer} from './TransactionServiceReducer';

import {StatisticDasboardReducer} from './DashboardReducer'

import {SellerComplaintReducer, CollectorComplaintReducer, DealerComplaintReducer} from './ComplaintReducer';
import {CollectorRegisterOTPReducer} from './RegisterReducer'

const RootReducer = (history) => combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer,
    NotiStack: NotiStackReducer,
    SCSearchForm: SCSearchFormReducer,
    UserSearchForm: UserSearchFormReducer,

    StatisticDasboard: StatisticDasboardReducer,

    CollectorRegisterOTP: CollectorRegisterOTPReducer,

    DCTransactionSearchForm: DCTransactionSearchFormReducer,
    DCTransactionDetail: DCTransactionDetailReducer,
    CSTransactionSearchForm: CSTransactionSearchFormReducer,
    CSTransactionDetail: CSTransactionDetailReducer,

    BookingSearchForm: BookingSearchFormReducer,
    CollectorRequestRegisterSearchForm: CollectorRequestRegisterSearchFormReducer,
    DealerRequestRegisterSearchForm: DealerRequestRegisterSearchFormReducer,
    DealerSearchForm: DealerSearchFormReducer,

    SellerComplaintSearchForm: SellerComplaintSearchFormReducer,
    CollectorComplaintSearchForm: CollectorComplaintSearchFormReducer,
    DealerComplaintSearchForm: DealerComplaintSearchFormReducer,
    
    SellerComplaint: SellerComplaintReducer,
    CollectorComplaint: CollectorComplaintReducer,
    DealerComplaint: DealerComplaintReducer,

    DataSC: SCTableReducer,
    DataUser: UserTableReducer,
    DataDCTransaction: DCTransactionTableReducer,
    DataCSTransaction: CSTransactionTableReducer,
    DataCollectorRegisterRequest: CollectorRegisterRequestDataReducer,
    DataDealerRegisterRequest: DealerRegisterRequestDataReducer,
    DataBooking: BookingReducer,
    BookingDetail: BookingDetailReducer,

    DataDealer: DealerReducer,
    ConfirmDialog: ConfirmDialogReducer,
    ImageSlider: ImageSliderReducer,
    ImageUsingList: ImageUsingListReducer,
    ImageSliderDetail: ImageSliderDetailReducer,
    SysConfig: SysConfigReducer,
    SellCollectTransFee: SellCollectTransFeeReducer,
    CollectDealTransFee: CollectDealTransFeeReducer,
    SellerAwardPoint: SellerAwardPointReducer,
    CollectorAwardPoint: CollectorAwardPointReducer,
    CancelReason: CancelReasonReducer,
    router: connectRouter(history),
});

export default RootReducer;