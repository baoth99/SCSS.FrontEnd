import React, {useState} from 'react';

import {
    Card,
    CardBody,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
  } from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ComboBox from '../Commons/ComboBox';

import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";

const UserForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Row className="mt-5">
            <div className="col">
                <Card className="shadow">
                    <CardBody>
                        <Form>
                        <h6 className="heading-small text-muted mb-4">
                            User
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Tài Khoản
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Họ và Tên
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Địa Chỉ Email
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Điện Thoại
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Địa Chỉ
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col> 
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Sinh Nhật
                                        </label>
                                        <div className="alternative">
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                className="form-control"
                                                selected={startDate}
                                                isClearable
                                                placeholderText="Please choose datetime !"
                                                onChange={(date) => setStartDate(date)}
                                                />
                                        </div>
                                        
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Chứng Minh Nhân Dân
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            id="input-username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Giới Tính
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list='asb' leftRight={60} topBottom={10}/>
                                        </div>   
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Quyền
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list='asb' leftRight={60} topBottom={10}/>
                                        </div>   
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Trạng Thái
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list='asb' leftRight={60} topBottom={10}/>
                                        </div>   
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        </Form>
                    </CardBody>
                </Card>
                <Card className="shadow">
                    <CardBody>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" type="button" size="lg" block>
                                        <BsSearch/>
                                        &nbsp;
                                        Tìm Kiếm
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" type="button" size="lg" block>
                                        <BsArrowClockwise/>
                                        &nbsp;
                                        Làm Mới
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" type="button" size="lg" block>
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

export default UserForm;
