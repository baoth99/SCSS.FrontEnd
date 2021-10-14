import React, {useState, useEffect, useCallback} from 'react';
import {Card, CardHeader, CardBody, CardFooter, Row, Col, Button} from "reactstrap";
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import {useDispatch, useSelector} from 'react-redux';
import {TransFeeUsing} from '../../../Infrastucture/utils/variables/InitialStateData';
import {GetSellCollectTransFee, ModifySellCollectTransFee} from '../../../Application/redux/actions/TransactionServiceAction';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';


const ShowFeeHistories = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <li key={index}>Phí: {val.percent} | Thời điểm dừng: {val.deActiveTime}</li>
            )
        });
    }
    return result;
}


const CPSellCollectFee = () => {
    const dispatch = useDispatch();
    const sellCollectTransFee = useSelector(state => state.SellCollectTransFee);
    const {percent, histories} = sellCollectTransFee;

    const [FeeData, setFeeData] = useState(TransFeeUsing);

    useEffect(() => {
        function SetFeeData() {
            setFeeData(percent);
        }
        SetFeeData();
    }, [percent])


    const OnRefresh = useCallback(
        () => {
            dispatch(
                GetSellCollectTransFee()
            );
            setFeeData(percent);
        },
        [percent],
    )

    const OnApply = () => {
        const title = "Thay Đổi Phí Giao Dịch Giữa Người Bán Và Người Thu Mua";
        const message = "Bạn có chắc muốn thay đổi phí giao dịch giữa người bán và người thu mua";
        dispatch(
            ShowConfirmDialog(title, message,  ModifySellCollectTransFee(FeeData)) 
        )
    }

    return (
        <Row className="mt--0">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardHeader>
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Cài Đặt Phí Giao Dịch Giữa Người Bán Và Người Thu Mua</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-3">
                                <Row>
                                    <Col lg="6">
                                        <label className="form-control-label">
                                            Phí dịch vụ giữa người thu gom và người bán (%)
                                        </label>
                                        <AvInput
                                            className="form-control-alternative"
                                            name="percent"
                                            type="number"
                                            min="0"
                                            onChange={(e) => setFeeData(e.target.value)}
                                            value={FeeData}
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <Row>
                                            <label className="form-control-label">
                                            </label>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <Button className="my-4" color="primary" 
                                                        type="button" size="lg"
                                                        onClick={() => OnApply()}>
                                                    Áp Dụng
                                                </Button>
                                            </Col>
                                            <Col lg="6">
                                                <Button className="my-4" color="primary" 
                                                        type="button" size="lg" 
                                                        onClick={OnRefresh}>
                                                    Làm Mới
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <h3 className="mb-0">Lịch Sử </h3>
                            <ul style={{height: "150px", overflow: "scroll"}}>
                                {ShowFeeHistories(histories)}
                            </ul>
                        </CardFooter>
                    </Card>
                </AvForm>
            </div>
        </Row>
    );
}

export default CPSellCollectFee;
