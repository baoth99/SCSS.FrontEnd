import React, {useState} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button } from "reactstrap";
import Role from '../Commons/Role';
import { useHistory } from 'react-router-dom';

const DealerAccountInformation = ({accountId, accountName, accountPhone, accountRole}) => {
    const [IsDisable] = useState(true);
    const history = useHistory();

    const GoToUserDetail = (path) => {
        history.push(path);
    }

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="9">
                                    <h3 className="mb-0">
                                       Thông Tin Chủ/Quản Lí Vựa
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Tên Chủ/Quản Lí
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="name"
                                                defaultValue={accountName}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Số ĐT Chủ/Quản Lí
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="name"
                                                defaultValue={accountPhone}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Vai Trờ
                                            </label>
                                            <div className="form-control-alternative disabled"
                                                    style={{paddingLeft:10, paddingTop: 10, paddingBottom: 10, borderRadius: 5, backgroundColor: "#eee"}}>
                                                <Role role={accountRole}/>
                                            </div> 
                                            
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <Button className="my-4" color="info" 
                                                type="button" size="lg"
                                                onClick={() => GoToUserDetail("/admin/users/" + accountId)}>
                                                    Xem Thông Tin Chi Tiết
                                            </Button>                                             
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default DealerAccountInformation;
