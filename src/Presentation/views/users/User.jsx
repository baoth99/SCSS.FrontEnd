import React from 'react';


//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import UserDashboard from './UserDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetUserRoutes} from '../../../Infrastucture/routes/SystemRoutes';

const User = () => {
    const location = useLocation();
    return (
        <>
            <ScreenHeader />
            {/* Page content */}   
            {location.pathname === "/admin/users" ? (<UserDashboard/>) : null}       
            <Switch>
                {GetUserRoutes()}
            </Switch>
            
        </>
    );
}

export default User;
