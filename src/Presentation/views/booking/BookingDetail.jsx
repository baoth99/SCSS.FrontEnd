import React, {useEffect} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {GetBookingDetail} from '../../../Application/redux/actions/BookingAction';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import BookingStatus from '../../components/Booking/BookingStatus';
import { BsArrowClockwise } from "react-icons/bs";
import BookingStatusDetail from '../../components/Booking/BookingStatusDetail';
import BookingRejectedList from '../../components/Booking/BookingRejectedList';


const SeedData = [
    {
        info: "Trần Hoài Bảo - 0939872902",
        content: "Bố mày đéo thích nhận được không lào ????"
    },
    {
        info: "Trần Đức Tiến - 0939872902",
        content: "Bố mày đéo thích nhận được không lào ????"
    },
    {
        info: "Trần Đức Bo - 0939872902",
        content: "Bố mày đéo thích nhận được không lào ????"
    },
    {
        info: "Trần Hoài Bảo - 0939872902",
        content: "Bố mày đéo thích nhận được không lào ????"
    },
    {
        info: "Trần Hoài Bảo - 0939872902",
        content: "Bố mày đéo thích nhận được không lào ????"
    }
]

const BookingDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const dataBooking = useSelector(state => state.DataBooking);
    
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
                                            <h4 className="mb-0">BC1707202111230003</h4>
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
                                                Trần Văn A - 0932678943
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
                                                Lê Thị B - 0934567893
                                            </h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Loại Phế Liệu Muốn Bán :                                                  
                                                </label>
                                                <h4>
                                                    Nặng, sắt 
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
                                            <h4 className="mb-0">21/07/2021</h4>
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
                                                12:30 - 16:50
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
                                                <BookingStatus status={2}/>
                                            </div>
                                        </FormGroup>                                        
                                    </Col>
                                    <Col lg="3">
                                        <BookingStatusDetail status={2} content={{message: "Không Muốn Đặt Nữa" , id: "djbasdj,ksad"}}/>                                       
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
                                                    Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 
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
                                                        value={"N/A"}
                                                        type="textarea"
                                                    />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="4">

                                    </Col>
                                    <Col lg="8">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Người Từ Chối :                                                  
                                        </label>
                                        <BookingRejectedList rejectedList={SeedData}/>
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
