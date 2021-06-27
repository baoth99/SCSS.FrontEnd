import React, {useState} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card,
        CardBody,Row,Col,
        Form,FormGroup,Input } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import {HideSCCreate} from '../../redux/actions/ModalAction';

import ComboBox from '../../components/Commons/ComboBox';
import {initialSCCreateFormState} from '../../variables/InitialStateData';

const noImage = require("../../assets/img/theme/no_image.png").default;

const SeedData = [
    {
        key: 1,
        val: "Kg"
    },
    {
        key: 2,
        val :"Gam"
    },
    {
        key: 3,
        val :"Tấn"
    }
]


const SCCreateForm = () => {
    const IsShow = useSelector(state => state.SCCreateModal.showModal);
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



    const ChangeImage = (files) => {
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoaderEvent) {
            var srcData = fileLoaderEvent.target.result;
            setImgBase64(srcData);
        }
        fileReader.readAsDataURL(files[0]);
    }

    const OnHandleCreate = () => {
        console.log(FormData);
    }



    const ClearForm = () => {
        setImgBase64(noImage);
        dispatch(HideSCCreate());
    }

    return (
        <div>
            <Modal isOpen={IsShow} className="modal-lg modal-dialog-centered">
                <ModalHeader>Tạo Mới Loại Phế Liệu</ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardBody>
                                    <Form>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="8">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"
                                                        >
                                                            Tên Loại Phế Liệu
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            name="name"
                                                            onChange={(e) => OnHandleChange(e.target)}
                                                            value={FormData.name}
                                                            type="text"
                                                        />
                                                    </FormGroup>
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
                                                            <ComboBox list={SeedData} leftRight={50} 
                                                                    topBottom={10} onSelect={(val) => setFormData({
                                                                        ...FormData,
                                                                        unit: parseInt(val)
                                                                    })} defaultVal={FormData.unit}/>
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
                                                                onClick={() => setImgBase64(noImage)}>
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
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => OnHandleCreate()}>Tạo Mới</Button>
                <Button color="danger" onClick={() => setFormData(initialSCCreateFormState)}>Xóa</Button>{' '}
                <Button color="secondary" onClick={() => ClearForm()}>Hủy</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SCCreateForm;
