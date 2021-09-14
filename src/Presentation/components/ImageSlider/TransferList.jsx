import React from 'react';

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Row,
  } from "reactstrap";
import CreateImage from './CreateImage';
import ManageImage from './ManageImage'

const TransferList = () => {
    return (
        <Row className="mt-5">
             <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Dashboard</h3>
                            </Col>                          
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg="5">
                                <CreateImage/>                           
                            </Col>
                            <Col lg="7">
                                <ManageImage/>
                            </Col>                        
                        </Row>
                    </CardBody>
                </Card>
             </div>
        </Row>
    );
}

export default TransferList;
