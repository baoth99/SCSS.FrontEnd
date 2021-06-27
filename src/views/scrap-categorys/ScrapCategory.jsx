import React from 'react';

import SCCreateForm from '../../components/ScrapCategories/SCCreateForm';

import SrapCategoryDashboard from './SrapCategoryDashboard';
import {Switch, useLocation} from 'react-router-dom';
import {GetSCRoutes} from '../../routes/SystemRoutes';

//core components
import Header from "../../components/Headers/Header";

const ScrapCategory = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            {/* Page content */}
            {location.pathname === "/admin/scrap-category" ? (<SrapCategoryDashboard/>) : null}
            <Switch>
                {GetSCRoutes()}
            </Switch>
            <SCCreateForm/>
        </>
    );
}

export default ScrapCategory;
