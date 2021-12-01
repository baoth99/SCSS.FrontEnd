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
import {useDispatch, useSelector} from 'react-redux';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import {GENDER, STATUS,ROLE} from '../../../Infrastucture/utils/constants/CommonConstants';
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import {CollectorRegisterDefaultState} from '../../../Infrastucture/utils/variables/InitialStateData';
import CollectorRegisterOTPForm from './CollectorRegisterOTPForm';
import {RegisterCollectorAccount} from '../../../Application/redux/actions/RegisterAction';

const noImage = require("../../../assets/img/theme/no_image.png").default;

const CollectorRegisterForm = () => {

    const collectorRegisterOTPState = useSelector(state => state.CollectorRegisterOTP);
    const dispatch = useDispatch();
    const [AccountState, setAccountState] = useState(() => CollectorRegisterDefaultState);
    const [ImageState, setImageState] = useState(null);

    const inputFile = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };


    const OnChangeImage = (evt) => {
        let file = evt.files[0];

        let fileReader = new FileReader();

        fileReader.onload = function(fileLoaderEvent) {
            var srcData = fileLoaderEvent.target.result;
            setImageState(srcData);
        }
        fileReader.readAsDataURL(file);

        setAccountState({
            ...AccountState,
            imageFile: file
        });
    }

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setAccountState({
            ...AccountState,
            [name]: evt.value
        })
    }


    const OnRegisterCollectorAccount = () => {
        let params = {
            phone: collectorRegisterOTPState.phone,
            registerToken: collectorRegisterOTPState.registerToken,
            name: AccountState.name,
            birthDate: AccountState.birthDate,
            gender: AccountState.gender,
            address: AccountState.address,
            iDCard: AccountState.iDCard,
            email: AccountState.email,
            imageFile: AccountState.imageFile
        };

       dispatch(
           RegisterCollectorAccount(params)
       );    
       OnRefresh();
    }

    const OnRefresh = () => {
        setAccountState(CollectorRegisterDefaultState);
        setImageState(null);
    }

    return (
            <Row className="mt-3">
                <Col lg="8">
                    <Card className="bg-secondary shadow">
                        <CardBody>
                            <div className="pl-lg-4">
                                <AvForm>
                                    <Row>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    SDT Đăng Kí 
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="number"
                                                    name="phone"
                                                    value={collectorRegisterOTPState.phone}
                                                    disabled={true}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Tên Người Thu Gom
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="text"
                                                    name="name"
                                                    value={AccountState.name}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Sinh Nhật
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="date"
                                                    name="birthDate"
                                                    value={AccountState.birthDate}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label" >
                                                    Giới Tính
                                                </label>
                                                <div className="alternative">
                                                    <AvField type="select" 
                                                            name="gender" 
                                                            className="form-control-alternative"
                                                            value={CollectorRegisterDefaultState.gender}
                                                            onChange={(e) => OnHandleChange(e.target)}>
                                                                {RenderComboBox(GENDER)}
                                                    </AvField>
                                                </div>   
                                            </AvGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Email
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="text"
                                                    name="email"
                                                    value={AccountState.email}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    CCCD / CMND
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="text"
                                                    name="iDCard"
                                                    value={AccountState.iDCard}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                        <Col lg="8">
                                            <AvGroup>
                                                <label className="form-control-label">
                                                    Địa chỉ
                                                </label>
                                                <AvInput
                                                    className="form-control-alternative"
                                                    type="textarea"
                                                    name="address"
                                                    value={AccountState.address}
                                                    onChange={(e) => OnHandleChange(e.target)}
                                                />
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick = {() => OnRegisterCollectorAccount()}
                                                block>
                                            Đăng Ký
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick = {() => OnRefresh()}
                                                block>
                                            Làm Lại
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="bg-secondary shadow">
                        <Row className="justify-content-center">
                            <Col lg="9">
                                    <div className="form-control-alternative mt-3">
                                        <img alt="..." 
                                            className="rounded" 
                                            style={{width: '100%', height: '300px'}} 
                                            src={ImageState === null ? noImage : ImageState}/>
                                    </div>
                            </Col>
                        </Row>
                        
                        <CardBody className="pt-0 pt-md-4">
                            <Row className="justify-content-center">
                                <input type='file' id='file' ref={inputFile} 
                                       style={{display: 'none'}} onChange={(e) => OnChangeImage(e.target)}/>
                                <button type="button" 
                                        className="btn btn-primary btn-sm"
                                        onClick={onButtonClick}
                                        >
                                        --Chọn Ảnh--
                                </button>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

    );
}

export default CollectorRegisterForm;
