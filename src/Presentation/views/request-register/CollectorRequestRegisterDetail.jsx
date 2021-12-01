import React, {useEffect, useState} from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button,  Form} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {useParams} from "react-router-dom";
import Gender from '../../components/Commons/Gender';
import UserStatus from '../../components/Users/UserStatus';
import {useDispatch, useSelector} from 'react-redux';
import {GetCollectorRequestRegister,ChangeRequestRegisterStatus, UpdateCollectorRegister} from '../../../Application/redux/actions/RequestRegisterAction';
import {ACTIVE_NUM, REJECT_NUM} from '../../../Infrastucture/utils/constants/CommonConstants'
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';
import {CollectorRequestRegisterDetailState} from '../../../Infrastucture/utils/variables/InitialStateData';
import ImageComponent from '../../components/Commons/ImageComponent';
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import {GENDER} from '../../../Infrastucture/utils/constants/CommonConstants';

const CheckUndefine= (val) => {
    return val == 'undefined' ? '' : val;
}

const ImageBase64State = {
    isFromAPI: true,
    image : ''
}

const CollectorRequestRegisterDetail = () => {
    let { id } = useParams();

    const [RequestRegisterFormState, setRequestRegisterFormState] = useState(() => CollectorRequestRegisterDetailState);

    const [ImgBase64, setImgBase64] = useState(() => ImageBase64State);

    const dispatch = useDispatch();

    let dataCollector = useSelector(state => state.DataCollectorRegisterRequest);

    const {name, address, gender, birthDate, idCard, phone, registerTime, status, imageUrl} = dataCollector

    useEffect(() => {
        dispatch(GetCollectorRequestRegister(id));
    }, []);

    useEffect(() => {
        function setComponentState() {
            setRequestRegisterFormState({
                ...RequestRegisterFormState,
                id: id,
                name: name,
                phone: phone,
                registerTime: registerTime,
                address: address,
                birthDate: birthDate,
                gender: gender,
                idCard: idCard,
            });
            setImgBase64({
                ...dataCollector,
                image: imageUrl
            });
        }
        setComponentState();
    }, [phone])

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setRequestRegisterFormState({
            ...RequestRegisterFormState,
            [name]: evt.value
        })
    }

    const OnHandleImage = (evt) => {
        let file = evt.files[0];

        let fileReader = new FileReader();

        fileReader.onload = function(fileLoaderEvent) {
            var srcData = fileLoaderEvent.target.result;
            setImgBase64({
                ...ImgBase64,
                image: srcData,
                isFromAPI: false
            });
        }
        fileReader.readAsDataURL(file);

        setRequestRegisterFormState({
            ...RequestRegisterFormState,
            imageFile : file
        });
    }

    const UpdateInfo = () => {
        const title = "Cập nhật thông tin người thu gom";
        const message = "Cập nhật thông tin người thu gom trước khi phê duyệt tài khoản";
        let collectorRegisterRequest = {
            id: RequestRegisterFormState.id,
            name: RequestRegisterFormState.name,
            gender: RequestRegisterFormState.gender,
            address: RequestRegisterFormState.address,
            birthDate: RequestRegisterFormState.birthDate,
            idCard: RequestRegisterFormState.idCard,
            imageFile: RequestRegisterFormState.imageFile
        }
        dispatch(ShowConfirmDialog(title, message, UpdateCollectorRegister(collectorRegisterRequest)));
    }

    const OnChangeStatus = (status) => {
        const title = status == 2 ? `Xác Nhận Chấp Thuận Tài Khoản` : `Xác Nhận Từ Chối`;
        const statusMess = status == 2 ? `Chấp Thuận ` : `Từ Chối`;
        const message = statusMess + ` Tài Khoản ${dataCollector.name} Với Số ĐT ${dataCollector.phone}`;
        dispatch(
            ShowConfirmDialog(title, message, ChangeRequestRegisterStatus(id, status)) 
        );
    }

    return (
        <Container className="mt--7" fluid>
            <AvForm>
                <Row className="mt-5">
                    <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row>
                                    <Col xs="9">
                                        <h3 className="mb-0">
                                            Thông Tin Chi Tiết Người Thu Gom Yêu Cầu Đăng Kí 
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
                                                    Số điện thoại người thu gom đăng kí 
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="phone"
                                                    value={RequestRegisterFormState.phone}
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Họ Tên Người Thu Gom
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="text"
                                                    name="name"
                                                    value={RequestRegisterFormState.name}
                                                    onChange={(e) => OnHandleChange(e.target)} 
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="3">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Ngày Sinh
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    name="birthDate"
                                                    value={RequestRegisterFormState.birthDate}
                                                    onChange={(e) => OnHandleChange(e.target)} 
                                                    type="date"
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="2">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Trạng Thái
                                                </label>
                                                <UserStatus status={CheckUndefine(status)}/>      
                                            </AvGroup>
                                        </Col>
                                        </Row>

                                        <Row>   
                                            <Col lg="6">
                                                <AvGroup>
                                                    <label className="form-control-label">
                                                        Hình Ảnh Đại Diện
                                                    </label>
                                                    <div className="form-control-alternative mt-1">
                                                        <ImageComponent style={{width: '100%', height: '300px'}} className="rounded"
                                                                        image={ImgBase64.image} isFromAPI={ImgBase64.isFromAPI}/>
                                                    </div>
                                                    <AvInput type='file' 
                                                            className="form-control-alternative" 
                                                            name="imageFile"
                                                            onChange={(e) => OnHandleImage(e.target)}
                                                            accept="image/png, image/gif, image/jpeg" />
                                                </AvGroup>
                                            </Col>
                                            <Col lg="6">
                                                <Row>
                                                    <Col lg="7">
                                                        <AvGroup>
                                                            <label className="form-control-label">
                                                                Số Chứng Minh Nhân Dân
                                                            </label>
                                                            <AvInput
                                                                name="idCard"
                                                                className="form-control-alternative"
                                                                value={idCard}
                                                                onChange={(e) => OnHandleChange(e.target)} 
                                                                type="text"
                                                            />
                                                        </AvGroup>
                                                    </Col>
                                                    <Col lg="5">
                                                        <AvGroup>
                                                            <label className="form-control-label">
                                                                Giới Tính
                                                            </label>
                                                            <div className="alternative">
                                                                <AvField type="select" 
                                                                    name="gender" 
                                                                    className="form-control-alternative"
                                                                    value={RequestRegisterFormState.gender}
                                                                    onChange={(e) => OnHandleChange(e.target)} 
                                                                    >
                                                                        {RenderComboBox(GENDER)}
                                                                </AvField>
                                                            </div>
                                                        </AvGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="7">
                                                        <AvGroup>
                                                            <label className="form-control-label">
                                                                Địa chỉ
                                                            </label>
                                                            <AvInput
                                                                className="form-control-alternative"
                                                                type="textarea"
                                                                name="address"
                                                                style={{height: 140}}
                                                                value={address}
                                                                onChange={(e) => OnHandleChange(e.target)} 
                                                            />
                                                        </AvGroup>
                                                    </Col>
                                                    <Col lg="5">
                                                        <FormGroup>
                                                            <label className="form-control-label">
                                                                Thời Điểm Đăng Kí
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                name='registerTime'
                                                                value={CheckUndefine(RequestRegisterFormState.registerTime)}
                                                                disabled={true}
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="4">
                                                        <Button className="my-4" color="primary" 
                                                            type="button" size="lg" 
                                                            onClick={() => UpdateInfo()}
                                                            block>
                                                            Cập nhật
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                    </Row>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="3">
                                            <Button className="my-4" color="primary" 
                                            type="button" size="lg" 
                                            onClick = {() => OnChangeStatus(ACTIVE_NUM)}
                                            block>
                                                Chấp Thuận
                                            </Button>
                                        </Col>
                                        <Col lg="3">
                                            <Button className="my-4" color="danger" 
                                            type="button" size="lg" 
                                            onClick = {() => OnChangeStatus(REJECT_NUM)}
                                            block>
                                                Từ Chối
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </AvForm>
        </Container>
    );
}

export default CollectorRequestRegisterDetail;
