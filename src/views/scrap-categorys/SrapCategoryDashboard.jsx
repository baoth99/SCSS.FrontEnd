import React, {useEffect} from 'react';
import {
    Container
  } from "reactstrap";
  
import SCSearchForm from '../../components/ScrapCategories/SCSearchForm';
import SCTable from '../../components/ScrapCategories/SCTable';

import {SearchSC} from '../../redux/actions/SCAction';
import {useDispatch, useSelector} from 'react-redux';
import {initialSCSearchFormState} from '../../variables/InitialStateData';

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
