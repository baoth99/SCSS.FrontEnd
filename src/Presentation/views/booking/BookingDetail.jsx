import React, {useEffect} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {GetBookingDetail} from '../../../Application/redux/actions/BookingAction';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import BookingStatus from '../../components/Booking/BookingStatus';
import { BsArrowClockwise } from "react-icons/bs";
import BookingStatusDetail from '../../components/Booking/BookingStatusDetail';
import ImageComponent from '../../components/Commons/ImageComponent';

const BookingDetail = () => {
    const collectingRequestDetail = useSelector(state => state.BookingDetail);

    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetBookingDetail(id));
    }, []);


    const Refresh = () => {
        dispatch(GetBookingDetail(id));
    }

    return (
        <Container className="mt--7" fluid>
             <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Đặt Lịch
                                    </h3>
                                </Col>
                                <Col lg="3" style={{paddingLeft: "50px"}}>
                                    <Button type="button" color="warning" 
                                            style={{float: 'right'}}
                                            onClick={() => Refresh()} block>
                                        <BsArrowClockwise/>
                                        &nbsp;
                                        Làm Mới
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Mã Đặt Lịch : 
                                            </label>
                                            <h4 className="mb-0">{collectingRequestDetail.collectingRequestCode}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Người Đặt :
                                            </label>
                                            <h4 className="mb-0">
                                                {collectingRequestDetail.requestedBy}
                                            </h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Người Nhận : 
                                            </label>
                                            <h4 className="mb-0">
                                            {collectingRequestDetail.receivedBy}
                                            </h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Ngày Đặt Lịch : 
                                            </label>
                                            <h4 className="mb-0">{collectingRequestDetail.collectingRequestDate}</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Khoảng Thời Gian : 
                                            </label>
                                            <h4 className="mb-0">
                                               {collectingRequestDetail.collectingRequestRangeTime}
                                            </h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tình Trạng :
                                            </label>
                                            <div>
                                                <BookingStatus status={collectingRequestDetail.status}/>
                                            </div>
                                        </FormGroup>                                        
                                    </Col>
                                    <Col lg="3">
                                        <BookingStatusDetail status={collectingRequestDetail.status} content={{message: "" , id: ""}}/>                                       
                                    </Col>
                                    <Col lg="4">
                                        <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Loại Phế Liệu Muốn Bán :                                                  
                                                </label>
                                                <div className="form-control-alternative mt-1">
                                                        <ImageComponent style={{width: '100%', height: '300px'}} className="rounded"
                                                                        image={collectingRequestDetail.scrapImageUrl} isFromAPI={true}/>
                                                </div>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                        <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Địa chỉ :                                                   
                                                </label>
                                                <h4>
                                                    {collectingRequestDetail.address}
                                                </h4>
                                        </FormGroup>
                                    </Col>                                  
                                    <Col lg="4">
                                        <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Ghi Chú :                                                  
                                                </label>
                                                <Input
                                                        className="form-control-alternative"
                                                        disabled={true}
                                                        style={{height: '100px'}}
                                                        value={collectingRequestDetail.note}
                                                        type="textarea"
                                                    />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
             </Row>
        </Container>
    );
}

export default BookingDetail;
