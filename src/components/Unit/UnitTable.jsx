import React from 'react';
import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import UnitColumn from './UnitColumn'
import UnitRow from './UnitRow';
import TablePagination from '../Commons/TablePagination';
import UnitSearchForm from './UnitSearchForm';
import {SearchUnit} from '../../redux/actions/UnitAction';
import {ChangeUnitSearchForm} from '../../redux/actions/FormAction';
import { useSelector } from 'react-redux';



const ShowUnit = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
               <UnitRow key={index} stt={index}
                        id={val.id}
                        name={val.name} createdTime={val.createdTime} createdBy={val.createdBy} />
            )
        });
    }
    return result;
}

const UnitTable = () => {
    const formData = state => state.UnitSearchForm;

    const UnitData = useSelector(state => state.DataUnit);

    return (
        <>
            <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Bảng đơn vị tính toán</h3>
                                </Col>                               
                            </Row>
                        </CardHeader>
                        <UnitSearchForm/> 
                        <Table className="align-items-center table-hover" responsive>
                            <UnitColumn/>
                            <tbody>
                                {ShowUnit(UnitData.list)}
                            </tbody>
                        </Table>
                        <TablePagination total={UnitData.total} dataState={formData} action={SearchUnit} formAction={ChangeUnitSearchForm}/>
                    </Card>
                </div>
            </Row>
        </>
    );
}

export default UnitTable;
