import React from 'react';

import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";

//core components
import Header from "../../components/Headers/Header";
import UserForm from '../../components/Users/UserForm';
import UserTable from '../../components/Users/UserTable';

const User = () => {
    return (
        <>
            <Header />
            {/* Page content */}

            <Container className="mt--7" fluid>
                <UserForm/>
                {/* Table */}
                <UserTable/>
            </Container>
        </>
    );
}

export default User;
