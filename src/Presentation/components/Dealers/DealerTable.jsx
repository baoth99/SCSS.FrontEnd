import React from 'react';
import {Col, Card, CardHeader, Table, Row} from "reactstrap";
import DealerColumn from './DealerColumn';
import TablePagination from '../Commons/TablePagination';
import DealerRow from './DealerRow';
import {useSelector} from 'react-redux';
import {ChangeDealerSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchDealer} from '../../../Application/redux/actions/DealerAction';

const ShowDealerRow = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <DealerRow key={index} stt={index} id={val.id} dealerName={val.dealerName}
                            dealerPhone={val.dealerPhone} managedBy={val.managedBy}
                            dealerType={val.dealerType} dealerStatus={val.status}/>
            )
        });
    }
    return result;
}

const DealerTable = () => {
    const DealerData = useSelector(state => state.DataDealer);
    const formData = state => state.DealerSearchForm;

    return (
        <>
            <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Bảng Thông Tin Vựa</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-hover" responsive>
                            <DealerColumn/>
                            <tbody>
                                {ShowDealerRow(DealerData.list)}
                            </tbody>
                        </Table>
                        <TablePagination total={DealerData.total} dataState={formData} action={SearchDealer} formAction={ChangeDealerSearchForm}/>
                    </Card>
                </div>
            </Row>
        </>
    );
}

export default DealerTable;
