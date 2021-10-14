import React from 'react';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import CPCollectDealFee from './CPCollectDealFee';
import CPSellCollectFee from './CPSellCollectFee';

const Controlpanelfee = () => {
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <Col lg="6">
                    <CPSellCollectFee/>
                </Col>
                <Col lg="6">
                    <CPCollectDealFee/>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Controlpanelfee;
