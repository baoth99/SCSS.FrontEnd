import React from 'react';
import SrapCategoryDashboard from './SrapCategoryDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetSCRoutes} from '../../../Infrastucture/routes/SystemRoutes';
//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";

const ScrapCategory = () => {
    const location = useLocation();

    return (
        <>
            <ScreenHeader/>
            {/* Page content */}
            {location.pathname === "/admin/scrap-category" ? (<SrapCategoryDashboard/>) : null}
            <Switch>
                {GetSCRoutes()}
            </Switch>
        </>
    );
}

export default ScrapCategory;
