import React from 'react';

import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import {CS_TRANSACTION_COLUMN} from '../../../utils/constants/CommonConstants';
import TransactionColumn from '../TransactionColumn';
import CSTransactionRow from './CSTransactionRow';
import TablePagination from '../../Commons/TablePagination';
import {SearchCSTransaction} from '../../../redux/actions/TransactionAction';
import {ChangeCSTransactionSearchForm} from '../../../redux/actions/FormAction';

const SeedData = [
    {
        id: "6f71d3da-0ee5-4a49-885d-d222c06a5ee7",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn A",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    },
    {
        id: "5bcec014-1d12-4c42-af63-27e3ce03e8cb",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn A",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    },
    {
        id: "3424b196-ab80-4ad8-a973-23de8789d4ce",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn A",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    },
    {
        id: "2195e3ee-75be-4822-b99d-c28dbdb9af9c",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn A",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    },
    {
        id: "c5bcecc3-a9f3-434a-a3a5-8688139baf8a",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn A",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        transactionCode : "DCT030720211350003",
        sellerName : "Trần Văn Tình",
        sellerPhone: "0938762891",
        collectorName : "Lê Thị Tánh",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalPrice: "150.000 vnd"
    }
]

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
                            {ShowCSTransactions(SeedData)}
                        </tbody>
                    </Table>
                    <TablePagination total={40} dataState={formData} action={SearchCSTransaction} formAction={ChangeCSTransactionSearchForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default CSTransactionTable;
