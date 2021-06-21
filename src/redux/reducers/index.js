import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer
})