import React from 'react';
import {
    Col,
    Card,
    CardHeader,
    Table,
    Row
  } from "reactstrap";
import BookingColumn from './BookingColumn';
import BookingRow from './BookingRow';
import TablePagination from '../Commons/TablePagination'
import {ChangeBookingSearchForm} from '../../../Application/redux/actions/FormAction';
import {SearchBooking} from '../../../Application/redux/actions/BookingAction';
import {useSelector} from 'react-redux';



const ShowBooking = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <BookingRow key={index} stt={index} id={val.id}
                            collectingRequestCode={val.collectingRequestCode} collectingRequestDate={val.collectingRequestDate}
                            collectingRequestRangeTime={val.collectingRequestRangeTime}
                            requestedBy={val.requestedBy} recevicedBy={val.recevicedBy} status={val.status}/>
            )
        });
    }
    return result;
}


const BookingTable = () => {
    const BookingData = useSelector(state => state.DataBooking);

    const formData = state => state.BookingSearchForm;

    return (
        <>
            <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row className="align-items-center">
                                <Col lg="9">
                                    <h3 className="mb-0">Bảng Loại Thông Tin Lịch Đặt</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-hover" responsive>
                            <BookingColumn/>
                            <tbody>
                                {ShowBooking(BookingData.list)}
                            </tbody>
                        </Table>
                        <TablePagination total={BookingData.total} dataState={formData} action={SearchBooking} formAction={ChangeBookingSearchForm}/>
                    </Card>
                </div>
            </Row>
        </>
    );
}

export default BookingTable;
