import React from 'react';
import { ListGroup, Card, CardHeader, CardBody, Row, Col, ListGroupItem,Badge  } from 'reactstrap';
import {useSelector} from 'react-redux';
import TablePagination from '../../Commons/TablePagination';
import {ReplyCollectorComplaint, SearchCollectorComplaint} from '../../../../Application/redux/actions/ComplaintAction';
import {ChangeCollectorComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {RenderComplaintList} from '../../../../Infrastucture/helpers/CommonHelper';



const CollectorComplaintList = () => {
    const CollectorComplaintData = useSelector(state => state.CollectorComplaint);
    const formData = state => state.CollectorComplaintSearchForm;


    return (
        <Row className="mt-3">
            <div className="col">
                <Card className="shadow">
                    <CardHeader>
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Danh Sách Ý Kiến Phản Hồi Của Người Thu Gom</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            {RenderComplaintList(CollectorComplaintData.list, ReplyCollectorComplaint)}
                        </ListGroup>
                        <TablePagination total={CollectorComplaintData.total} dataState={formData} action={SearchCollectorComplaint} formAction={ChangeCollectorComplaintSearchForm}/>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default CollectorComplaintList;
