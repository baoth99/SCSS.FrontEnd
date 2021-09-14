import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import FetchDataSaga from '../../../Infrastucture/sagas/FetchDataSaga';
import UserSaga from '../../../Infrastucture/sagas/UserSaga';
import SCSaga from '../../../Infrastucture/sagas/SCSaga';
import TransactionSaga from '../../../Infrastucture/sagas/TransactionSaga';
import BookingSaga from '../../../Infrastucture/sagas/BookingSaga';
import FeedbackSaga from '../../../Infrastucture/sagas/FeedbackSaga';
import ImageSliderSaga from '../../../Infrastucture/sagas/ImageSliderSaga';
import RequestRegisterSaga from '../../../Infrastucture/sagas/RequestRegisterSaga';
import DealerSaga from '../../../Infrastucture/sagas/DealerSaga';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router'
import History from '../../../Infrastucture/routes/History';

const UserSagaMiddleware = createSagaMiddleware();
const TransactionSagaMiddleware = createSagaMiddleware();
const SCSagaMiddleware = createSagaMiddleware();
const BookingSagaMiddleware = createSagaMiddleware();
const FeedbackSagaMiddleware = createSagaMiddleware();
const FetchDataSagaMiddleware = createSagaMiddleware();
const ImageSliderSagaMiddleware = createSagaMiddleware();
const RequestRegisterSagaMiddleware = createSagaMiddleware();
const DealerSagaMiddleware = createSagaMiddleware();
const routerMiddelware = routerMiddleware(History);




const middleware = [routerMiddelware, 
                    UserSagaMiddleware,
                    SCSagaMiddleware, 
                    TransactionSagaMiddleware,
                    BookingSagaMiddleware,
                    FeedbackSagaMiddleware,
                    FetchDataSagaMiddleware,
                    ImageSliderSagaMiddleware,
                    RequestRegisterSagaMiddleware,
                    DealerSagaMiddleware
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
FeedbackSagaMiddleware.run(FeedbackSaga);
FetchDataSagaMiddleware.run(FetchDataSaga);
ImageSliderSagaMiddleware.run(ImageSliderSaga);
TransactionSagaMiddleware.run(TransactionSaga);
RequestRegisterSagaMiddleware.run(RequestRegisterSaga);
DealerSagaMiddleware.run(DealerSaga);

export default Store;