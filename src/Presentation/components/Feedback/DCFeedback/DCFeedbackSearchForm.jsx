import React, {useState} from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Button
  } from "reactstrap";
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {initialDCFeedbackSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData'
import {useDispatch} from 'react-redux';
import {ChangeDCFeedbackSearchForm, ClearDCFeedbackSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchDCFeedback} from '../../../../Application/redux/actions/FeedbackAction';

const DCFeedbackSearchForm = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(() => initialDCFeedbackSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeDCFeedbackSearchForm({...FormData})
        );
        dispatch(
            SearchDCFeedback({...FormData})
        );
    }

    const OnHandleRefresh = () => {
        setFormData(initialDCFeedbackSearchFormState);
        dispatch(
            ClearDCFeedbackSearchForm()
        );
        dispatch(
            SearchDCFeedback(initialDCFeedbackSearchFormState)
        );
    }

    const OnHandleClear = () => {
        setFormData(initialDCFeedbackSearchFormState)
    }

    return (
        <Row className="mt-3">
            <div className="col">
                <Card className="shadow">
                    <CardBody>  
                        <div className="pl-lg-4">
                            <AvForm>
                                <Row>
                                    <Col lg="3">
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
                                                value={FormData.transactionCode}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Vựa
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="dealerName"
                                                value={FormData.dealerName}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label">
                                                Số Điện Thoại Vựa
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="number"
                                                name="dealerPhone"
                                                value={FormData.dealerPhone}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />   
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Thu Mua
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="collectorName"
                                                value={FormData.collectorName}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                                                      
                                </Row>
                            </AvForm>
                        </div>
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
                                            onClick={() => OnHandleRefresh()}
                                            type="button" size="lg" block>
                                        <BsArrowClockwise/>
                                        &nbsp;
                                        Làm Mới
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            onClick={() => OnHandleClear()}
                                            type="button" size="lg" 
                                            block>
                                        <BsXCircle/>
                                        &nbsp;
                                        Xóa
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default DCFeedbackSearchForm;
