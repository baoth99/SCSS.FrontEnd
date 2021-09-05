import React, {useEffect} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button, Form} from "reactstrap";
import {useParams} from "react-router-dom";
import Gender from '../../components/Commons/Gender';
import UserStatus from '../../components/Users/UserStatus';
import {useDispatch, useSelector} from 'react-redux'
import {GetCollectorRequestRegister} from '../../../Application/redux/actions/RequestRegisterAction';

const CheckUndefine= (val) => {
    return val == 'undefined' ? '' : val;
}

const CollectorRequestRegisterDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let dataCollector = useSelector(state => state.DataCollectorRegisterRequest);

    //const {name, address, gender, birthDate, idCard, phone, registerTime, status } = dataCollector;

    const collectorRRState = {
        name: dataCollector.name,
        address: dataCollector.address,
        gender: dataCollector.gender,
        birthDate: dataCollector.birthDate,
        idCard: dataCollector.idCard,
        phone: dataCollector.phone,
        registerTime: dataCollector.registerTime,
        status: dataCollector.status
    }


    useEffect(() => {
        dispatch(GetCollectorRequestRegister(id));
    }, []);

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Form>
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Vựa Yêu Cầu Đăng Kí
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
                                                Số điện thoại người thu gom đăng kí 
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                value={CheckUndefine(collectorRRState.phone)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Họ Tên Người Thu Gom
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                value={CheckUndefine(collectorRRState.name)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Ngày Sinh
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                value={CheckUndefine(collectorRRState.birthDate)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Trạng Thái
                                            </label>
                                            <UserStatus status={CheckUndefine(collectorRRState.status)}/>      
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
                                                    <Gender gender={CheckUndefine(collectorRRState.gender)}/>
                                                </div>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Địa chỉ
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                style={{height: 100}}
                                                value={CheckUndefine(collectorRRState.address)}
                                                disabled={true}
                                                type="textarea"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Số Chứng Minh Nhân Dân
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                value={CheckUndefine(collectorRRState.idCard)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Thời Điểm Đăng Kí
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                value={CheckUndefine(collectorRRState.registerTime)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                        type="button" size="lg" block>
                                            Chấp Thuận
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="danger" 
                                        type="button" size="lg" block>
                                            Từ Chối
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                    </Form>
                </div>
            </Row>
        </Container>
    );
}

export default CollectorRequestRegisterDetail;
