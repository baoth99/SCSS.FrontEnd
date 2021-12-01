import React, {useEffect} from 'react';
import DealerComplaintSearchForm from '../../components/Complaints/DealerComplaintTab/DealerComplaintSearchForm';
import DealerComplaintList from '../../components/Complaints/DealerComplaintTab/DealerComplaintList';
import {initialDealerComplaintSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {SearchDealerComplaint} from '../../../Application/redux/actions/ComplaintAction';
import {useDispatch} from 'react-redux';

const DealerComplaintTab = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchDealerComplaint(initialDealerComplaintSearchFormState)
        );
    }, [])

    return (
        <>
            <DealerComplaintSearchForm/>
            <DealerComplaintList/>
        </>
    );
}

export default DealerComplaintTab;
