import React, {useEffect} from 'react';
import SellerComplaintSearchForm from '../../components/Complaints/SellerComplaintTab/SellerComplaintSearchForm';
import SellerComplaintList from '../../components/Complaints/SellerComplaintTab/SellerComplaintList';
import {initialSellerComplaintSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {SearchSellerComplaint} from '../../../Application/redux/actions/ComplaintAction';
import {useDispatch} from 'react-redux';

const SellerComplaintTab = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(
            SearchSellerComplaint(initialSellerComplaintSearchFormState)
        );
    }, [])
    return (
        <>
            <SellerComplaintSearchForm/>
            <SellerComplaintList/>
        </>
    );
}

export default SellerComplaintTab;
