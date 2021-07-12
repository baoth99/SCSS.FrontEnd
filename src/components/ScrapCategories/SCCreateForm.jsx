import React, {useState, useEffect} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card,
        CardBody,Row,Col,FormGroup,Input, FormFeedback } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';


import {RenderComboBox} from '../../helpers/CommonHelper';

import { useSelector, useDispatch } from 'react-redux';
import {HideSCCreate} from '../../redux/actions/ModalAction';

import {initialSCCreateFormState} from '../../variables/InitialStateData';
import {CreateNewSC} from '../../redux/actions/SCAction';


const noImage = require("../../assets/img/theme/no_image.png").default;


const SCCreateForm = () => {
    const IsShow = useSelector(state => state.SCCreateModal.showModal);
    const unitList = useSelector(state => state.FetchUnit);

    const dispatch = useDispatch();

    const [ImgBase64, setImgBase64] = useState(noImage);
    


    const [FormData, setFormData] = useState(() => initialSCCreateFormState);

    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...FormData,
            [name]: evt.value
        })
    }

    const RefreshImage = () => {
        setImgBase64(noImage);
        setFormData({
            ...FormData,
            image: null
        })
    }


    const ChangeImage = (files) => {
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoaderEvent) {
            var srcData = fileLoaderEvent.target.result;
            setImgBase64(srcData);
        }
        fileReader.readAsDataURL(files[0]);
        setFormData({
            ...FormData,
            image: files[0]
        });
    }

    const OnHandleCreate = (e) => {
        e.preventDefault();
        // Validate
        if (FormData.name === '' || FormData.unit === '' || FormData.name.length > 50) {
            return;
        }
        console.log(FormData);

        dispatch(
            CreateNewSC({...FormData})
        )
        setFormData(initialSCCreateFormState);
    }



    const ClearForm = () => {
        setImgBase64(noImage);
        setFormData(initialSCCreateFormState);
        dispatch(HideSCCreate());
    }

    return (
        <div>
            <Modal isOpen={IsShow} className="modal-lg modal-dialog-centered">
                <AvForm onSubmit={(e) => OnHandleCreate(e) }>
                <ModalHeader toggle={() => ClearForm()} >Tạo Mới Loại Phế Liệu</ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardBody>                                   
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="8">
                                                    <AvGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"
                                                        >
                                                            Tên Loại Phế Liệu
                                                        </label>
                                                        <AvInput
                                                            //className="form-control-alternative"
                                                            name="name"
                                                            //invalid={FormData.name.length > 50}
                                                            onChange={(e) => {
                                                                OnHandleChange(e.target);
                                                            }}
                                                            value={FormData.name}
                                                            type="text"
                                                            required 
                                                        />
                                                        <AvFeedback>
                                                            Vui lòng nhập tên loại phế liệu                                                         
                                                        </AvFeedback>
                                                        {/* <FormFeedback invalid>
                                                            {FormData.name.length > 50 ? "Quá số lượng kí tự cho phép" : ""}
                                                        </FormFeedback> */}
                                                    </AvGroup>
                                                </Col>
                                                <Col lg="3" className="ml-1">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"
                                                        >
                                                            Đơn vị
                                                        </label>
                                                        
                                                        <div className="alternative">
                                                            <AvField type="select" name="select" 
                                                                 value={FormData.unit}
                                                                 onChange={(e) => setFormData({
                                                                     ...FormData,
                                                                     unit : e.target.value
                                                                 })}
                                                                 errorMessage = "Vui lòng chọn đơn vị"
                                                                 required>
                                                                <option value=''>----------</option>
                                                               {RenderComboBox(unitList)}
                                                            </AvField>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"                                                           
                                                        >
                                                            Chọn Hình Ảnh
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            type="file"
                                                            accept="image/png, image/gif, image/jpeg"
                                                            onChange={(e) => ChangeImage(e.target.files)}
                                                        />
                                                    </FormGroup>                                                 
                                                </Col>
                                                <Col lg="7" className="ml-4">
                                                    <FormGroup>
                                                        
                                                        <button type="button" className="btn btn-outline-light btn-sm"
                                                                onClick={() => RefreshImage()}>
                                                            Làm Lại
                                                        </button>
                                                        <div className="alternative mt-1">
                                                            <img
                                                                alt="..."
                                                                className="rounded"
                                                                style={{width: '100%', height: '250px'}}
                                                                src={ImgBase64}
                                                                />
                                                        </div>                                      
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="8">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"
                                                        >
                                                            Miêu Tả
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            style={{height: '150px'}}
                                                            name="description"
                                                            type="textarea"
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                            value={FormData.description}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                    
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" type="submit">Tạo Mới</Button>
                <Button color="danger" type="button" onClick={() => setFormData(initialSCCreateFormState)}>Xóa</Button>
                <Button color="secondary" type="button" onClick={() => ClearForm()}>Hủy</Button>
                </ModalFooter>
                </AvForm>
            </Modal>
        </div>
    );
}

export default SCCreateForm;
