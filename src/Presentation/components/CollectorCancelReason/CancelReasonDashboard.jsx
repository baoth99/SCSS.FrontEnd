import React from 'react';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Button } from "reactstrap";
import CancelReasonList from './CancelReasonList';
import CancelReasonForm from './CancelReasonForm';
const CancelReasonDashboard = () => {
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardHeader>
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Quản lí lý do hủy</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-3">
                                <Row>
                                    <Col lg="6">
                                        <CancelReasonList/>
                                    </Col>
                                    <Col lg="6">
                                        <CancelReasonForm/>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default CancelReasonDashboard;
