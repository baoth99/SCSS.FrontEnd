import React from 'react';
import { ListGroup, Card, CardHeader, Col, Row } from 'reactstrap';
import {useSelector} from 'react-redux';
import TablePagination from '../../Commons/TablePagination';
import DCFeedbackItem from './DCFeedbackItem';
import {SearchDCFeedback} from '../../../../Application/redux/actions/FeedbackAction';
import {ChangeDCFeedbackSearchForm} from '../../../../Application/redux/actions/FormAction';
const ShowDCFeedback = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <DCFeedbackItem key={index} transactionCode={val.transactionCode} dealerName={val.dealerName}
                                dealerFeedback={val.dealerFeedback} collectorName={val.collectorName}
                                collectorFeedback={val.collectorFeedback} collectorRate={val.collectorRate}
                                feedbackDateTime={val.feedbackDateTime}/>
            )
        });
    }
    return result;
}

const DCFeedbackList = () => {
  const DCFeedbackData = useSelector(state => state.DataDCFeedback);
  const formData = state => state.DCFeedbackSearchForm;

    return (
        <Row className="mt-4">
            <div className="col">
                <Card className="shadow">
                  <CardHeader>
                      <Row className="align-items-center">
                          <Col lg="9">
                              <h3 className="mb-0">Danh Sách Ý Kiến Phản Hồi Của Giao Dịch Giữa Người Thu Mua Và Vựa</h3>
                          </Col>
                      </Row>
                  </CardHeader>
                  <ListGroup>
                    {ShowDCFeedback(DCFeedbackData.list)}
                  </ListGroup>
                  <TablePagination total={20} dataState={formData} action={SearchDCFeedback} formAction={ChangeDCFeedbackSearchForm}/>
                </Card>
            </div>
        </Row>
    );
}

export default DCFeedbackList;
