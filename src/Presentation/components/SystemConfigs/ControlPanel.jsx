import React, {useState, useEffect, useCallback} from 'react';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { BsTools } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import {useDispatch, useSelector} from 'react-redux';
import {GetSysConfigInfo, ModifySysConfig} from '../../../Application/redux/actions/SysConfigAction'
import {ConfigIsUsing} from '../../../Infrastucture/utils/variables/InitialStateData';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';

const Controlpanel = () => {
    const dispatch = useDispatch();
    const sysConfigData = useSelector(state => state.SysConfig);
    const {configIsUsing} = sysConfigData;

    const [ControlPanelState, setControlPanelState] = useState({...ConfigIsUsing})

    useEffect(() => {
        function SetSysConfig() {
            setControlPanelState(configIsUsing);
        }
        SetSysConfig();
    }, [configIsUsing])

    const OnRefresh = useCallback(
        () => {
            dispatch(
                GetSysConfigInfo()
            );
            setControlPanelState(sysConfigData);
        },
        [sysConfigData],
    )

    const ApplyConfig = () => {
        const title = "Thay đổi cấu hình hệ thống";
        const message = "Bạn có chắc chắn sẽ thay đổi cấu hình hệ thống"
        dispatch(
            ShowConfirmDialog(title, message,  ModifySysConfig(ControlPanelState)) 
        )
    }

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setControlPanelState({
            ...ControlPanelState,
            [name]: evt.value
        })
    }


    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <AvForm>
                    <Card className="shadow">
                        <CardHeader>
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Cài Đặt</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-3">
                                <Row>
                                    <Col lg="6">
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Thời gian tối đa người bán được hủy trước khi đến lịch hẹn thu gom
                                                    <br/>
                                                    (Người bán)
                                                </label>
                                                <Row>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="cancelTimeRange"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.cancelTimeRange}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (phút)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Khoảng thời gian tối thiểu có thể đặt lịch hẹn
                                                    <br/>
                                                    * tính từ thời điểm tạo yêu cầu
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="timeRangeRequestNow"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.timeRangeRequestNow}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (phút)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Số lượng yêu cầu thu gom của người bán tối đa trong ngày
                                                    <br/>
                                                    (Đơn chưa được người thu gom xác nhận)
                                                </label>
                                                <Row>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="requestQuantity"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.requestQuantity}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="5">
                                                        <label className="form-control-label" >
                                                            (yêu cầu thu gom)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Số ngày tối đa có thể tạo yêu cầu thu gom
                                                    <br/>
                                                    (Tính từ thời điểm tạo yêu cầu)
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="maxNumberOfRequestDays"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.maxNumberOfRequestDays}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (ngày)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Khoảng cách để người thu gom có thể nhận được thông báo 
                                                    <br/>
                                                    khi có yêu cầu đến ngay
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="nearestDistance"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.nearestDistance}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (mét)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Khoảng cách để người thu gom có thể nhận được thông báo 
                                                    <br/>
                                                    khi có yêu cầu hẹn
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="nearestDistanceOfAppointment"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.nearestDistanceOfAppointment}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (mét)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                    </Col>
                                    <Col lg="6">
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Số lượng yêu cầu thu gom tối đa được xác nhận trong một thời điểm
                                                    <br/>
                                                    (Người thu gom)
                                                </label>
                                                <Row>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="receiveQuantity"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.receiveQuantity}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="5">
                                                        <label className="form-control-label" >
                                                            (yêu cầu thu gom)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Số ngày tối đa có thể phản hồi sau khi giao dịch
                                                    <br/>
                                                    (Tính từ thời điểm giao dịch)
                                                </label>
                                                <Row>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="feedbackDeadline"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.feedbackDeadline}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="5">
                                                        <label className="form-control-label" >
                                                            (ngày)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Khoảng thời gian hoạt động
                                                    <br/>
                                                    (* trong ngày)
                                                </label>
                                                <Row>
                                                    <Col lg="1">
                                                        <label className="form-control-label" >
                                                            Từ
                                                        </label>
                                                    </Col>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            type="time"
                                                            name="operatingTimeFrom"
                                                            value={ControlPanelState.operatingTimeFrom}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="1">
                                                        <label className="form-control-label" >
                                                            Đến
                                                        </label>
                                                    </Col>
                                                    <Col lg="5">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            type="time"
                                                            name="operatingTimeTo"
                                                            value={ControlPanelState.operatingTimeTo}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Bán kính hoạt động tối đa của người thu gom
                                                    <br/>
                                                    có thể thấy đơn
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="availableRadius"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.availableRadius}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (mét)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                        <Row>
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Rating tối đa được ưu tiên 
                                                    <br/>
                                                    có thể thấy đơn
                                                </label>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvInput
                                                            className="form-control-alternative"
                                                            name="priorityRating"
                                                            type="number"
                                                            min="1"
                                                            value={ControlPanelState.priorityRating}
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                        />
                                                    </Col>
                                                    <Col lg="2">
                                                        <label className="form-control-label" >
                                                            (sao)
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </AvGroup>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-3">
                                <Row>
                                    <Col lg="8"></Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                    type="button" size="lg" 
                                                    onClick={OnRefresh}>
                                                <BiAnalyse/>
                                                &nbsp;
                                                Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="2">
                                        <Button className="my-4" color="primary" 
                                                    type="button" size="lg" 
                                                    onClick={() => ApplyConfig()}>
                                                <BsTools/>
                                                &nbsp;
                                                Lưu Thay Đổi
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

export default Controlpanel;
