import React, {useState, useContext} from 'react';

import {
    Card,
    CardBody,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
  } from "reactstrap";


import ComboBox from '../Commons/ComboBox';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";

import {GENDER, STATUS,ROLE} from '../../utils/constants/CommonConstants';
import {initialUserFormState} from '../../variables/InitialStateData';
import {ChangeUserSearchForm, ClearUserSearchForm} from '../../redux/actions/FormAction';

import { useDispatch } from 'react-redux';
//import {EnqueSnackBar, CloseSnackBar} from '../../redux/actions/ModalAction';

const UserForm = () => {

    const dispatch = useDispatch();

    const [UserFormState, setUserFormState] = useState(() => initialUserFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setUserFormState({
            ...UserFormState,
            [name]: evt.value
        })
    }

    const SearchUsers = () => {
        console.log(UserFormState);
        dispatch(ChangeUserSearchForm({...UserFormState}));
        // const notiDialog = {
        //     message: 'Demo Account now',
        //     options: {
        //         variant: 'success',
        //     },
        // }
        // dispatch(EnqueSnackBar(notiDialog));
    }


    const ReFreshTable = () => {
        
    }

    const ClearForm = () => {
       setUserFormState(initialUserFormState);
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <Card className="shadow">
                    <CardBody>
                        <Form>
                        <h6 className="heading-small text-muted mb-4">
                            Người Dùng
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                            <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Điện Thoại
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            value={UserFormState.phone}
                                            name="phone"
                                            onChange={(e) => OnHandleChange(e.target)}                                            
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Họ và Tên
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            value={UserFormState.name}
                                            name="name"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Địa Chỉ Email
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            value={UserFormState.email}
                                            name="email"
                                            onChange={(e) => OnHandleChange(e.target)}                                          
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Địa Chỉ
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            value={UserFormState.address}
                                            name="address"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>                                 
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Số Chứng Minh Nhân Dân
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            value={UserFormState.idCard}
                                            name="idCard"
                                            onChange={(e) => OnHandleChange(e.target)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Giới Tính
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list={GENDER} leftRight={30} 
                                                    topBottom={10} onSelect={(val) => setUserFormState({
                                                        ...UserFormState,
                                                        gender: parseInt(val)
                                                    })} defaultVal={UserFormState.gender}/>
                                        </div>   
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Quyền
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list={ROLE} leftRight={30} 
                                                    topBottom={10} onSelect={(val) => setUserFormState({
                                                        ...UserFormState,
                                                        role: parseInt(val)
                                                    })} defaultVal={UserFormState.role} />
                                        </div>   
                                    </FormGroup>
                                </Col>
                                <Col lg="3">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                            Trạng Thái
                                        </label>
                                        <div className="alternative">
                                            <ComboBox list={STATUS} leftRight={30} 
                                                    topBottom={10} onSelect={(val) => setUserFormState({
                                                        ...UserFormState,
                                                        status: parseInt(val)
                                                    })} defaultVal={UserFormState.status}/>
                                        </div>   
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        </Form>
                    </CardBody>
                </Card>
                <Card className="shadow">
                    <CardBody>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            type="button" size="lg" block
                                            onClick={() => SearchUsers()}>
                                        <BsSearch/>
                                        &nbsp;
                                        Tìm Kiếm
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" type="button" size="lg" block
                                            onClick={() => ReFreshTable()}>
                                        <BsArrowClockwise/>
                                        &nbsp;
                                        Làm Mới
                                    </Button>
                                </Col>
                                <Col lg="3">
                                    <Button className="my-4" color="primary" 
                                            type="button" size="lg" block
                                            onClick={() => ClearForm()}>
                                        <BsXCircle/>
                                        &nbsp;
                                        Xóa
                                    </Button>
                                </Col>
                            </Row>
                        </div>                            
                    </CardBody>                    
                </Card>
            </div>
        </Row>
    )
}

export default UserForm;
