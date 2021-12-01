import React, { useState } from 'react';
import { Collapse, Row, Col, FormGroup, Input  } from 'reactstrap';
import {useDispatch} from 'react-redux';

const ReplyComplaint = ({complaintId, action}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [Content, setContent] = useState("");

    const OnHandleReply = () => {
        if (Content != "") {
            var requestModel = {
                id: complaintId,
                replyContent: Content,
            };
            dispatch(
                action({...requestModel})
            );
        }
    }

    return (
        <>
            <button type="button" 
                    className="btn btn-outline-primary btn-sm"
                    onClick={toggle}>
                        Trả lời phản hồi
            </button>
            <Collapse isOpen={isOpen}>
                    <Row>
                        <Col lg="9">
                            <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-username"
                                >
                                    Nội dung
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    style={{height: "100px"}}
                                    type="textarea"
                                    name="RepliedContent"
                                    value={Content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <button type="button" 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => OnHandleReply()}>
                                        Trả lời
                            </button>

                            <button type="button" 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => setContent("")}>
                                        Xóa
                            </button>
                        </Col>
                    </Row>
            </Collapse>
        </>
    );
}

export default ReplyComplaint;
