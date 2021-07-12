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
import {ShowSCCreate} from '../../redux/actions/ModalAction';
import TablePagination from '../Commons/TablePagination';
import {ChangeSCSearchForm} from '../../redux/actions/FormAction';
import {SearchSC} from '../../redux/actions/SCAction';


const ShowScrapCategories = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <SCRow key={index} stt={index} id={val.id}
                        name={val.name} unit={val.unit}
                        createdBy={val.createdBy} 
                        createdTime={val.createdTime}/>
            )
        });
    }
    return result;
}

const SCTable = () => {

    const SCData = useSelector(state => state.DataSC);
    
    const dispatch = useDispatch();

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
                            <Col lg="3">
                                <button type="button" className="btn btn-primary" 
                                    style={{float: 'right'}} 
                                    onClick={() => dispatch(ShowSCCreate())}>
                                    Tạo Mới Loại Phế Liệu
                                </button>
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
