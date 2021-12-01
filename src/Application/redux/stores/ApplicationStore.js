import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import FetchDataSaga from '../../../Infrastucture/sagas/FetchDataSaga';
import UserSaga from '../../../Infrastucture/sagas/UserSaga';
import SCSaga from '../../../Infrastucture/sagas/SCSaga';
import TransactionSaga from '../../../Infrastucture/sagas/TransactionSaga';
import BookingSaga from '../../../Infrastucture/sagas/BookingSaga';
import ImageSliderSaga from '../../../Infrastucture/sagas/ImageSliderSaga';
import RequestRegisterSaga from '../../../Infrastucture/sagas/RequestRegisterSaga';
import DealerSaga from '../../../Infrastucture/sagas/DealerSaga';
import SysConfigSaga from '../../../Infrastucture/sagas/SysConfigSaga';
import TransactionServiceSaga from '../../../Infrastucture/sagas/TransactionServiceSaga';
import CancelReasonSaga from '../../../Infrastucture/sagas/CancelReasonSaga';
import ComplaintSaga from '../../../Infrastucture/sagas/ComplaintSaga';
import RegisterSaga from '../../../Infrastucture/sagas/RegisterSaga';
import DashboardSaga from '../../../Infrastucture/sagas/DashboardSaga';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router'
import History from '../../../Infrastucture/routes/History';

const UserSagaMiddleware = createSagaMiddleware();
const TransactionSagaMiddleware = createSagaMiddleware();
const SCSagaMiddleware = createSagaMiddleware();
const BookingSagaMiddleware = createSagaMiddleware();
const FetchDataSagaMiddleware = createSagaMiddleware();
const ImageSliderSagaMiddleware = createSagaMiddleware();
const RequestRegisterSagaMiddleware = createSagaMiddleware();
const DealerSagaMiddleware = createSagaMiddleware();
const SysConfigSagaMiddleware = createSagaMiddleware();
const TransactionServiceSagaMiddleware = createSagaMiddleware();
const CancelReasonSagaMiddleware = createSagaMiddleware();
const ComplaintSagaMiddleware = createSagaMiddleware();
const RegisterSagaMiddleware = createSagaMiddleware();

const DashboardSagaMiddleware = createSagaMiddleware();

const routerMiddelware = routerMiddleware(History);

const middleware = [routerMiddelware, 
                    UserSagaMiddleware,
                    SCSagaMiddleware, 
                    TransactionSagaMiddleware,
                    BookingSagaMiddleware,
                    FetchDataSagaMiddleware,
                    ImageSliderSagaMiddleware,
                    RequestRegisterSagaMiddleware,
                    DealerSagaMiddleware,
                    SysConfigSagaMiddleware,
                    TransactionServiceSagaMiddleware,
                    CancelReasonSagaMiddleware,
                    ComplaintSagaMiddleware,
                    RegisterSagaMiddleware,
                    DashboardSagaMiddleware
                    ];

const Store = createStore(
    reducers(History),
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

UserSagaMiddleware.run(UserSaga);
SCSagaMiddleware.run(SCSaga);
BookingSagaMiddleware.run(BookingSaga);
FetchDataSagaMiddleware.run(FetchDataSaga);
ImageSliderSagaMiddleware.run(ImageSliderSaga);
TransactionSagaMiddleware.run(TransactionSaga);
RequestRegisterSagaMiddleware.run(RequestRegisterSaga);
DealerSagaMiddleware.run(DealerSaga);
SysConfigSagaMiddleware.run(SysConfigSaga);
TransactionServiceSagaMiddleware.run(TransactionServiceSaga);
CancelReasonSagaMiddleware.run(CancelReasonSaga);
ComplaintSagaMiddleware.run(ComplaintSaga);
RegisterSagaMiddleware.run(RegisterSaga);
DashboardSagaMiddleware.run(DashboardSaga);
export default Store;