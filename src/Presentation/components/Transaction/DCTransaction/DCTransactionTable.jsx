import React from 'react';
import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import {DC_TRANSACTION_COLUMN} from '../../../../Infrastucture/utils/constants/CommonConstants'
import TransactionColumn from '../TransactionColumn';
import DCTransactionRow from './DCTransactionRow';
import TablePagination from '../../Commons/TablePagination';
import {SearchDCTransaction} from '../../../../Application/redux/actions/TransactionAction';
import {ChangeDCTransactionSearchForm} from '../../../../Application/redux/actions/FormAction';
const SeedData = [
    {
        id: "6f71d3da-0ee5-4a49-885d-d222c06a5ee7",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "5bcec014-1d12-4c42-af63-27e3ce03e8cb",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "3424b196-ab80-4ad8-a973-23de8789d4ce",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "2195e3ee-75be-4822-b99d-c28dbdb9af9c",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "c5bcecc3-a9f3-434a-a3a5-8688139baf8a",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn A",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị B",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    },
    {
        id: "d224ad3b-3503-47fe-8d26-633fc0c451b6",
        transactionCode : "DCT030720211350003",
        dealerName : "Trần Văn Tình",
        dealerPhone: "0938762891",
        collectorName : "Lê Thị Tánh",
        collectorPhone: "0332567891",
        transactionTime: "01/07/2021 13:40 PM",
        totalQuantity: "12 kg" ,
        totalPrice: "150.000 vnd"
    }
]


const ShowDCTransactions = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <DCTransactionRow
                    key={index} stt={index}
                    id={val.id} transactionCode={val.transactionCode} 
                    dealerName={val.dealerName} dealerPhone={val.dealerPhone}
                    collectorName={val.collectorName} collectorPhone={val.collectorPhone}
                    transactionTime={val.transactionTime}  totalPrice={val.totalPrice}
                    />
            )
        })
    }
    return result;
}

const DCTransactionTable = () => {
    const formData = state => state.DCTransactionSearchForm;

    return (
        <Row className="mt-4">
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Bảng Thông Tin Giao Dịch Giữa Người Thu Mua Và Chủ Vựa</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-hover" responsive>
                        <TransactionColumn list={DC_TRANSACTION_COLUMN}/>
                        <tbody>
                            {ShowDCTransactions(SeedData)}
                        </tbody>
                    </Table>
                    <TablePagination total={40} dataState={formData} action={SearchDCTransaction} formAction={ChangeDCTransactionSearchForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default DCTransactionTable;
