import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminLayout from '../../Presentation/layouts/Admin';
import {SigninRedirect} from '../services/AuthService';
import {SetAuthHeader} from '../api/AxiosHeader';

const ProtectedRoute = () => {
    const account = useSelector(state => state.Auth.user);
    if(account != null) {
        SetAuthHeader(account.access_token, account.profile.sub);
    }
    return account != null ? (<Route path="/" render={(props) => <AdminLayout {...props} />} />) : SigninRedirect()
}

export default ProtectedRoute