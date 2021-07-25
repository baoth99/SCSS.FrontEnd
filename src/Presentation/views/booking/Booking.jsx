import React from 'react';
import {Switch, useLocation} from 'react-router-dom';
import {GetBookingRoutes} from '../../../Infrastucture/routes/SystemRoutes';

//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import BookingDashboard from './BookingDashboard';

const Booking = () => {
    const location = useLocation();

    return (
        <>
            <ScreenHeader/>
            {/* Page content */}
            {location.pathname === "/admin/booking" ? (<BookingDashboard/>) : null}
            <Switch>
                {GetBookingRoutes()}
            </Switch>
        </>
    );
}

export default Booking;
