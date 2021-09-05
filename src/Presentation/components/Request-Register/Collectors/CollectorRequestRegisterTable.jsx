import React from 'react';
import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import {useSelector} from 'react-redux';
import RequestRegisterColumn from '../RequestRegisterColumn';
import {COLLECTOR_REQUEST_REGISTER_COLUMN} from '../../../../Infrastucture/utils/constants/CommonConstants';
import TablePagination from '../../Commons/TablePagination';
import CollectorRequestRegisterRow from './CollectorRequestRegisterRow';
import {ChangeCollectorRequestRegisterForm} from '../../../../Application/redux/actions/FormAction';
import {SearchCollectorRequestRegister} from '../../../../Application/redux/actions/RequestRegisterAction';


const ShowCollectorRequestRegister = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
               <CollectorRequestRegisterRow
                key={index} stt={index} id={val.id}
                phone={val.phone} name={val.name}
                gender={val.gender} registerTime={val.registerTime}
                status={val.status}
               />
            )
        })
    }
    return result;
}


const CollectorRequestRegisterTable = () => {
    const formData = state => state.CollectorRequestRegisterSearchForm;
    const CollectorRequestRegisterData = useSelector(state => state.DataCollectorRegisterRequest);

    return (
        <Row className="mt-4">
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Người Thu Gom</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <RequestRegisterColumn list={COLLECTOR_REQUEST_REGISTER_COLUMN}/>
                        <tbody>
                            {ShowCollectorRequestRegister(CollectorRequestRegisterData.list)}
                        </tbody>
                    </Table>
                    <TablePagination total={CollectorRequestRegisterData.total} dataState={formData} action={SearchCollectorRequestRegister} formAction={ChangeCollectorRequestRegisterForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default CollectorRequestRegisterTable;
