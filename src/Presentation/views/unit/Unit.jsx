import React, {useEffect} from 'react';

//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import {Container} from "reactstrap";

import {useDispatch} from 'react-redux';
import {SearchUnit} from '../../../Application/redux/actions/UnitAction';
import {initialUnitSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData'

import UnitTable from '../../components/Unit/UnitTable';
import UnitCreateForm from '../../components/Unit/UnitCreateForm'
import UnitEditForm from '../../components/Unit/UnitEditForm'

const Unit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchUnit(initialUnitSearchFormState)
        );
    }, []);

    return (
        <>
            <ScreenHeader/>
            <Container className="mt--7" fluid>
                <UnitCreateForm/>
                <UnitTable/>
            </Container>
            <UnitEditForm/>
        </>
    );
}

export default Unit;
