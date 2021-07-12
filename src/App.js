import React, {createRef} from 'react';
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
import GlobalLoading from 'components/Loadings/GlobalLoading';
import Collapse from '@material-ui/core/Collapse';
import { SnackbarProvider } from 'notistack';

import NotifierSnack from './components/Commons/NotifierSnack';
import { MdCancel } from "react-icons/md";


import { ConnectedRouter } from 'connected-react-router';
import history from './routes/History';



const App = () => {

    const notistackRef = createRef();

    const onClickDismiss = key => () => { 
        notistackRef.current.closeSnackbar(key);
    }

    return (
        <Provider store={Store}>
            
            <AuthProvider userManager={UserManager} store={Store}>
                <SnackbarProvider 
                    ref={notistackRef}
                    maxSnack={7}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}                    
                    autoHideDuration={3000}
                    TransitionComponent={Collapse}
                    action={(key) => (
                        <MdCancel onClick={onClickDismiss(key)} style={{cursor: 'pointer'}}/>
                    )}
                    >
                    <BrowserRouter>
                        <ConnectedRouter history={history}>
                            <Switch>                   
                                <Route path="/signin-oidc" component={SigninOidc}/>
                                <Route path="/signout-oidc" component={SignoutOidc}/>
                                <ProtectedRoute/>
                                <Redirect from="/" to="/admin/dashboard" />                      
                            </Switch>                 
                            <NotifierSnack />
                            <GlobalLoading/>
                        </ConnectedRouter>
                    </BrowserRouter>
                </SnackbarProvider>
            </AuthProvider>
            
        </Provider>
    );
}

export default App;
