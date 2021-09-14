import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import {GetRoleMessage} from '../../../Infrastucture/helpers/CommonHelper';

import {GetSCDetail} from '../../../Application/redux/actions/SCAction';
import {DEALER_NUM, SCRAP_CATEGORY_DE_ACTIVE} from '../../../Infrastucture/utils/constants/CommonConstants';

import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter } from "reactstrap";
import SCStatus from '../../components/ScrapCategories/SCStatus';
import SCUnitInfo from '../../components/ScrapCategories/SCUnitInfo';
import ImageComponent from '../../components/Commons/ImageComponent';

const noImage = require("../../../assets/img/theme/no_image.png").default;

const ScrapCategoryDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataSC = useSelector(state => state.DataSC);

    //const {createdBy, createdTime} = dataSC;

    const [IsDisable] = useState(true);

    useEffect(() => {
        dispatch(GetSCDetail(id));
    }, []);

    

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="9">
                                        <h3 className="mb-0">
                                            Thông Tin Chi Tiết Loại Phế Liệu
                                        </h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Tên Loại Phế Liệu
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="sc-detail-name"
                                                    name="name"
                                                    defaultValue={dataSC.name}
                                                    disabled={IsDisable}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    Người Tạo
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="createdBy"
                                                    defaultValue={dataSC.createdBy}
                                                    type="text"
                                                    disabled={true} 
                                                />
                                            </FormGroup>                                           
                                        </Col>     
                                        <Col lg="3">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    Thời Điểm Tạo
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="createdTime"
                                                    defaultValue={dataSC.createdTime}
                                                    type="text"
                                                    disabled={true} 
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="2">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    Trạng Thái
                                                </label>
                                                <SCStatus status={dataSC.status}/>
                                            </FormGroup>
                                        </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    Quyền Người Tạo
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="createdBy"
                                                    defaultValue={GetRoleMessage(dataSC.role)}
                                                    type="text"
                                                    disabled={true} 
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    {dataSC.status == SCRAP_CATEGORY_DE_ACTIVE ? "Thời Điểm Dừng Sử Dụng" : "Thời Điểm Cập Nhật Cuối"}
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    name="updatedTime"
                                                    defaultValue={dataSC.updatedTime}
                                                    type="text"
                                                    disabled={true} 
                                                />
                                            </FormGroup>
                                        </Col>
                                        {dataSC.role == DEALER_NUM ? <DealerScrapCategoryDetail dealerName="Ve Chai Quang Minh 2" managedBy={"Ve Chai QUang Minh 1"}/> : null}
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label className="form-control-label">
                                                    Hình Ảnh
                                                </label>
                                                <div className="form-control-alternative mt-1">
                                                    <ImageComponent style={{width: '100%', height: '300px'}} className="rounded"
                                                                    image={dataSC.imageUrl}/>
                                                </div>                                          
                                            </FormGroup>
                                        </Col>    
                                        <Col lg="6">
                                                <label className="form-control-label">
                                                    Đơn Vị & Giá Tiền
                                                </label>
                                                <SCUnitInfo data={dataSC.items}/>
                                        </Col>
                                    </Row>
                                </div>                           
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                </div>
            </Row>
        </Container>
    );
}

export default ScrapCategoryDetail;


const DealerScrapCategoryDetail = ({dealerName, managedBy}) => {
    return (
        <>
            <Col lg="3">
                <FormGroup>
                    <label
                        className="form-control-label"
                        htmlFor="input-username"
                    >
                        Tên Vựa
                    </label>
                    <Input
                        className="form-control-alternative"
                        id="sc-detail-name"
                        name="name"
                        defaultValue={dealerName}
                        disabled={true}
                        type="text"
                    />
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <label
                        className="form-control-label"
                        htmlFor="input-username"
                    >
                        Vựa Thuộc Về
                    </label>
                    <Input
                        className="form-control-alternative"
                        id="sc-detail-name"
                        name="name"
                        defaultValue={managedBy}
                        disabled={true}
                        type="text"
                    />
                </FormGroup>
            </Col>
        </>
    );
}






