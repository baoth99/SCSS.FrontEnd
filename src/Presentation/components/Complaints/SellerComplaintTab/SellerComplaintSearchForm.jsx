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
import {initialSellerComplaintSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeSellerComplaintSearchForm, ClearSellerComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchSellerComplaint} from '../../../../Application/redux/actions/ComplaintAction';

import {useDispatch} from 'react-redux';

const SellerComplaintSearchForm = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(() => initialSellerComplaintSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeSellerComplaintSearchForm({
                ...FormData
            })
        )
        dispatch(
            SearchSellerComplaint({
                ...FormData
            })
        )
    }

    const OnHandleRefresh = () => {
        setFormData(initialSellerComplaintSearchFormState);
        dispatch(
            ClearSellerComplaintSearchForm()
        );
        dispatch(
            SearchSellerComplaint(initialSellerComplaintSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialSellerComplaintSearchFormState);
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
                                                SDT Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="number"
                                                name="sellerPhone"
                                                value={FormData.sellerPhone}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label">
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

export default SellerComplaintSearchForm;
