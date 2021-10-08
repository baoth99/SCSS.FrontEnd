import React, {useState} from 'react';
import {Card, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import {BOOKING_STATUS} from '../../../Infrastucture/utils/constants/CommonConstants';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {initialBookingSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeBookingSearchForm, ClearBookingSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchBooking} from '../../../Application/redux/actions/BookingAction'
import {useDispatch} from 'react-redux';

const BookingSearchForm = () => {

    const dispatch = useDispatch();

    const [FormData, setFormData] = useState(() => initialBookingSearchFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const OnHandleSearch = () => {
        dispatch(
            ChangeBookingSearchForm({
                ...FormData
            })
        )
        dispatch(
            SearchBooking({
                ...FormData
            })
        );
    }

    const OnHandleRefresh = () => {
        setFormData(initialBookingSearchFormState);
        dispatch(
            ClearBookingSearchForm()
        )
        dispatch(
            SearchBooking(initialBookingSearchFormState)
        );
    }

    const OnHandleClearForm = () => {
        setFormData(initialBookingSearchFormState);
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Mã Đặt Lịch
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="collectingRequestCode"
                                                value={FormData.collectingRequestCode}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Người Đặt
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="requestedBy"
                                                value={FormData.requestedBy}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Người Nhận
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="text"
                                                name="receivedBy"
                                                value={FormData.receivedBy}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tình Trạng
                                            </label>
                                            <div className="alternative">
                                                <AvField type="select" 
                                                        name="status" 
                                                        className="form-control-alternative"
                                                        value={FormData.status}
                                                        onChange={(e) => OnHandleChange(e.target)}
                                                        >
                                                    <option value={0}>----------</option>
                                                    {RenderComboBox(BOOKING_STATUS)}
                                                </AvField>
                                            </div> 
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Từ Ngày
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="date"
                                                name="fromDate"
                                                value={FormData.fromDate}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>  
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Đến Ngày
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                type="date"
                                                name="toDate"
                                                value={FormData.toDate}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </AvGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={() => OnHandleSearch()}
                                                block>
                                            <BsSearch/>
                                            &nbsp;
                                            Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" type="button" size="lg" block
                                                onClick={() => OnHandleRefresh()}>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={() => OnHandleClearForm()}
                                                block>
                                            <BsXCircle/>
                                            &nbsp;
                                            Xóa
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                </AvForm>
            </div>
        </Row>
    );
}

export default BookingSearchForm;
