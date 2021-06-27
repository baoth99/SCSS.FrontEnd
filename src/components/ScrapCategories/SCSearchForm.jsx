import React, {useState} from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
  } from "reactstrap";

import ComboBox from '../Commons/ComboBox';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux';
import {ChangeSCSearchForm, ClearSCSearchForm} from '../../redux/actions/FormAction';
import {initialSCSearchFormState} from '../../variables/InitialStateData';
import {SearchSC} from '../../redux/actions/SCAction';

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


const SCSearchForm = () => {
    const dispatch = useDispatch();
    //const formData = useSelector(state => state.SCSearchForm)

    const [formData, setFormData] = useState(() => initialSCSearchFormState)



    const OnHandleChange = (evt) => {
        let name = evt.name;
        setFormData({
            ...formData,
            [name]: evt.value
        })
    }

    const SearchData = () => {
        dispatch(
            ChangeSCSearchForm({
                ...formData
            })
        );
        dispatch(
            SearchSC({...formData})
        )
        //console.log(formData);      
    };

    const Refresh = () => {
        setFormData(initialSCSearchFormState)
        dispatch(
            ChangeSCSearchForm({
                ...initialSCSearchFormState
            })
        );
        dispatch(
            SearchSC({...initialSCSearchFormState})
        )
    }

    const ClearForm = () => {
        setFormData(initialSCSearchFormState);
    }

    return (
        <Row className="mt-5">
            <div className="col">
                <Card className="shadow">
                    <CardBody>
                        <Form>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="4">
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
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => OnHandleChange(e.target)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="5">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Miêu Tả
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                name="description"
                                                value={formData.description}
                                                onChange={(e) => OnHandleChange(e.target)}
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
                                                Đơn vị
                                            </label>
                                            <div className="alternative">
                                                <ComboBox list={SeedData} leftRight={30} 
                                                        topBottom={10} onSelect={(val) => setFormData({
                                                            ...formData,
                                                            unit: parseInt(val)
                                                        })} 
                                                        defaultVal={formData.unit}/>
                                            </div>   
                                        </FormGroup>
                                     </Col>
                                </Row>
                            </div>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <div className="pl-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" block
                                                onClick={() => SearchData()}>
                                            <BsSearch/>
                                            &nbsp;
                                            Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" type="button" size="lg" block
                                                onClick={() => Refresh()}>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                onClick={() => ClearForm()}
                                                block>
                                            <BsXCircle/>
                                            &nbsp;
                                            Xóa
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                    </CardFooter>
                </Card>
            </div>
        </Row>
    );
}

export default SCSearchForm;
