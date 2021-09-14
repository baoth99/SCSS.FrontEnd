import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {Card, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {ChangeDealerSearchForm, ClearDealerSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchDealer} from '../../../Application/redux/actions/DealerAction';

import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import {initialDealerSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';

import {DEALER_STATUS, DEALER_TYPE} from '../../../Infrastucture/utils/constants/CommonConstants';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";

const DealerSearchForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(() => initialDealerSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...formData,
            [name]: evt.value
        })
    }

    const SearchData = () => {
        dispatch(
            ChangeDealerSearchForm({...formData})
        );
        dispatch(
            SearchDealer({...formData})
        );
    }

    const Refresh = () => {
        setFormData(initialDealerSearchFormState);
        dispatch(
            ClearDealerSearchForm()
        );
        dispatch(
            SearchDealer({...initialDealerSearchFormState})
        );
    }

    const ClearForm = () => {
        setFormData(initialDealerSearchFormState);
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label">
                                                Tên Vựa Ve Chai
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="dealerName"
                                                type="text"
                                                value={formData.dealerName}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label" >
                                                Tên Người Đang Quản Lí Vựa
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="managedBy"
                                                type="text"
                                                value={formData.managedBy}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label" >
                                                Số Điện Thoại Vựa
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="dealerPhone"
                                                type="text"
                                                value={formData.dealerPhone}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label" >
                                                Địa Chỉ Vựa
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="dealerAddress"
                                                type="textarea"
                                                value={formData.dealerAddress}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label" >
                                                Trạng Thái
                                            </label>
                                            <AvField type="select" 
                                                    name="status" 
                                                    className="form-control-alternative"
                                                    value={formData.status}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                    >
                                                        <option value={'null'}>----------</option>
                                                        {RenderComboBox(DEALER_STATUS)}
                                            </AvField>
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label" >
                                                Loại Vựa
                                            </label>
                                            <AvField type="select" 
                                                    name="dealerType" 
                                                    className="form-control-alternative"
                                                    value={formData.dealerType}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                    >
                                                        <option value={0}>----------</option>
                                                        {RenderComboBox(DEALER_TYPE)}
                                            </AvField>
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
                                                    type="button" size="lg" block
                                                    onClick={() => SearchData()}>
                                                <BsSearch/>
                                                &nbsp;
                                                Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" type="button" size="lg" block
                                                onClick={() => Refresh()}>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={() => ClearForm()}
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

export default DealerSearchForm;
