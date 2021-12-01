import React,  {useEffect} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {GetCSTransactionDetail} from '../../../Application/redux/actions/TransactionAction';

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';


export const RenderTransDetailList = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.scrapCategoryName}</td>
                    <td>{val.quantity}</td>
                    <td>{val.total} VND</td>
                </tr>
            )
        });
    }
    return result;
}



const CSTransactionDetail = () => {
    const dispatch = useDispatch();
    const CSTransactionDetail = useSelector(state => state.CSTransactionDetail);
    let { id } = useParams();

    useEffect(() => {
        dispatch(GetCSTransactionDetail(id));
    }, []);

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Giao Dịch Giữ Người Thu Mua Và Người Bán
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Mã Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.transactionCode}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Thời Điểm Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.transactionDate}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa Chỉ Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.address}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Bán : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.sellerName}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Bán : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.sellerPhone}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Thu Mua : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.collectorName}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Thu Mua : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.collectorPhone}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Thời Điểm Thu Mua : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.collectingRequestDate}</h4>
                                        </FormGroup>
                                    </Col>  
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Điểm thưởng : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.awardPoint}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Đánh giá : 
                                            </label>
                                            <h4 className="mb-0">{CSTransactionDetail.feedback}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="8">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                               Bảng Thông Tin Chi Tiết Từng Thành Phần: 
                                        </label>
                                        <table className="table table-hover" style={{marginTop: '20px'}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Loại Phế Liệu Giao Dịch</th>
                                                    <th scope="col">Số Lượng</th>
                                                    <th scope="col">Tổng Tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {RenderTransDetailList(CSTransactionDetail.transDetails)}
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <label
                                                            className="form-control-label"
                                                        >
                                                            Tổng Tiền : 
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <h4>{CSTransactionDetail.total} VND</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default CSTransactionDetail;
