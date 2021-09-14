import React, {useState} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button } from "reactstrap";
import {GetDealerType} from '../../../Infrastucture/helpers/CommonHelper';
import ImageComponent from '../../components/Commons/ImageComponent';
import MapComponent from '../../components/Commons/MapComponent';
import {DEALER_MEMBER} from '../../../Infrastucture/utils/constants/CommonConstants'
const CheckUndefine= (val) => {
    return val == 'undefined' ? '' : val;
}

const DealerInformationDetail = ({dealerId, dealerName, dealerPhone, dealerAddress, dealerLatitude, 
                                    dealerLongtitude, dealerOpenTime, dealerCloseTime, dealerCreatedTime, dealerImageUrl,
                                    dealerIsActive, dealerIsSubcribed, dealerType, accountLeaderId, dealerLeaderId}) => {
    const [IsDisable] = useState(true);

    return (
        <Container className="mt-5" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Vựa
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Tên Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="name"
                                                defaultValue={dealerName}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Số Điện Thoại Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="name"
                                                defaultValue={dealerPhone}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Địa Chỉ Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="name"
                                                defaultValue={dealerAddress}
                                                disabled={IsDisable}
                                                type="textarea"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Ngày Tạo
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={dealerCreatedTime}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Loại Vựa 
                                            </label>
                                            <div className="form-control-alternative disabled"
                                                    style={{paddingLeft:10, paddingTop: 10, paddingBottom: 10, borderRadius: 5, backgroundColor: "#eee"}}>
                                                {GetDealerType(dealerType)}
                                            </div>    
                                        </FormGroup>
                                    </Col>
                                    {CheckUndefine(dealerType) === DEALER_MEMBER ?
                                            <DealerLeaderInfo accountLeaderId={accountLeaderId} dealerLeaderId={dealerLeaderId} /> 
                                            : null}
                                </Row>
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Giờ Mở Cửa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={dealerOpenTime}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Giờ Đóng Cửa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={dealerCloseTime}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                IsSubcribed
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={dealerIsSubcribed ? "Correct" : "InCorrect"}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label  className="form-control-label">
                                                Dealer Is Active
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={dealerIsActive ? "Correct" : "InCorrect"}
                                                disabled={IsDisable}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Hình Ảnh
                                            </label>
                                            <div className="form-control-alternative mt-1">
                                                <ImageComponent style={{width: '100%', height: '300px'}} className="rounded"
                                                                image={dealerImageUrl}/>
                                            </div>                                          
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label className="form-control-label">
                                               Vị trí
                                            </label>
                                            <div className="form-control-alternative mt-1">
                                                <MapComponent lng={""} lat={""} width="36vw" height="300px"/>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default DealerInformationDetail;


const DealerLeaderInfo = ({accountLeaderId, dealerLeaderId}) => {
    const GoToLeaderDetail = (path) => {
        alert(path);
    }
    return (
        <>
            <Col lg="3">
                <FormGroup>
                    <Button className="my-4" color="info" 
                        type="button" size="lg"
                        onClick={() => GoToLeaderDetail("/admin/users/" + accountLeaderId)}>
                            Thông Tin Chi Tiết Chủ Vựa
                    </Button>
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <Button className="my-4" color="info" 
                        type="button" size="lg"
                        onClick={() => GoToLeaderDetail("/admin/dealers/" + dealerLeaderId)}>
                            Thông Tin Chi Tiết Vựa 
                    </Button>
                </FormGroup>
            </Col>
        </>
    )
}