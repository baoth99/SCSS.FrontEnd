import React, {useState} from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Button
  } from "reactstrap";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";

import {initialDealerComplaintSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeDealerComplaintSearchForm, ClearDealerComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchDealerComplaint} from '../../../../Application/redux/actions/ComplaintAction';
import {useDispatch} from 'react-redux';

const DealerComplaintSearchForm = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(() => initialDealerComplaintSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }
    const OnHandleSearch = () => {
        dispatch(
            ChangeDealerComplaintSearchForm({
                ...FormData
            })
        )
        dispatch(
            SearchDealerComplaint({
                ...FormData
            })
        )
    }

    const OnHandleRefresh = () => {
        setFormData(initialDealerComplaintSearchFormState);
        dispatch(
            ClearDealerComplaintSearchForm()
        );
        dispatch(
            SearchDealerComplaint(initialDealerComplaintSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialDealerComplaintSearchFormState);
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
                                            <label className="form-control-label">
                                                SDT Vựa
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
                                            <label className="form-control-label">
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
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg"
                                                onClick={OnHandleSearch}
                                                block>
                                            <BsSearch/>
                                            &nbsp;
                                            Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={OnHandleRefresh}
                                                block>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={OnHandleClearForm}
                                                block>
                                            <BsXCircle/>
                                            &nbsp;
                                            Xóa
                                        </Button>
                                    </Col>
                                </Row>
                            </AvForm>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default DealerComplaintSearchForm;
