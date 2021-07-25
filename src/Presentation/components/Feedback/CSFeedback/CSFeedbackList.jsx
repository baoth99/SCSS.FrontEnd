import React from 'react';
import { ListGroup, Card, CardHeader, Row, Col } from 'reactstrap';
import {useSelector} from 'react-redux';
import TablePagination from '../../Commons/TablePagination';
import CSFeedbackItem from './CSFeedbackItem';
import {SearchCSFeedback} from '../../../../Application/redux/actions/FeedbackAction';
import {ChangeCSFeedbackSearchForm} from '../../../../Application/redux/actions/FormAction';

const ShowCSFeedback = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <CSFeedbackItem key={index} transactionCode={val.transactionCode} sellerName={val.sellerName}
                                sellerFeedback={val.sellerFeedback} collectorName={val.collectorName}
                                collectorFeedback={val.collectorFeedback} sellerRate={val.sellerRate}
                                feedbackDateTime={val.feedbackDateTime}/>
            )
        });
    }
    return result;
}

const CSFeedbackList = () => {
    const CSFeedbackData = useSelector(state => state.DataCSFeedback);
    const formData = state => state.CSFeedbackSearchForm;

    return (
        <Row className="mt-4">
             <div className="col">              
                <Card className="shadow">
                    <CardHeader>
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Danh Sách Ý Kiến Phản Hồi Của Giao Dịch Giữa Người Thu Mua Và Người Bán</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <ListGroup>
                        {ShowCSFeedback(CSFeedbackData.list)}
                    </ListGroup>
                    <TablePagination total={20} dataState={formData} action={SearchCSFeedback} formAction={ChangeCSFeedbackSearchForm}/>
                </Card>
             </div>
        </Row>
    );
}

export default CSFeedbackList;
