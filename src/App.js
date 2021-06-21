import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";


import ProtectedRoute from './routes/ProtectedRoute';

import SigninOidc from './views/redirect/SigninOidc';
import SignoutOidc from './views/redirect/SignoutOidc';

import AuthProvider from './utils/providers/AuthProvider';

import UserManager from './services/AuthService';

import Store from './redux/stores/ApplicationStore';

const App = () => {
    return (
        <Provider store={Store}>
            <AuthProvider userManager={UserManager} store={Store}>
                <BrowserRouter>
                    <Switch>                   
                        <Route path="/signin-oidc" component={SigninOidc}/>
                        <Route path="/signin-oidc" component={SignoutOidc}/>
                        <ProtectedRoute/>
                        <Redirect from="/" to="/admin/dashboard" />                      
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    );
}

export default App;
