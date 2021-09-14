import React from 'react';
import ScreenHeader from "../../components/Headers/ScreenHeader";
import DealerDashboard from './DealerDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetDealerInfoRoutes} from '../../../Infrastucture/routes/SystemRoutes';

const Dealer = () => {
    const location = useLocation();
    return (
        <>
            <ScreenHeader/>
            {/* Page content */}
            {location.pathname === "/admin/dealers" ? (<DealerDashboard/>) : null}
            <Switch>
                {GetDealerInfoRoutes()}
            </Switch>
        </>
    );
}

export default Dealer;
