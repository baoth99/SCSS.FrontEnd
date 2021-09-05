import React from 'react';
import {Switch, useLocation, Redirect} from 'react-router-dom';
import RequestRegisterDashboard from './RequestRegisterDashboard';
import {GetCollectorRequestRegisterRoutes, GetDealerRequestRegisterRoutes} from '../../../Infrastucture/routes/SystemRoutes';

//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";

const RequestRegister = () => {
    const location = useLocation();
    return (
        <>
            <ScreenHeader />
            {/* Page content */}   
            {location.pathname === "/admin/request-register" ? (<RequestRegisterDashboard/>) : null}
            <Switch>
                {GetCollectorRequestRegisterRoutes()}
                {GetDealerRequestRegisterRoutes()}
                <Redirect from="/admin/request-register/:id" to="/admin/request-register" />
            </Switch>
        </>
    );
}

export default RequestRegister;
