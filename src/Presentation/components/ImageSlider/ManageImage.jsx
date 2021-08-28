import React from 'react';

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Row,
    Button,
    CardFooter,
    ListGroup,
    ListGroupItem,
    List
  } from "reactstrap";

import {useSelector, useDispatch} from 'react-redux';
import ImageSliderItem from './ImageSliderItem';

import {SaveImageSlider} from '../../../Application/redux/actions/ImageSliderAction';

const RenderCheckBoxItem = (data, isChoosed) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            if(val.isSelected == isChoosed) {
                return (
                    <ImageSliderItem key={index} id={val.id} name={val.name} />
                )
            }
        });
    }
    return result;
}


const ManageImage = () => {
    const imageSliderData = useSelector(state => state.ImageSlider);
    const dispatch = useDispatch();

    const OnHandleSave = () => {
        dispatch(SaveImageSlider());
    }

    return (
        <Card>
            <CardHeader>
                <Row>
                    <Col lg="6">
                        <h3 className="mb-0">Quản Lí Ảnh</h3>
                    </Col>                                                                                                
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col lg="6">
                        <ListGroup>
                            <ListGroupItem style={{textAlign: 'center'}}>
                                Ảnh Trong Hệ Thống
                            </ListGroupItem>
                            <div style={{overflowY: 'scroll'}}>
                                {RenderCheckBoxItem(imageSliderData.list, false)}
                            </div>
                        </ListGroup>
                    </Col>
                    <Col lg="6">                       
                        <ListGroup>
                            <ListGroupItem style={{textAlign: 'center'}}>
                                    Ảnh Đang Sử Dụng
                            </ListGroupItem>
                            <div style={{overflowY: 'scroll'}}>
                                {RenderCheckBoxItem(imageSliderData.list, true)}
                            </div>
                        </ListGroup>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Row>
                    <Col lg="12">
                        <Button style={{float: 'right'}} 
                                onClick={() => OnHandleSave()}
                                color="primary" size="sm">
                                    Lưu Lại
                        </Button>
                    </Col> 
                </Row>
            </CardFooter>
        </Card>
    );
}

export default ManageImage;
