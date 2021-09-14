import React from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import MapComponent from '../../Commons/MapComponent';
import ImageComponent from '../../Commons/ImageComponent';
import {GetDealerType} from '../../../../Infrastucture/helpers/CommonHelper';
import {useDispatch} from 'react-redux';
import {DEALER_MEMBER, ACTIVE_NUM, REJECT_NUM} from '../../../../Infrastucture/utils/constants/CommonConstants';
import {ShowConfirmDialog} from '../../../../Application/redux/actions/ModalAction';
import {ChangeRequestRegisterStatus} from '../../../../Application/redux/actions/RequestRegisterAction';

const CheckUndefine= (val) => {
    return val == 'undefined' ? '' : val;
}

const DealerRequestRegisterInfo = ({id, accountName, accountPhone, dealerName, dealerPhone, dealerAddress, dealerImageUrl, dealerLatitude ,dealerLongitude,  
                                    dealerType, dealerLeaderName, dealerLeaderId, managerLeaderId, managerName, managerPhone}) => {
    const dispatch = useDispatch();

    const OnChangeStatus = (status) => {
        const title = status == 2 ? `Xác Nhận Chấp Thuận Tài Khoản Vựa` : `Xác Nhận Từ Chối`;
        const statusMess = status == 2 ? `Chấp Thuận ` : `Từ Chối`;
        const message = statusMess + ` Tài Khoản ${accountName} Với Số ĐT ${accountPhone}`;
        dispatch(
            ShowConfirmDialog(title, message, ChangeRequestRegisterStatus(id, status)) 
        );
    }                                    

    return (
        <Container className="mt-3" fluid>
             <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Vựa Đăng Kí {id}
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>   
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Tên Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(dealerName)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Số Điện Thoại Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(dealerPhone)}
                                                disabled={true}
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label className="form-control-label">
                                                Địa Chỉ Vựa
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                defaultValue={CheckUndefine(dealerAddress)}
                                                disabled={true}
                                                type="textarea"
                                            />
                                        </FormGroup>
                                    </Col>                                   
                                </Row>
                                <Row>
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
                                        <DealerLeaderInfo managerName={CheckUndefine(managerName)} 
                                                          managerPhone={CheckUndefine(managerPhone)} 
                                                          dealerName={CheckUndefine(dealerLeaderName)}
                                                          dealerid={CheckUndefine(dealerLeaderId)}
                                                          managerId={CheckUndefine(managerLeaderId)}                                                         
                                                          />
                                        : null
                                    }
                                    
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
                                                <MapComponent lng={dealerLongitude} lat={dealerLatitude} width="36vw" height="300px"/>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" type="button" size="lg" block
                                                onClick={() => OnChangeStatus(ACTIVE_NUM)}>
                                            Chấp Thuận
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="danger" type="button" size="lg" block
                                                onClick={() => OnChangeStatus(REJECT_NUM)}>
                                            Từ Chối
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
             </Row>
        </Container>
    );
}

export default DealerRequestRegisterInfo;


const DealerLeaderInfo = ({dealerid, managerId, dealerName, managerName, managerPhone }) => {
    return (
        <>
            <Col lg="3">
                <FormGroup>
                    <label className="form-control-label">
                        Tên Vựa Chính
                    </label>
                    <div className="form-control-alternative disabled" style={style} onDoubleClick={() => alert(dealerid)}>
                        {dealerName}
                    </div>      
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <label className="form-control-label">
                        Tên Chủ Vựa Chính
                    </label>
                    <div className="form-control-alternative disabled" style={style} onDoubleClick={() => alert(managerId)}>
                        {managerName}
                    </div>
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <label className="form-control-label">
                        Số Điện Thoại Chủ Vựa Chính
                    </label>
                    <Input
                        className="form-control-alternative"
                        defaultValue={managerPhone}
                        disabled={true}
                        type="text"
                        onClick={() => alert('sadbsadk,a')}
                    />
                </FormGroup>
            </Col>
        </>
    );
}

const style = {
    paddingLeft:10, 
    paddingTop: 10, 
    paddingBottom: 10, 
    borderRadius: 5, 
    backgroundColor: "#EA8086", 
    cursor: 'pointer',
    color: '#E80D12',
    fontWeight: 'bold'
}