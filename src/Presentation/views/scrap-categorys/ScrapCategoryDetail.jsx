import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'

import {RemoveSC, GetSCDetail, UpdateSC} from '../../../Application/redux/actions/SCAction';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';

import {Card, CardHeader, CardBody, Container, Row, Col, Input, CardFooter, Button } from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import {RenderComboBox} from '../../../Infrastucture/helpers/CommonHelper';

const noImage = require("../../../assets/img/theme/no_image.png").default;



const ScrapCategoryDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const dataSC = useSelector(state => state.DataSC);
    const unitList = useSelector(state => state.FetchUnit);

    const {createdBy, createdTime} = dataSC;

    const [IsDisable, setIsDisable] = useState(true);

    const initialSCState = {
        name: dataSC.name,
        unit: dataSC.unit,
        description: dataSC.description,
        image: dataSC.image
    }

    useEffect(() => {
        dispatch(GetSCDetail(id));
    }, []);


    const OnHandleSubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById('sc-detail-name').value;
        let unit = document.getElementById('sc-detail-unit').value;
        let description = document.getElementById('sc-detail-description').value;
        let imageList = document.getElementById('sc-detail-select-image').files;

        let isShowImg = document.getElementById('sc-detail-image');


        if (name === "" || unit === "") {
            return;
        } else {
            console.log(imageList);
            const image = imageList[0];
            const isDeleteImg = isShowImg.src === noImage ? true : false;

            dispatch(
                UpdateSC({id, name, unit, image, isDeleteImg, description})
            );
        }       
    }
    

    const onHandleImgChange = (files) => {
        let imageSelected = files[0];
        let image = document.getElementById('sc-detail-image');
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoaderEvent) {
            let srcData = fileLoaderEvent.target.result;
            image.src = srcData
        }
        fileReader.readAsDataURL(imageSelected);
    }


    const RemoveImage = () => {
        let image = document.getElementById('sc-detail-image');
        image.src = noImage;

        let selectImage = document.getElementById('sc-detail-select-image');
        selectImage.value = "";
    }

    const Remove = () => {
        const title = `Xác Nhận Xóa ${dataSC.name}`;
        const message = `Bạn muốn xóa ${dataSC.name}`;
        dispatch(
            ShowConfirmDialog(title, message, RemoveSC(id, true))
        );
    }

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <AvForm onSubmit={(e) => OnHandleSubmit(e) }>
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="9">
                                        <h3 className="mb-0">
                                            Thông Tin Chi Tiết Loại Phế Liệu
                                        </h3>
                                    </Col>
                                    <Col lg="3" style={{paddingLeft: "50px"}}>
                                        <Button type="button" color="warning" 
                                            style={{float: 'right'}}
                                            onClick={() => setIsDisable(() => !IsDisable)} block>
                                            {IsDisable ? "Mở Khóa" : "Khóa"}
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Tên Loại Phế Liệu
                                                    </label>
                                                    <AvInput
                                                        id="sc-detail-name"
                                                        name="name"
                                                        //invalid={FormData.name.length > 50}
                                                        value={initialSCState.name}
                                                        disabled={IsDisable}
                                                        type="text"
                                                        required 
                                                    />
                                                    <AvFeedback>
                                                        Vui lòng nhập tên phế liệu                                                         
                                                    </AvFeedback>
                                                </AvGroup>
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Đơn vị
                                                    </label>
                                                    <div className="alternative">
                                                        <AvField type="select" 
                                                                id="sc-detail-unit"
                                                                name="unit" 
                                                                disabled={IsDisable}
                                                                value={initialSCState.unit}
                                                                errorMessage = "Vui lòng chọn đơn vị"
                                                                required>
                                                            <option value=''>----------</option>
                                                            {RenderComboBox(unitList)}
                                                        </AvField>
                                                    </div>
                                                </AvGroup>
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Miêu Tả
                                                    </label>
                                                    <AvInput
                                                        className="form-control-alternative"
                                                        id="sc-detail-description"
                                                        disabled={IsDisable}
                                                        name="description"
                                                        style={{height: '150px'}}
                                                        //invalid={FormData.name.length > 50}
                                                        value={initialSCState.description == null ? "" : initialSCState.description}
                                                        type="textarea"
                                                    />
                                                </AvGroup>
                                            </Col>
                                            <Col lg="3">
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                    Người Tạo
                                                    </label>
                                                    <AvInput
                                                        className="form-control-alternative"
                                                        name="createdBy"
                                                        //invalid={FormData.name.length > 50}
                                                        value={createdBy}
                                                        type="text"
                                                        disabled={true} 
                                                    />
                                                </AvGroup>
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                    Ngày Tạo
                                                    </label>
                                                    <AvInput
                                                        className="form-control-alternative"
                                                        name="createdTime"
                                                        value={createdTime}
                                                        type="text"
                                                        disabled={true} 
                                                    />
                                                </AvGroup>
                                            </Col>     
                                            <Col lg="5">
                                                <AvGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Hình Ảnh
                                                    </label>
                                                    <button type="button" 
                                                            style={{float: 'right'}} 
                                                            disabled={IsDisable}
                                                            onClick={() => RemoveImage()}
                                                            className="btn btn-outline-danger btn-sm">
                                                                Xóa Ảnh
                                                    </button>
                                                    <div className="form-control-alternative mt-1">
                                                        <img
                                                            alt="..."
                                                            id="sc-detail-image"
                                                            className="rounded"
                                                            style={{width: '100%', height: '250px'}}
                                                            src={initialSCState.image != "" ? initialSCState.image : noImage}
                                                            />
                                                    </div>
                                                    <Input 
                                                        className="form-control-alternative mt-3"
                                                        id="sc-detail-select-image"
                                                        onChange={(e) => onHandleImgChange(e.target.files)}
                                                        disabled={IsDisable}
                                                        type="file"
                                                        accept="image/png, image/gif, image/jpeg"
                                                        />                                              
                                                </AvGroup>
                                            </Col>                                 
                                        </Row>
                                    </div>                           
                            </CardBody>
                            <CardFooter>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="4">
                                            <Button className="my-4" color="primary" 
                                            type="submit" size="lg" disabled={IsDisable} 
                                            block>
                                                Lưu Lại
                                            </Button>
                                        </Col>
                                        <Col lg="3">
                                            <Button className="my-4" color="danger" 
                                                type="button" size="lg" 
                                                disabled={IsDisable}
                                                onClick={() => Remove()} block>
                                                Xóa
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </AvForm>
                </div>
            </Row>
        </Container>
    );
}

export default ScrapCategoryDetail;
