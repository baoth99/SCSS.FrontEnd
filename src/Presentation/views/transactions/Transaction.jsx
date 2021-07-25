import React from 'react';
import {Switch, useLocation, Redirect} from 'react-router-dom';
import TransactionDashboard from './TransactionDashboard';
//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import {GetDCTransactionRoutes, GetCSTransactionRoutes} from '../../../Infrastucture/routes/SystemRoutes';

const Transaction = () => {
    const location = useLocation();

    return (
        <>
            <ScreenHeader />
            {/* Page content */}   
            {location.pathname === "/admin/transaction" ? (<TransactionDashboard/>) : null}
            <Switch>
                {GetDCTransactionRoutes()}
                {GetCSTransactionRoutes()}
                <Redirect from="/admin/transaction/:id" to="/admin/transaction" />      
            </Switch>
        </>
    );
}

export default Transaction;
