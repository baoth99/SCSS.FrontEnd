import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
//import RootSaga from '../../sagas/RootSaga'
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


const Store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

//sagaMiddleware.run(rootSaga);

export default Store;