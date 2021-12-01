import React, {useEffect} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {GetDCTransactionDetail} from '../../../Application/redux/actions/TransactionAction';
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
                    <td>{val.bonusAmount}</td>
                    <td>{val.total} VND</td>
                </tr>
            )
        });
    }
    return result;
}




const TransactionDCDetail = () => {
    const DCTransactionDetail = useSelector(state => state.DCTransactionDetail);
    const dispatch = useDispatch();
    let { id } = useParams();


    useEffect(() => {
        dispatch(GetDCTransactionDetail(id));
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
                                        Thông Tin Chi Tiết Giao Dịch Giữ Chủ Vựa Và Người Thu Gom
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
                                            <h4 className="mb-0">{DCTransactionDetail.transactionCode}</h4>
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
                                            <h4 className="mb-0">{DCTransactionDetail.transactionDateTime}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa Chỉ Vựa : 
                                            </label>
                                            <h4 className="mb-0">{DCTransactionDetail.dealerAddress}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Chủ Vựa : 
                                            </label>
                                            <h4 className="mb-0">{DCTransactionDetail.dealerOwnerName}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Vựa : 
                                            </label>
                                            <h4 className="mb-0">{DCTransactionDetail.dealerPhone}</h4>
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
                                            <h4 className="mb-0">{DCTransactionDetail.collectorName}</h4>
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
                                            <h4 className="mb-0">{DCTransactionDetail.collectorPhone}</h4>
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
                                            <h4 className="mb-0">{DCTransactionDetail.awardPoint}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Khuyến Mãi Áp Dụng : 
                                            </label>
                                            <h4 className="mb-0">{DCTransactionDetail.promotions}</h4>
                                        </FormGroup>
                                    </Col>   
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Phản Hồi : 
                                            </label>
                                            <h4 className="mb-0">{DCTransactionDetail.collectorFeedback}</h4>
                                        </FormGroup>
                                    </Col>                                       
                                    <Col lg="8">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                               Bảng Thông Tin Chi Tiết Từng Thành Phần: 
                                        </label>
                                        <table className="table" style={{marginTop: '20px'}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Loại Phế Liệu Giao Dịch</th>
                                                    <th scope="col">Số Lượng</th>
                                                    <th scope="col">Promotion Bonus</th>
                                                    <th scope="col">Tổng Tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {RenderTransDetailList(DCTransactionDetail.transactionDetails)}
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <label className="form-control-label">
                                                            Tổng : 
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <h4>{DCTransactionDetail.bonusAmountTotal} VND</h4>
                                                    </td>
                                                    <td>
                                                        <h4>{DCTransactionDetail.total} VND</h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <label className="form-control-label">
                                                            Tổng Tiền : 
                                                        </label>
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <h4>{DCTransactionDetail.total} VND</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default TransactionDCDetail;
