import React, {useEffect} from 'react';
//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import CancelReasonDashboard from "../../components/CollectorCancelReason/CancelReasonDashboard";
import {GetCancelReason} from '../../../Application/redux/actions/CancelReasonAction';
import {useDispatch} from 'react-redux'

const Collectorcancelreason = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(
           GetCancelReason()
       )
    }, [])

    return (
        <>
            <ScreenHeader/>
            <CancelReasonDashboard/>
        </>
    );
}

export default Collectorcancelreason;
