import React from 'react';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col} from "reactstrap";
import {useSelector} from 'react-redux';

const ShowHistories = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <li key={index}> {val.cancelTimeRange} | {val.timeRangeRequestNow} | {val.requestQuantity} | {val.maxNumberOfRequestDays} |
                                 {val.receiveQuantity} | {val.feedbackDeadline} | {val.operatingTimeFrom} - {val.operatingTimeTo} |
                                 {val.deActiveTime}
                </li>
            )
        });
    }
    return result;
}

const Confighistory = () => {
    const sysConfigData = useSelector(state => state.SysConfig);
    const {histories} = sysConfigData;

    return (
        <Container className="mt-3" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardHeader>
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Lịch Sử Cài Đặt</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <ul>
                                {ShowHistories(histories)}
                            </ul>
                        </CardBody>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default Confighistory;
