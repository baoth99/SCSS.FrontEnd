import React, {useEffect} from 'react';
import {
    Container
  } from "reactstrap";
import DealerSearchForm from '../../components/Dealers/DealerSearchForm';
import DealerTable from '../../components/Dealers/DealerTable';
import {initialDealerSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {useDispatch} from 'react-redux';
import {SearchDealer} from '../../../Application/redux/actions/DealerAction';

const DealerDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchDealer({...initialDealerSearchFormState})
        )
    }, []);

    
    return (
       <Container className="mt--7" fluid>
           <DealerSearchForm/>
           <DealerTable/>
       </Container>
    );
}

export default DealerDashboard;
