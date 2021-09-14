import React, {useState} from 'react';

import {Card, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';

import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {useDispatch} from 'react-redux';
import {ChangeSCSearchForm, ClearSCSearchForm} from '../../../Application/redux/actions/FormAction';
import {initialSCSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {SearchSC} from '../../../Application/redux/actions/SCAction';
import {ScrapCategoryStatus, SCRAP_CATEGORY_ROLE} from '../../../Infrastucture/utils/constants/CommonConstants';

const SCSearchForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(() => initialSCSearchFormState)



    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...formData,
            [name]: evt.value
        })
    }

    const SearchData = () => {
        dispatch(
            ChangeSCSearchForm({
                ...formData
            })
        );
        dispatch(
            SearchSC({...formData})
        )
        //console.log(formData);      
    };

    const Refresh = () => {
        setFormData(initialSCSearchFormState)
        dispatch(
            ClearSCSearchForm()
        );
        dispatch(
            SearchSC({...initialSCSearchFormState})
        )
    }

    const ClearForm = () => {
        setFormData(initialSCSearchFormState);
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
                                                <label className="form-control-label" >
                                                    Tên Loại Phế Liệu
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
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
                                                    Người Tạo
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    name="createdBy"
                                                    type="text"
                                                    value={formData.createdBy}
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
                                                    Số Điện Thoại Người Tạo
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    name="phoneCreatedBy"
                                                    type="number"
                                                    value={formData.phoneCreatedBy}
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
                                                    Trạng Thái
                                                </label>
                                                <div className="alternative">
                                                    <AvField type="select" 
                                                            name="status" 
                                                            className="form-control-alternative"
                                                            value={formData.status}
                                                            onChange={(e) => OnHandleChange(e.target)}>
                                                                <option value={0}>----------</option>
                                                                {RenderComboBox(ScrapCategoryStatus)}
                                                    </AvField>
                                                </div>   
                                            </AvGroup>
                                        </Col>
                                        <Col lg="3">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Vai Trò
                                                </label>
                                                <div className="alternative">
                                                    <AvField type="select" 
                                                            name="role" 
                                                            className="form-control-alternative"
                                                            value={formData.role}
                                                            onChange={(e) => OnHandleChange(e.target)}>
                                                                <option value={0}>----------</option>
                                                                {RenderComboBox(SCRAP_CATEGORY_ROLE)}
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

export default SCSearchForm;
