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
import {initialCSFeedbackSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData'
import {useDispatch} from 'react-redux';
import {ChangeCSFeedbackSearchForm, ClearCSFeedbackSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchCSFeedback} from '../../../../Application/redux/actions/FeedbackAction';

const DCFeedbackSearchForm = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(() => initialCSFeedbackSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeCSFeedbackSearchForm({...FormData})
        );
        dispatch(
            SearchCSFeedback({...FormData})
        );
    }

    const OnHandleRefresh = () => {
        setFormData(initialCSFeedbackSearchFormState);
        dispatch(
            ClearCSFeedbackSearchForm()
        );
        dispatch(
            SearchCSFeedback(initialCSFeedbackSearchFormState)
        );
    }

    const OnHandleClear = () => {
        setFormData(initialCSFeedbackSearchFormState)
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
                                                Tên Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="sellerName"
                                                value={FormData.sellerName}
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
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số ĐT Người Thu Mua
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="number"
                                                name="collectorPhone"
                                                value={FormData.collectorPhone}
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
