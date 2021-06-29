import React from 'react';

import {
    Card,
    CardHeader,
    Table,
    Row,
  } from "reactstrap";

import UserColumn from './UserColumn';
import TablePagination from '../Commons/TablePagination';
import {SearchUser} from '../../redux/actions/UserAction';
import {ChangeUserSearchForm} from '../../redux/actions/FormAction';
import UserRow from './UserRow';

const SeedData = [
    {
        id: "5c8d1031-851b-4c33-85f0-2bb2b558841d",
        name: "Trần Hoài Bảo",
        phone: "0939872902",
        status: 1,
        role: 2,
        totalPoint: 43
    },
    {
        id: "5e5b319b-f5f0-4cd3-9da3-b888200a0638",
        name: "Trần Đức Tiến",
        phone: "0939872902",
        status: 2,
        role: 3,
        totalPoint: 43
    },
    {
        id: "2d6a1280-e752-416b-9b4a-a9f1430c3ab9",
        name: "Phạm Trung Hiếu",
        phone: "0939872902",
        status: 3,
        role: 3,
        totalPoint: 43
    },
    {
        id: "5c50e1d8-0e05-4c3f-8730-70ce3ec46772",
        name: "Vũ Xuân Thiên",
        phone: "0939872902",
        status: 1,
        role: 4,
        totalPoint: 43
    },
    {
        id: "70d0fdb9-ebe9-41a7-87ca-8898c34e1ffa",
        name: "Trần Đức Bo",
        phone: "0939872902",
        status: 1,
        role: 2,
        totalPoint: 43
    }
]

const ShowUser = (data) => {
    let result = null
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <UserRow key={index} stt={index} id={val.id} 
                        name={val.name} phone={val.phone} 
                        status={val.status} role={val.role} totalPoint={val.totalPoint}/>
            )
        })
    }
    return result;

}

const UserTable = () => {
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
                            {ShowUser(SeedData)}
                        </tbody>
                    </Table>
                    <TablePagination total={30} dataState={formData} action={SearchUser} formAction={ChangeUserSearchForm}/>
                    </Card>
                </div>
        </Row>
    );
}

export default UserTable;
