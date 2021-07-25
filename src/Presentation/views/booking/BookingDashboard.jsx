import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import BookingSearchForm from '../../components/Booking/BookingSearchForm';
import BookingTable from '../../components/Booking/BookingTable';
import {useDispatch} from 'react-redux';
import {initialBookingSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
import {SearchBooking} from '../../../Application/redux/actions/BookingAction';

const BookingDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            SearchBooking({...initialBookingSearchFormState})
        )
    }, []);
    return (
        <Container className="mt--7" fluid>
            <BookingSearchForm/>
            <BookingTable/>
        </Container>
    );
}

export default BookingDashboard;
