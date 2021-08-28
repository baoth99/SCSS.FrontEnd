import React, {useState} from 'react';
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Row,
    Button,
    CardFooter
  } from "reactstrap";

import {useDispatch} from 'react-redux';
import {CreateImageSlider} from '../../../Application/redux/actions/ImageSliderAction';;
const noImage = require("../../../assets/img/theme/no-image-slider.png").default;

const initialState = {
    isDisableButton : true,
    imageBase64: noImage,
    image: null
}

const CreateImage = () => {

    const [State, setState] = useState(initialState);
    const dispatch = useDispatch();


    const ChangeImage = (files) => {
        let file = files[0];
        let fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = function(e) {
            var image = new Image();
            image.src = e.target.result;

            image.onload = function () {
                let imgHeight = this.height;
                let imgWidth = this.width;

                if(imgHeight != 250  && imgWidth != 370) {
                    let img = document.getElementById('imageUploadId');
                    img.value = null;
                    setState(initialState);
                    alert("Ảnh phải đúng kích thước 370x250");
                } else {
                    setState({imageBase64: image.src, image: file, isDisableButton: false});
                }

            };

        }
    }

    const OnHandleCreate = () => {
        dispatch(CreateImageSlider(State.image));
        let img = document.getElementById('imageUploadId');
        img.value = null;
        setState(initialState);
    }

    return (
        <Card>
            <CardHeader>
                <Row>
                    <Col lg="12">
                        <h3 className="mb-0">Tạo Ảnh  (Kích thước 370x250*)</h3>
                    </Col>                                                                                                
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <img src={State.imageBase64} alt="..." style={{width: '370px', height: '250px'}}/>
                </Row>
                <Row>
                    <input type="file" accept="image/png, image/gif, image/jpeg"
                                        id="imageUploadId"
                                        onChange={(e) => ChangeImage(e.target.files)} />
                </Row>
            </CardBody>
            <CardFooter>
                <Row>
                    <Col lg="12">
                        <Button 
                                onClick={() => setState(initialState)}
                                color="danger">
                                    Hủy
                        </Button>

                        <Button style={{float: 'right'}}
                                onClick={() => OnHandleCreate()}
                                disabled={State.isDisableButton}
                                color="primary">
                                Tạo Mới Ảnh
                        </Button>
                    </Col> 
                </Row>
            </CardFooter>
        </Card>   
    );
}

export default CreateImage;
