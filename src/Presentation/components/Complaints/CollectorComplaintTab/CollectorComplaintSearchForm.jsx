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
import {initialCollectorComplaintSearchFormState} from '../../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeCollectorComplaintSearchForm, ClearCollectorComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {SearchCollectorComplaint} from '../../../../Application/redux/actions/ComplaintAction';
import {useDispatch} from 'react-redux';


const CollectorComplaintSearchForm = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(() => initialCollectorComplaintSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeCollectorComplaintSearchForm({
                ...FormData
            })
        );
        dispatch(
            SearchCollectorComplaint({
                ...FormData
            })
        )
        
    }

    const OnHandleRefresh = () => {
        setFormData(initialCollectorComplaintSearchFormState);
        dispatch(
            ClearCollectorComplaintSearchForm()
        )
        dispatch(
            SearchCollectorComplaint(initialCollectorComplaintSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialCollectorComplaintSearchFormState);
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
                                                SDT Người Thu Gom
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
                                    <Col lg="3">
                                        <AvGroup>
                                            <label className="form-control-label">
                                                Tên Người Thu Gom
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

export default CollectorComplaintSearchForm;
