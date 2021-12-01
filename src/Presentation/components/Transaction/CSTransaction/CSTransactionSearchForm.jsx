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
import {initialCSTransactionSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData'
import {ChangeCSTransactionSearchForm, ClearCSTransactionSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchCSTransaction} from '../../../../Application/redux/actions/TransactionAction'
const CSTransactionSearchForm = () => {
    const [FormData, setFormData] = useState(() => initialCSTransactionSearchFormState);
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
            ChangeCSTransactionSearchForm({...FormData})
        );
        dispatch(
            SearchCSTransaction({...FormData})
        );
    }

    const OnHandleRefresh = () => {
        setFormData(initialCSTransactionSearchFormState);
        dispatch(
            ClearCSTransactionSearchForm()
        );
        dispatch(
            SearchCSTransaction(initialCSTransactionSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialCSTransactionSearchFormState);
    }

    return (
        <Row className="mt-3">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <h6 className="heading-small text-muted mb-4">
                                Giao Dịch Giữa Người Thu Mua - Người Bán
                            </h6>
                            <div className="pl-lg-4">
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
                                                Tên Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="sellerName"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                value={FormData.sellerName}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="sellerPhone"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                value={FormData.sellerPhone}
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
                                                type="text"
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
                </AvForm>
            </div>      
        </Row>
    );
}

export default CSTransactionSearchForm;
