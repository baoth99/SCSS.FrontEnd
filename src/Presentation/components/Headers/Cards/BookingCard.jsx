import React, {useState} from 'react';
import { Card, CardBody, CardTitle, Row, Col, Tooltip, PopoverBody  } from "reactstrap";

const BookingCard = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);


    return (
        <Col lg="6" xl="3">
            <Tooltip placement="top" isOpen={tooltipOpen} style={{backgroundColor: '#ffffff'}} target="TooltipExample" toggle={toggle}>
                <PopoverBody style={{textAlign: 'left'}}>
                    Đang Đợi: 15
                    <br/>
                    Hoàn Thành: 3
                    <br/>
                    Hủy: 3
                </PopoverBody>
            </Tooltip>
            <Card className="card-stats mb-4 mb-xl-0" id="TooltipExample">
                <CardBody>
                <Row>
                    <div className="col">
                    <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                    >
                        Số Lịch Được Đặt Trong Ngày
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">"sdbfdksfvhuerfncufksdx"</span>
                    </div>
                    <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i className="fas fa-chart-pie" />
                    </div>
                    </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2">
                    <i className="fas fa-arrow-down" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last week</span>
                </p>
                </CardBody>
            </Card>           
        </Col>
    );
}

export default BookingCard;
