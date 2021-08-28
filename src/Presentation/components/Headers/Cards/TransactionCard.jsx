import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const TransactionCard = () => {
    return (
        <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                    <Row>
                        <div className="col">
                            <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                                >
                                Tổng Giao Dịch Trong Ngày
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-money-check-alt"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                </CardBody>
            </Card>
        </Col>
    );
}

export default TransactionCard;
