import React, {useState, useEffect, useCallback} from 'react';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Button } from "reactstrap";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {useDispatch, useSelector} from 'react-redux';
import {AwardPointUsing} from '../../../Infrastucture/utils/variables/InitialStateData';
import {GetCollectorAwardPoint, ModifyCollectorAwardPoint} from '../../../Application/redux/actions/TransactionServiceAction';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';

const ShowAwardPointHistories = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <li key={index}>Số Tiền Áp Dụng: {val.appliedAmount} | Điểm: {val.amount} | Thời Điểm Dừng: {val.deActiveTime}</li>
            )
        });
    }
    return result;
}


const CPcollectdealawardpoint = () => {
    const dispatch = useDispatch();
    const collectDealAwardPoint = useSelector(state => state.CollectorAwardPoint);

    const {awardPointUsing, histories} = collectDealAwardPoint;
    const [AwardPoint, setAwardPoint] = useState(AwardPointUsing);

    useEffect(() => {
        function SetAwardPointData() {
            setAwardPoint(awardPointUsing);
        }
        SetAwardPointData();
    }, [awardPointUsing])

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setAwardPoint({
            ...AwardPoint,
            [name]: evt.value
        })
    }

    const OnRefresh = useCallback(
        () => {
            dispatch(
                GetCollectorAwardPoint()
            );
            setAwardPoint(collectDealAwardPoint);
        },
        [collectDealAwardPoint],
    )

    const OnApply = () => {
        const title = "Thay đổi điểm thưởng cho người thu gom";
        const message = "Bạn có chắc chắn sẽ thay đổi điểm thưởng cho người thu gom";
        dispatch(
            ShowConfirmDialog(title, message,  ModifyCollectorAwardPoint(AwardPoint)) 
        )
    }

   
    return (
        <Container className="mt-5" fluid>
             <Row className="mt-5">
                <div className="col">
                    <AvForm>
                        <Card className="shadow">
                            <CardHeader>
                                <Row className="align-items-center">
                                    <Col lg="9">
                                        <h3 className="mb-0">Điểm Thưởng Người Thu Mua</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-3">
                                    <Row>
                                        <Col lg="4">
                                            <Row>
                                                <label className="form-control-label">
                                                    Số Tiền Được Áp Dụng
                                                </label>
                                                <Row>
                                                    <Col lg="9">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="appliedAmount"
                                                            type="number"
                                                            min="0"
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                            value={AwardPoint.appliedAmount}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (VND)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </Row>
                                            <AvGroup></AvGroup>
                                            <Row>
                                                <label className="form-control-label">
                                                   Số Điểm Được Thưởng
                                                </label>
                                                <Row>
                                                    <Col lg="9">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="amount"
                                                            type="number"
                                                            min="0"
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                            value={AwardPoint.amount}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (Điểm)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Col>
                                        <Col lg="8" style={{borderStyle: 'ridge'}}>
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Lịch Sử
                                                </label>
                                            </AvGroup>
                                            <ul style={{height: "100px", overflow: "scroll"}}>
                                                {ShowAwardPointHistories(histories)}
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="pl-2">
                                    <Row>
                                        <Col lg="2">
                                            <Button className="my-4" color="primary" 
                                                    type="button" size="lg" block
                                                    onClick={() => OnApply()}>
                                                Áp Dụng
                                            </Button>
                                        </Col>
                                        <Col lg="2">
                                            <Button className="my-4" color="primary" 
                                                    type="button" size="lg" block
                                                    onClick={OnRefresh}>
                                                Làm Mới
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </AvForm>
                </div>
             </Row>
        </Container>
    );
}

export default CPcollectdealawardpoint;
