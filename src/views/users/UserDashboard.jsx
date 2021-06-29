import React, {useEffect} from 'react';

import {Container} from "reactstrap";
import UserForm from '../../components/Users/UserForm';
import UserTable from '../../components/Users/UserTable';

const UserDashboard = () => {
    
    
    return (
        <Container className="mt--7" fluid>
                <UserForm/>
                <UserTable/>
        </Container>
    );
}

export default UserDashboard;
