import React from 'react';
import { ListGroup, Card, CardHeader, CardBody, Row, Col, ListGroupItem,Badge  } from 'reactstrap';
import {useSelector} from 'react-redux';
import TablePagination from '../../Commons/TablePagination';
import {ReplyDealerComplaint, SearchDealerComplaint} from '../../../../Application/redux/actions/ComplaintAction';
import {ChangeDealerComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {RenderComplaintList} from '../../../../Infrastucture/helpers/CommonHelper';

const DealerComplaintList = () => {
    const DealerComplaintData = useSelector(state => state.DealerComplaint);
    const formData = state => state.DealerComplaintSearchForm;

    return (
        <Row className="mt-3">
            <div className="col">
                <Card className="shadow">
                    <CardHeader>
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Danh Sách Ý Kiến Phản Hồi Của Vựa</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            {RenderComplaintList(DealerComplaintData.list, ReplyDealerComplaint)}
                        </ListGroup>
                        <TablePagination total={DealerComplaintData.total} dataState={formData} action={SearchDealerComplaint} formAction={ChangeDealerComplaintSearchForm}/>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default DealerComplaintList;
