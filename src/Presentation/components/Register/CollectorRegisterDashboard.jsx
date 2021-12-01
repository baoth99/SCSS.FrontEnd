import React from 'react';
import CollectorRegisterForm from './CollectorRegisterForm';
import CollectorRegisterOTPForm from './CollectorRegisterOTPForm';
import {useDispatch, useSelector} from 'react-redux';


const CollectorRegisterDashboard = () => {
    const collectorRegisterOTPState = useSelector(state => state.CollectorRegisterOTP);

    return (
        <>
            {collectorRegisterOTPState.isDisable ? <CollectorRegisterOTPForm/> : <CollectorRegisterForm/>}      
        </>
    );
}

export default CollectorRegisterDashboard;
