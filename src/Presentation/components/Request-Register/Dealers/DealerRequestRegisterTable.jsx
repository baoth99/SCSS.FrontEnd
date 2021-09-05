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
import {DEALER_REQUEST_REGISTER_COLUMN} from '../../../../Infrastucture/utils/constants/CommonConstants';
import TablePagination from '../../Commons/TablePagination';
import DealerRequestRegisterRow from './DealerRequestRegisterRow';
import {ChangeDealerRequestRegisterForm} from '../../../../Application/redux/actions/FormAction';
import {SearchDealerRequestRegister} from '../../../../Application/redux/actions/RequestRegisterAction';


const ShowCollectorRequestRegister = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
               <DealerRequestRegisterRow
                key={index} stt={index} id={val.id}
                phone={val.phone} name={val.name} dealerName={val.dealerName}
                gender={val.gender} registerTime={val.registerTime} status={val.status}
               />
            )
        })
    }
    return result;
}

const DealerRequestRegisterTable = () => {
    const formData = state => state.DealerRequestRegisterSearchForm;
    const DealerRequestRegisterData = useSelector(state => state.DataDealerRegisterRequest);
    
    
    return (
        <Row className="mt-4">
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Chủ Vựa</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <RequestRegisterColumn list={DEALER_REQUEST_REGISTER_COLUMN}/>
                        <tbody>
                            {ShowCollectorRequestRegister(DealerRequestRegisterData.list)}
                        </tbody>
                    </Table>
                    <TablePagination total={DealerRequestRegisterData.total} dataState={formData} action={SearchDealerRequestRegister} formAction={ChangeDealerRequestRegisterForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default DealerRequestRegisterTable;
