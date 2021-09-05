import React from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {useParams} from "react-router-dom";

const DealerRequestRegisterDetail = () => {
    let { id } = useParams();
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Vựa Yêu Cầu Đăng Kí {id}
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default DealerRequestRegisterDetail;
