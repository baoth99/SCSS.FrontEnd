import React, {useState, useRef} from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Col,
    Row,
    Button
  } from "reactstrap";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';

import {useDispatch} from 'react-redux';
import {RequestCollectorRegisterOTP, ConfirmCollectorRegisterOTP} from '../../../Application/redux/actions/RegisterAction';

const OtpState = {
    phone: "",
    isDisable: true
}

const ConfirmOtpState = {
    otp: "",
    phone: "",
    isDisableButton: true,
    isDisableInput: true
}

const CollectorRegisterOTPForm = () => {
    const dispatch = useDispatch();

    const [Phone, setPhone] = useState(() => OtpState);

    const [ConfirmOtp, setConfirmOtp] = useState(() => ConfirmOtpState);

    const OnSendOTP = () => {
        dispatch(
            RequestCollectorRegisterOTP(Phone.phone)
        );
        setConfirmOtp({
            ...ConfirmOtp,
            phone: Phone.phone,
            isDisableInput: false
        });

        
    }

    const OnHandleOTPChange = (val) => {
        if (val != '') {
            setConfirmOtp({
                ...ConfirmOtp,
                phone: Phone.phone,
                isDisableButton: false,
                otp: val
            })
        }
        else {
            setConfirmOtp({
                ...ConfirmOtp,
                phone: Phone.phone,
                isDisableButton: true,
                otp: val
            })
        }
    }

    const OnHandlePhoneChange = (val) => {
        if (val != '') {
            setPhone({
                ...Phone,
                phone: val,
                isDisable: false
            });
        }
        else {
            setPhone({
                ...Phone,
                phone: val,
                isDisable: true
            });
        }
    }

    const OnConfirmOTP = () => {
        dispatch(
            ConfirmCollectorRegisterOTP(ConfirmOtp.phone, ConfirmOtp.otp)
        );
        console.log('dsfsdfdsfs');
        
    }

    return (
        <Row className="mt-3">
            <Col lg="12">
                <Card className="bg-secondary shadow">
                    <CardBody>
                        <AvForm>
                            <Row>
                                <Col lg="5">
                                    <AvGroup>
                                        <label className="form-control-label">
                                            SDT Đăng Kí 
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="number"
                                            name="phone"
                                            value={Phone.phone}
                                            onChange={(e) => OnHandlePhoneChange(e.target.value)}
                                        />
                                        <button type="button" className="btn btn-outline-primary btn-sm mt-1"
                                                disabled={Phone.isDisable}
                                                onClick={() => OnSendOTP()}>
                                            Gửi OTP
                                        </button>
                                    </AvGroup>
                                </Col>
                                <Col lg="4">
                                    <AvGroup>
                                        <label className="form-control-label">
                                            Nhập Mã OTP
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            type="text"
                                            name="otp"
                                            disabled={ConfirmOtp.isDisableInput}
                                            onChange={(e) => OnHandleOTPChange(e.target.value)}

                                        />
                                    </AvGroup>
                                </Col>
                                <Col lg="3">
                                    <AvGroup>
                                        <button type="button" className="btn btn-primary mt-4"
                                                disabled={ConfirmOtp.isDisableButton}
                                                onClick={() => OnConfirmOTP()}>
                                            Xác Thực
                                        </button>
                                    </AvGroup>
                                </Col>
                            </Row>
                        </AvForm>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default CollectorRegisterOTPForm;
