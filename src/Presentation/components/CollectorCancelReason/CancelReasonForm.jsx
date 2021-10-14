import React, {useState} from 'react';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Button } from "reactstrap";
import {CreateNewReason} from '../../../Application/redux/actions/CancelReasonAction';
import {useDispatch} from 'react-redux';
const CancelReasonForm = () => {
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const onHandleCreate = () => {
        if(content != "") {
            dispatch(CreateNewReason(content));
        }
        setContent("");
    }

    return (
        <AvForm>
            <AvGroup>
                <label className="form-control-label">
                    Nội Dung
                </label>
                <AvInput
                    className="form-control-alternative"
                    style={{height: "150px"}}
                    type="textarea"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </AvGroup>
            <Row>
                <Col lg="3">
                    <Button className="my-4" color="primary" 
                            type="button" size="lg" 
                            block
                            onClick={() => onHandleCreate()}>
                        Tạo mới
                    </Button>
                </Col>
                <Col lg="3">
                    <Button className="my-4" color="danger" 
                            type="button" size="lg" 
                            onClick={() => setContent("")}
                            block>
                        Xóa
                    </Button>
                </Col>
            </Row>
        </AvForm>
    );
}

export default CancelReasonForm;
