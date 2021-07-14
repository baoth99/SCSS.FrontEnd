import React from 'react';


//core components
import Header from "../../components/Headers/Header";
import UserDashboard from './UserDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetUserRoutes} from '../../../Infrastucture/routes/SystemRoutes';

const User = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            {location.pathname === "/admin/users" ? (<UserDashboard/>) : null}       
            <Switch>
                {GetUserRoutes()}
            </Switch>
            
        </>
    );
}

export default User;
