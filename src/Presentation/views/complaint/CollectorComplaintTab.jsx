import React, {useEffect} from 'react';
import CollectorComplaintSearchForm from '../../components/Complaints/CollectorComplaintTab/CollectorComplaintSearchForm'
import CollectorComplaintList from '../../components/Complaints/CollectorComplaintTab/CollectorComplaintList'
import {initialCollectorComplaintSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {SearchCollectorComplaint} from '../../../Application/redux/actions/ComplaintAction';
import {useDispatch} from 'react-redux';

const CollectorComplaintTab = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(
            SearchCollectorComplaint(initialCollectorComplaintSearchFormState)
        );
    }, [])
    
    return (
        <>
            <CollectorComplaintSearchForm/>
            <CollectorComplaintList/>
        </>
    );
}

export default CollectorComplaintTab;
