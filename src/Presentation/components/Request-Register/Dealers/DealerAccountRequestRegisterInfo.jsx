import React from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter} from "reactstrap";
import UserStatus from '../../Users/UserStatus';
import Gender from '../../Commons/Gender';

const CheckUndefine= (val) => {
    return val == 'undefined' ? '' : val;
}

const DealerAccountRequestRegisterInfo = ({accountPhone, accountName, accountAddress, accountStatus, birthDate, idCard, gender}) => {
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Người Đăng Kí
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Số Điện Thoại Đăng Kí Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(accountPhone)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Tên Người Quản Lí Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(accountName)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Ngày Sinh
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(birthDate)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Địa Chỉ Người Quản Lí
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(accountAddress)}
                                                disabled={true}
                                                type="textarea"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Số CMND
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(idCard)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Giới Tính
                                            </label>
                                            <div className="form-control-alternative disabled"
                                                    style={{paddingLeft:10, paddingTop: 10, paddingBottom: 10, borderRadius: 5, backgroundColor: "#eee"}}
                                                >
                                                <Gender gender={CheckUndefine(gender)}/>
                                            </div>      
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Trạng Thái
                                            </label>
                                            <UserStatus status={CheckUndefine(accountStatus)}/>      
                                        </FormGroup>
                                    </Col>                                  
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default DealerAccountRequestRegisterInfo;
