import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import FetchDataSaga from '../../sagas/FetchDataSaga';
import SCSaga from '../../sagas/SCSaga';
import UnitSaga from '../../sagas/UnitSaga';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router'
import History from '../../routes/History';

const SCSagaMiddleware = createSagaMiddleware();
const UnitSagaMiddleware = createSagaMiddleware();
const fetchDataSagaMiddleware = createSagaMiddleware();
const routerMiddelware = routerMiddleware(History);
const middleware = [routerMiddelware, 
                    SCSagaMiddleware, 
                    UnitSagaMiddleware,
                    fetchDataSagaMiddleware
                    ];


const Store = createStore(
    reducers(History),
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

SCSagaMiddleware.run(SCSaga);
UnitSagaMiddleware.run(UnitSaga);
fetchDataSagaMiddleware.run(FetchDataSaga);

export default Store;