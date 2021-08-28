import React, {useState, useEffect} from 'react';

import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Row,
  } from "reactstrap";
import ImageSliderItem from './ImageSliderItem';
import CreateImage from './CreateImage';
import ManageImage from './ManageImage'
import {useSelector} from 'react-redux';

const noImage = require("../../../assets/img/theme/no-image-slider.png").default;


const RenderCheckBoxItem = (data, isChoosed, method) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            if(val.isSelected == isChoosed) {
                return (
                    <ImageSliderItem key={index} id={val.id} name={val.name} imageUrl={val.imageUrl} isSelected={val.isSelected} method={method}/>
                )
            }
        });
    }
    return result;
}


const FilterImageSlider = (list, isSelected) => {
    let result = [];
    if(!Array.isArray(list)) {
        return result;
    }
    if (list.length > 0) {
        result = list.filter((item) => item.isSelected == isSelected);
    }
    return result;
}

const buttonStyle = {
    marginLeft: 'auto', 
    marginRight: 'auto'
}

const TransferList = () => {

    

    return (
        <Row className="mt-5">
             <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Dashboard</h3>
                            </Col>                          
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg="5">
                                <CreateImage/>                           
                            </Col>
                            <Col lg="7">
                                <ManageImage/>
                            </Col>                        
                        </Row>
                    </CardBody>
                </Card>
             </div>
        </Row>
    );
}

export default TransferList;
