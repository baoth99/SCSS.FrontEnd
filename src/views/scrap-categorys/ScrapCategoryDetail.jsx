import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {RenderComboBox} from '../../helpers/CommonHelper';

import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

import {RemoveSC} from '../../redux/actions/SCAction';
import {ShowConfirmDialog} from '../../redux/actions/ModalAction';

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    Input,
    CardFooter,
    Button,
    FormFeedback
  } from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

const noImage = require("../../assets/img/theme/no_image.png").default;


const ScrapCategoryDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const [IsDisable, setIsDisable] = useState(true);
    const history = useHistory();

    const Remove = () => {
        const title = "Xác Nhận Xóa -Sắt-";
        const message = "Bạn muốn xóa Sắt";
        //const push = history.push('/admin/scrap-category')
        dispatch(
            ShowConfirmDialog(title, message, RemoveSC(id, history))
        );
    }

    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <AvForm>
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
                                                        //className="form-control-alternative"
                                                        name="name"
                                                        //invalid={FormData.name.length > 50}
                                                        value={id}
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
                                                        <AvField type="select" name="select" 
                                                                disabled={IsDisable}
                                                                value={0}
                                                                errorMessage = "Vui lòng chọn đơn vị"
                                                                required>
                                                            <option value=''>----------</option>
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
                                                        disabled={IsDisable}
                                                        name="name"
                                                        style={{height: '150px'}}
                                                        //invalid={FormData.name.length > 50}
                                                        value={id}
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
                                                        value="Tran Hoai Bao"
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
                                                        value="20/10/2020 12:10:32 AM"
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
                                                    <div className="form-control-alternative mt-1">
                                                                <img
                                                                    alt="..."
                                                                    className="rounded"
                                                                    style={{width: '100%', height: '250px'}}
                                                                    src={noImage}
                                                                    />
                                                    </div>
                                                    <Input 
                                                        className="form-control-alternative mt-3"
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
                                            type="button" size="lg" disabled={IsDisable} 
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
