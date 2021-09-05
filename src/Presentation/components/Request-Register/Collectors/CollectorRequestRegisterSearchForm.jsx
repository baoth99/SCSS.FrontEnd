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
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import {STATUS_REQUEST} from '../../../../Infrastucture/utils/constants/CommonConstants';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {initialCollectorRRSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData'

import {RenderComboBox} from '../../../../Infrastucture/helpers/CommonHelper';
import {ChangeCollectorRequestRegisterForm, ClearCollectorRequestRegisterForm} from '../../../../Application/redux/actions/FormAction';
import {SearchCollectorRequestRegister} from '../../../../Application/redux/actions/RequestRegisterAction'


const CollectorRequestRegisterSearchForm = () => {
    const [FormData, setFormData] = useState(() => initialCollectorRRSearchFormState);
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
            ChangeCollectorRequestRegisterForm({...FormData})
        );
        dispatch(
            SearchCollectorRequestRegister({...FormData})
        );
    }

    const OnHandleRefresh = () => {
        setFormData(initialCollectorRRSearchFormState);
        dispatch(
            ClearCollectorRequestRegisterForm()
        );
        dispatch(
            SearchCollectorRequestRegister(initialCollectorRRSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialCollectorRRSearchFormState);
    }
    return (
        <Row className="mt-3">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <h6 className="heading-small text-muted mb-4">
                                Người Thu Gom
                            </h6>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
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
                                                name="phone"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                value={FormData.phone}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
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
                                                name="name"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                value={FormData.name}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Trạng Thái
                                            </label>
                                            <div className="alternative">
                                                <AvField type="select" 
                                                        name="status" 
                                                        className="form-control-alternative"
                                                        onChange={(e) => OnHandleChange(e.target)}
                                                        value={FormData.status}>
                                                            <option value={0}>----------</option>
                                                            {RenderComboBox(STATUS_REQUEST)}
                                                </AvField>
                                            </div>   
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

export default CollectorRequestRegisterSearchForm;
