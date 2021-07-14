import React, {useState} from 'react';

import {Card, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {RenderComboBox} from '../../helpers/CommonHelper';

import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux';
import {ChangeSCSearchForm, ClearSCSearchForm} from '../../redux/actions/FormAction';
import {initialSCSearchFormState} from '../../variables/InitialStateData';
import {SearchSC} from '../../redux/actions/SCAction';

const SeedData = [
    {
        key: 1,
        val: "Kg"
    },
    {
        key: 2,
        val :"Gam"
    },
    {
        key: 3,
        val :"Tấn"
    }
]


const SCSearchForm = () => {
    const dispatch = useDispatch();
    const unitList = useSelector(state => state.FetchUnit);

    const [formData, setFormData] = useState(() => initialSCSearchFormState)



    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...formData,
            [name]: evt.value
        })
    }

    const SearchData = () => {
        console.log(formData);
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
                                        <Col lg="4">
                                            <AvGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
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
                                                    Đơn vị
                                                </label>
                                                <div className="alternative">
                                                <AvField type="select" 
                                                        name="unit" 
                                                        className="form-control-alternative"
                                                        value={formData.unit}
                                                        onChange={(e) => OnHandleChange(e.target)}>
                                                            <option value=''>----------</option>
                                                            {RenderComboBox(unitList)}
                                                </AvField>
                                                </div>   
                                            </AvGroup>
                                        </Col>
                                        <Col lg="5">
                                            <AvGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Miêu Tả
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                    type="textarea"
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
