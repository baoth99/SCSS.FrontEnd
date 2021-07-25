import React, {useState} from 'react';


import {Card, CardBody, Row, Col, Button} from "reactstrap";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {initialUnitSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {useDispatch} from 'react-redux';
import {ChangeUnitSearchForm, ClearUnitSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchUnit} from '../../../Application/redux/actions/UnitAction';

const UnitSearchForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(() => initialUnitSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...formData,
            [name]: evt.value
        })
    }
    const SearchData = () => {
        dispatch(
            ChangeUnitSearchForm({...formData})
        )
        dispatch(
            SearchUnit({...formData})
        )
    }

    const Refresh = () => {
        setFormData(initialUnitSearchFormState);
        dispatch(
            ClearUnitSearchForm()
        )
        dispatch(
            SearchUnit(initialUnitSearchFormState)
        )
    }

    const ClearForm = () => {
        setFormData(initialUnitSearchFormState);
    }

    return (
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                                >
                                                Tên Đơn Vị
                                            </label>
                                            <AvInput
                                                    className="form-control-alternative"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                    type="text"
                                                />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                                >
                                                Người Tạo
                                            </label>
                                            <AvInput
                                                    className="form-control-alternative"
                                                    name="createdBy"
                                                    value={formData.createdBy}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                    type="text"
                                                />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4"></Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg"
                                                onClick={() => SearchData()}
                                                block>
                                            <BsSearch/>
                                            &nbsp;
                                            Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" type="button" size="lg"
                                                onClick={() => Refresh()}
                                                 block>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="2">
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
                        </CardBody>
                    </Card>
                </AvForm>
    );
}

export default UnitSearchForm;
