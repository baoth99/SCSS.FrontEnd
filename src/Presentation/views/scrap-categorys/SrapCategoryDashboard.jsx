import React, {useEffect} from 'react';
import {
    Container
  } from "reactstrap";
  
import SCSearchForm from '../../components/ScrapCategories/SCSearchForm';
import SCTable from '../../components/ScrapCategories/SCTable';

import {SearchSC} from '../../../Application/redux/actions/SCAction';
import {useDispatch} from 'react-redux';
import {initialSCSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';

const SrapCategoryDashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchSC({...initialSCSearchFormState})
        )
    }, []);

    return (
        <Container className="mt--7" fluid>
                <SCSearchForm/>
                {/* Table */}
                <SCTable/>
        </Container>
    );
}

export default SrapCategoryDashboard;
