import React, {useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';
import {GENDER} from '../../../Infrastucture/utils/constants/CommonConstants'
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import { useSelector } from 'react-redux';

const Profile = () => {

  const [IsNonEdited, setIsNonEdited] = useState(true);

  const user = useSelector(state => state.Auth.user);

  const {preferred_username, name, address, phone_number, role, gender, birthdate, picture, id, email} = user.profile
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          picture
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                 
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">                     
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {name}
                  </h3>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    System Admin
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Scrap Collecting Suport System
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="9">
                    <h3 className="mb-0">Tài khoản của tôi</h3>
                  </Col>
                  {/* <Col xs="3">
                    <button type="button" 
                            className="btn btn-outline-danger"
                            style={{float: 'right'}}
                            onClick={() => setIsNonEdited(!IsNonEdited)}>Mở Khóa</button>
                  </Col> */}
                </Row>
              </CardHeader>
              <AvForm>
              <CardBody>
                  <h6 className="heading-small text-muted mb-4">
                   Thông tin người dùng
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={preferred_username}
                            id="input-username"
                            placeholder="Username"
                            disabled={true}
                            type="text"
                          />
                        </AvGroup>
                      </Col>
                      <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                           Họ Và Tên
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-name"
                            placeholder={name}
                            type="text"
                            disabled={IsNonEdited}
                          />
                        </AvGroup>
                      </Col>                     
                    </Row>
                    <Row>
                      <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Sinh Nhật
                          </label>
                          <AvInput
                            className="form-control-alternative"
                            value={birthdate}
                            disabled={IsNonEdited}
                            name="birthDate"
                            type="date"
                          />
                        </AvGroup>
                      </Col>
                      <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Giới Tính
                          </label>
                          <AvField type="select" 
                                    name="gender" 
                                    className="form-control-alternative"
                                    disabled={IsNonEdited}
                                    value={gender}
                                    onChange={(e) => console.log(e.target.value)}>
                                        <option value={0}>----------</option>
                                        {RenderComboBox(GENDER)}
                            </AvField>
                        </AvGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                   Thông Tin Liên Lạc
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                    <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue={email}
                            disabled={IsNonEdited}
                            type="email"
                          />
                        </AvGroup>
                      </Col>
                      <Col lg="6">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                           Số Điện Thoại
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder={phone_number}
                            type="number"
                            disabled={IsNonEdited}
                          />
                        </AvGroup>
                      </Col>
                      <Col md="12">
                        <AvGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={address}
                            id="input-address"
                            placeholder="Home Address"
                            disabled={IsNonEdited}
                            type="textarea"
                          />
                        </AvGroup>
                      </Col>
                    </Row>
                  </div>
              </CardBody>
              </AvForm>
              {/* <CardFooter>
                <div className="pl-4">
                  <Row>
                    <Col lg="3">
                        <Button className="my-4" color="primary" 
                                type="button" size="lg" block>
                            Lưu Lại
                        </Button>
                    </Col>
                  </Row>
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
