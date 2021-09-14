import React from 'react';

import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import SCColumn from './SCColumn';
import SCRow from './SCRow';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '../Commons/TablePagination';
import {ChangeSCSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchSC} from '../../../Application/redux/actions/SCAction';


const ShowScrapCategories = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <SCRow key={index} stt={index} id={val.id}
                        name={val.name} status={val.status}
                        createdBy={val.createdBy} 
                        createdTime={val.createdTime}
                        role={val.role}/>
            )
        });
    }
    return result;
}

const SCTable = () => {
    const SCData = useSelector(state => state.DataSC);
    const formData = state => state.SCSearchForm;

    return (
       <>
        <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Bảng Loại Phế Liệu</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <SCColumn/>
                        <tbody>
                            {ShowScrapCategories(SCData.list)}
                        </tbody>
                    </Table>
                    <TablePagination total={SCData.total} dataState={formData} action={SearchSC} formAction={ChangeSCSearchForm}/>
                    </Card>
                </div>
            </Row>
       </>
    );
}

export default SCTable;
