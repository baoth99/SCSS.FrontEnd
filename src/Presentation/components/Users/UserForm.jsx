import React, {useState} from 'react';

import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
  } from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {GENDER, STATUS,ROLE} from '../../../Infrastucture/utils/constants/CommonConstants';
import {initialUserFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {ChangeUserSearchForm, ClearUserSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchUser} from '../../../Application/redux/actions/UserAction';
import { useDispatch } from 'react-redux';

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

    const OnHandleSearch = () => {       
        dispatch(
            ChangeUserSearchForm({...UserFormState})
        );
        dispatch(
            SearchUser({...UserFormState})
        );
    }


    const OnHandleRefresh = () => {
       setUserFormState(initialUserFormState);
       dispatch(
            ClearUserSearchForm()
       );
       dispatch(
            SearchUser(initialUserFormState)
       ); 
    }

    const OnHandleClearForm = () => {
       setUserFormState(initialUserFormState);
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <h6 className="heading-small text-muted mb-4">
                                Người Dùng
                            </h6>
                            <div className="pl-lg-4">
                                <Row>
                                <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                value={UserFormState.phone}
                                                name="phone"
                                                onChange={(e) => OnHandleChange(e.target)}                                            
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Họ và Tên
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                value={UserFormState.name}
                                                name="name"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa Chỉ Email
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                value={UserFormState.email}
                                                name="email"
                                                onChange={(e) => OnHandleChange(e.target)}                                          
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa Chỉ
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                value={UserFormState.address}
                                                name="address"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                type="textarea"
                                            />
                                        </AvGroup>
                                    </Col>                                 
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Chứng Minh Nhân Dân
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                value={UserFormState.idCard}
                                                name="idCard"
                                                onChange={(e) => OnHandleChange(e.target)}
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Giới Tính
                                            </label>
                                            <div className="alternative">
                                                <AvField type="select" 
                                                        name="gender" 
                                                        className="form-control-alternative"
                                                        value={UserFormState.gender}
                                                        onChange={(e) => OnHandleChange(e.target)}>
                                                            <option value=''>----------</option>
                                                            {RenderComboBox(GENDER)}
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
                                                Quyền
                                            </label>
                                            <div className="alternative">
                                                <AvField type="select" 
                                                        name="role" 
                                                        className="form-control-alternative"
                                                        value={UserFormState.role}
                                                        onChange={(e) => OnHandleChange(e.target)}>
                                                            <option value=''>----------</option>
                                                            {RenderComboBox(ROLE)}
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
                                                Trạng Thái
                                            </label>
                                            <div className="alternative">
                                                <AvField type="select" 
                                                        name="status" 
                                                        className="form-control-alternative"
                                                        value={UserFormState.status}
                                                        onChange={(e) => OnHandleChange(e.target)}>
                                                            <option value=''>----------</option>
                                                            {RenderComboBox(STATUS)}
                                                </AvField>
                                            </div>   
                                        </AvGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="shadow">
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" block
                                                onClick={() => OnHandleSearch()}>
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
                                                type="button" size="lg" block
                                                onClick={() => OnHandleClearForm()}>
                                            <BsXCircle/>
                                            &nbsp;
                                            Xóa
                                        </Button>
                                    </Col>
                                </Row>
                            </div>                            
                        </CardBody>                    
                    </Card>
                </AvForm>
            </div>
        </Row>
    )
}

export default UserForm;
