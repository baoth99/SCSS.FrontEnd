import React from 'react';
import {useSelector} from 'react-redux'
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Row
  } from "reactstrap";

import AdsImageList from './AdsImageList';
import CarouselSlider from './CarouselSlider'


const AdsSliderReview = () => {
    const imagesUsing = useSelector(state => state.ImageUsingList);

    return (
        <Row className="mt-5">
            <div className="col">
                <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Slider Ảnh quảng cáo hiện tại</h3>
                            </Col>                               
                        </Row>
                    </CardHeader>
                    <CardBody style={{alignContent: 'center'}}>
                        <Row>
                            <Col lg='4'>
                                <CarouselSlider items={imagesUsing.list}/>
                            </Col>
                            <Col lg='8'>
                                <AdsImageList imageList={imagesUsing.list}/>
                            </Col>
                        </Row>                       
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default AdsSliderReview;
