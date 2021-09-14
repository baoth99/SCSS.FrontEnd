import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SearchUser} from '../../../Application/redux/actions/UserAction';
import {initialUserFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {Container} from "reactstrap";
import UserForm from '../../components/Users/UserForm';
import UserTable from '../../components/Users/UserTable';

const UserDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchUser({...initialUserFormState})
        )
    }, []);
    return (
        <Container className="mt--7" fluid>
                <UserForm/>
                <UserTable/>
        </Container>
    );
}

export default UserDashboard;
