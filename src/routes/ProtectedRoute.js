import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminLayout from '../layouts/Admin';
import {SigninRedirect} from '../services/AuthService';

const ProtectedRoute = () => {
    const account = useSelector(state => state.Auth.user);
    return account != null ? (<Route path="/admin" render={(props) => <AdminLayout {...props} />} />) : SigninRedirect()
}

export default ProtectedRoute