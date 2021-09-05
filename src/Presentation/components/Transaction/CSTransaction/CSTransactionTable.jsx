import React from 'react';

import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import {CS_TRANSACTION_COLUMN} from '../../../../Infrastucture/utils/constants/CommonConstants';
import TransactionColumn from '../TransactionColumn';
import CSTransactionRow from './CSTransactionRow';
import TablePagination from '../../Commons/TablePagination';
import {SearchCSTransaction} from '../../../../Application/redux/actions/TransactionAction';
import {ChangeCSTransactionSearchForm} from '../../../../Application/redux/actions/FormAction';
import {useSelector} from 'react-redux';

const ShowCSTransactions = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
               <CSTransactionRow
                key={index} stt={index} id={val.id}
                transactionCode={val.transactionCode}
                sellerName={val.sellerName} sellerPhone={val.sellerPhone}
                collectorName={val.collectorName} collectorPhone={val.collectorPhone}
                transactionTime={val.transactionTime}
                totalPrice={val.totalPrice}
                />
            )
        })
    }
    return result;
}


const CSTransactionTable = () => {
    const formData = state => state.CSTransactionSearchForm;
    const DCTransactionData = useSelector(state => state.DataCSTransaction);

    return (
        <Row className="mt-4">
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Bảng Thông Tin Giao Dịch Giữa Người Thu Mua Và Người Bán</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <TransactionColumn list={CS_TRANSACTION_COLUMN}/>
                        <tbody>
                            {ShowCSTransactions(DCTransactionData.list)}
                        </tbody>
                    </Table>
                    <TablePagination total={DCTransactionData.total} dataState={formData} action={SearchCSTransaction} formAction={ChangeCSTransactionSearchForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default CSTransactionTable;
