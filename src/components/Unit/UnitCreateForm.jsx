import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {CreateNewUnit} from '../../redux/actions/UnitAction'

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Row,
    Collapse
  } from "reactstrap";
  import { BsChevronDoubleDown } from "react-icons/bs";
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

const UnitCreateForm = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const [UnitName, setUnitName] = useState("");

    const OnHandleSubmit = (e) => {
        e.preventDefault();
        if (UnitName === '' || UnitName.length === 0) {
            return;
        } else {
            dispatch(
                CreateNewUnit(UnitName)
             );
             setUnitName("");
        }   
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <AvForm onSubmit={(e) => OnHandleSubmit(e) }>
                    <Card className="shadow">
                        <CardHeader className="border-0" style={{backgroundColor: isOpen ? '#e4e9eb' : '#ffffff', cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)}>
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Tạo Mới Đơn Vị</h3>
                                </Col>             
                                <Col lg="3">
                                    <BsChevronDoubleDown style={{float: 'right'}} />
                                </Col>                  
                            </Row>
                        </CardHeader>
                        <Collapse isOpen={isOpen}>
                            <CardBody>
                                    <Row style={{alignItems: 'center'}}>
                                        <Col lg="4">
                                            <AvGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                    >
                                                    Nhập Tên Đơn Vị
                                                </label>
                                                <AvInput
                                                        className="form-control-alternative"
                                                        name="name"
                                                        type="text"
                                                        value={UnitName}
                                                        onChange={e => setUnitName(e.target.value)}
                                                        required
                                                    />
                                                <AvFeedback>
                                                    Vui Lòng Nhập Tên Đơn Vị !
                                                </AvFeedback>
                                            </AvGroup>
                                        </Col>
                                        <Col lg="2">
                                            <Button className="my-4" color="primary" 
                                                    type="submit" size="lg"
                                                    block>
                                                &nbsp;
                                                Tạo Mới
                                            </Button>
                                        </Col>
                                        <Col lg="2">
                                            <Button className="my-4" color="primary" 
                                                    type="button" size="lg"
                                                    onClick={() => setUnitName("")}
                                                    block>
                                                &nbsp;
                                                Xóa
                                            </Button>
                                        </Col>
                                    </Row>                          
                            </CardBody>
                        </Collapse>
                    </Card>
                </AvForm>
            </div>
        </Row>
    );
}

export default UnitCreateForm;
