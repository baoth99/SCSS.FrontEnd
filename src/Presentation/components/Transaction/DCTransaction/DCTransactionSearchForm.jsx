import React, {useState} from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Row,
    Button
  } from "reactstrap";
import {useDispatch} from 'react-redux';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {initialDCTransactionSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeDCTransactionSearchForm, ClearDCTransactionSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchDCTransaction} from '../../../../Application/redux/actions/TransactionAction'

const DCTransactionSearchForm = () => {

    const [FormData, setFormData] = useState(() => initialDCTransactionSearchFormState);
    const dispatch = useDispatch();

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeDCTransactionSearchForm({...FormData})
        );
        dispatch(
            SearchDCTransaction({...FormData})
        );

    }

    const OnHandleRefresh = () => {
        setFormData(initialDCTransactionSearchFormState);
        dispatch(
            ClearDCTransactionSearchForm()
        );
        dispatch(
            SearchDCTransaction(initialDCTransactionSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialDCTransactionSearchFormState)
    }

    return (
        <Row className="mt-3">
            <div className="col">
                <Card className="shadow">
                    <CardBody>
                        <h6 className="heading-small text-muted mb-4">
                            Giao Dịch Giữa Người Thu Mua - Chủ Vựa
                        </h6>
                        <div className="pl-lg-4">
                            <AvForm>
                            <Row>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Mã Giao Dịch
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="text"
                                            name="transactionCode"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.transactionCode}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Tên Chủ Vựa
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="text"
                                            name="dealerName"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.dealerName}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Điện Thoại Chủ Vựa
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="number"
                                            name="dealerPhone"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.dealerPhone}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Địa chỉ vựa
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="textarea"
                                            name="dealAddress"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.dealAddress}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Tên Người Thu Gom
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="text"
                                            name="collectorName"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.collectorName}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Điện Thoại Người Thu Gom
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="number"
                                            name="collectorPhone"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.collectorPhone}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="3">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Từ Ngày
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="date"
                                            name="fromDate"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.fromDate}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="3">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Đến Ngày
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="date"
                                            name="toDate"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.toDate}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="3">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Từ Giờ
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="time"
                                            name="fromTime"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.fromTime}
                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="3">
                                    <AvGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Đến Giờ
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="time"
                                            name="toTime"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            value={FormData.toTime}
                                        />
                                    </AvGroup>
                                </Col>
                            </Row>
                            </AvForm>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="pl-4">
                            <Row>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            type="button" size="lg"
                                            onClick={() => OnHandleSearch()}
                                            block>
                                        <BsSearch/>
                                        &nbsp;
                                        Tìm Kiếm
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            type="button" size="lg" 
                                            onClick={() => OnHandleRefresh()}
                                            block>
                                        <BsArrowClockwise/>
                                        &nbsp;
                                        Làm Mới
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            type="button" size="lg" 
                                            onClick={() => OnHandleClearForm()}
                                            block>
                                        <BsXCircle/>
                                        &nbsp;
                                        Xóa
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </CardFooter>                           
                </Card>
            </div>
        </Row>
    );
}

export default DCTransactionSearchForm;
