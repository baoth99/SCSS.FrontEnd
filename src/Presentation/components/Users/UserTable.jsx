import React from 'react';

import {
    Card,
    CardHeader,
    Table,
    Row,
  } from "reactstrap";
import {useSelector} from 'react-redux'

import UserColumn from './UserColumn';
import TablePagination from '../Commons/TablePagination';
import {SearchUser} from '../../../Application/redux/actions/UserAction';
import {ChangeUserSearchForm} from '../../../Application/redux/actions/FormAction';
import UserRow from './UserRow';


const ShowUser = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <UserRow key={index} stt={index} id={val.id} 
                        name={val.name} phone={val.phone} gender={val.gender}
                        status={val.status} role={val.role} totalPoint={val.totalPoint}/>
            )
        })
    }
    return result;
}

const UserTable = () => {
    const UserData = useSelector(state => state.DataUser);
    const formData = state => state.UserSearchForm;


    return (
        <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                    <CardHeader className="border-0">
                        <h3 className="mb-0">Bảng Người Dùng</h3>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <UserColumn/>
                        <tbody>                                
                            {ShowUser(UserData.list)}
                        </tbody>
                    </Table>
                    <TablePagination total={UserData.total} dataState={formData} action={SearchUser} formAction={ChangeUserSearchForm}/>
                    </Card>
                </div>
        </Row>
    );
}

export default UserTable;
