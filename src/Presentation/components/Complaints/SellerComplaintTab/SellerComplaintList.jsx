import React from 'react';
import { ListGroup, Card, CardHeader, CardBody, Row, Col,  } from 'reactstrap';

import {useSelector} from 'react-redux';
import TablePagination from '../../Commons/TablePagination';
import {ReplySellerComplaint, SearchSellerComplaint} from '../../../../Application/redux/actions/ComplaintAction';
import {ChangeSellerComplaintSearchForm} from '../../../../Application/redux/actions/FormAction';
import {RenderComplaintList} from '../../../../Infrastucture/helpers/CommonHelper';

const Sellercomplaintlist = () => {
    const SellerComplaintData = useSelector(state => state.SellerComplaint);
    const formData = state => state.SellerComplaintSearchForm;

    return (
        <Row className="mt-3">
            <div className="col">
                <Card className="shadow">
                    <CardHeader>
                        <Row className="align-items-center">
                            <Col lg="9">
                                <h3 className="mb-0">Danh Sách Ý Kiến Phản Hồi Của Người Bán</h3>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <ListGroup> 
                            {RenderComplaintList(SellerComplaintData.list, ReplySellerComplaint)}
                        </ListGroup>
                        <TablePagination total={SellerComplaintData.total} dataState={formData} action={SearchSellerComplaint} formAction={ChangeSellerComplaintSearchForm}/>
                    </CardBody>
                </Card>
            </div>
        </Row>
    );
}

export default Sellercomplaintlist;
