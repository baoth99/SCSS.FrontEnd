import React from 'react';
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import { MdDelete } from "react-icons/md";
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';
import {DeleteReason} from '../../../Application/redux/actions/CancelReasonAction';

const ShowData = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <CancelReasonItem index={index} key={index} content={val.content} id={val.id}/>
            )
        });
    }
    return result;
}

const CancelReasonList = () => {

    const cancelReasonData = useSelector(state => state.CancelReason);

    return (
        <ListGroup>
            <ListGroupItem style={{textAlign: 'center', border: "solid 1px 1px 1px"}}>Lí Do</ListGroupItem>
            <div style={{height: "500px", overflowY: 'scroll', border: "solid 1px" }}>
                {ShowData(cancelReasonData)}
            </div>
        </ListGroup>
    );
}

export default CancelReasonList;


const CancelReasonItem = ({id, index, content}) => {
    const dispatch = useDispatch();

    const OnDelete = () => {
        const title = "Xóa ";
        const message = "Bạn có chắc chắn sẽ Lí Do này";
        dispatch(
            ShowConfirmDialog(title, message, DeleteReason(id))
        );
    }

    return (
        <ListGroupItem action>
            <Row>
            <Col lg="10">
                {index + 1}. {content}
            </Col>
            <Col lg="2" style={{textAlign: 'center'}}>
                <MdDelete size="2em" style={{cursor: 'pointer'}} onClick={() => OnDelete()}/>
            </Col>
            </Row>
        </ListGroupItem>
    );
}
