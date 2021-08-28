import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Badge, Card, CardHeader,Row,Col } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {HideImageSliderDetail} from '../../../Application/redux/actions/ModalAction';
import {ChangeIsSelectedImage} from '../../../Application/redux/actions/ImageSliderAction';

const ImageSliderDetail = () => {

    const state = useSelector(state => state.ImageSliderDetail);
    const dispatch = useDispatch();

    const OnHandleImage = (id, isSelected) => {
        dispatch(ChangeIsSelectedImage(id, !isSelected));
        dispatch(HideImageSliderDetail())
    }

    return (
        <Modal isOpen={state.showModal} className="modal-lg modal-dialog-centered">
            <ModalHeader toggle={() => dispatch(HideImageSliderDetail())}>
                Chi Tiết
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col lg="7">
                        <img src={state.base64String} alt="..."/>
                    </Col>
                    <Col lg="5">
                        <Row>
                            <h3>
                                <Badge color="success">
                                    Tên Ảnh:
                                 </Badge>
                            </h3>
                            &nbsp; 
                            <h3>
                                {state.name}
                            </h3>
                        </Row>
                        <Row>
                            <h3>
                                <Badge color="success">
                                    Ngày Giờ Tạo:
                                 </Badge>
                            </h3>
                            &nbsp; 
                            <h3>
                                {state.createdTime}
                            </h3>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <Button color="primary"
                                    onClick={() => OnHandleImage(state.id, state.isSelected)}>
                                {state.isSelected ? "Gỡ ra" : "Sử Dụng"}
                            </Button>
                            <Button color="danger" 
                                    onClick={() => dispatch(HideImageSliderDetail())}>
                                Hủy
                            </Button>
                        </Row>                        
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
}

export default ImageSliderDetail;
