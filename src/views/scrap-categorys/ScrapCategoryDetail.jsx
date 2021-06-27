import React from 'react';
import {useParams} from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";

const ScrapCategoryDetail = () => {
    let { id } = useParams();
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
            <Card className="card-profile shadow">
                <h1>{id}</h1>
            </Card>           
            </Row>
        </Container>
    );
}

export default ScrapCategoryDetail;
