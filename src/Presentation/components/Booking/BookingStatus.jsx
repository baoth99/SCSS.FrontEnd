import React, {useState, useEffect} from 'react';
import {
    Badge
  } from "reactstrap";

import {PENDING_BOOKING, CANCELBYSELLER_BOOKING, CANCELBYCOLLECTOR_BOOKING, APPROVED_BOOKING, COMPLETED_BOOKING, CANCELBYSYSTEM_BOOKING,
        PENDING_BOOKING_STYLE, CANCELBYSELLER_BOOKING_STYLE, NOBODY_APPROVE_BOOKING_STYLE, APPROVED_BOOKING_STYLE, COMPLETED_BOOKING_STYLE} from '../../../Infrastucture/utils/constants/CommonConstants';

import {PENDING_BOOKING_MESSAGE, CANCELBYSELLER_BOOKING_MESSAGE, NOBODY_APPROVE_BOOKING_MESSAGE, APPROVED_BOOKING_MESSAGE, COMPLETED_BOOKING_MESSAGE,
        CANCELBYSYSTEM_MESSAGE} from '../../../Infrastucture/utils/constants/MessageConstants';
import {StatusState} from '../../../Infrastucture/utils/variables/InitialStateData';

const BookingStatus = ({status}) => {
    const [BookingStatus, setBookingStatus] = useState(() => StatusState('Không Xác Định', 'bg-dark'));

    useEffect(() => {
        function ChangeStatus() {
            switch (status) {
                case PENDING_BOOKING: 
                    setBookingStatus(StatusState(PENDING_BOOKING_MESSAGE, PENDING_BOOKING_STYLE))
                    break;
                case CANCELBYSELLER_BOOKING: 
                    setBookingStatus(StatusState(CANCELBYSELLER_BOOKING_MESSAGE, CANCELBYSELLER_BOOKING_STYLE))
                    break;
                case CANCELBYCOLLECTOR_BOOKING: 
                    setBookingStatus(StatusState(NOBODY_APPROVE_BOOKING_MESSAGE, NOBODY_APPROVE_BOOKING_STYLE))
                    break;
                case APPROVED_BOOKING: 
                    setBookingStatus(StatusState(APPROVED_BOOKING_MESSAGE, APPROVED_BOOKING_STYLE))
                    break;
                case COMPLETED_BOOKING: 
                    setBookingStatus(StatusState(COMPLETED_BOOKING_MESSAGE, COMPLETED_BOOKING_STYLE))
                    break;
                case CANCELBYSYSTEM_BOOKING: 
                    setBookingStatus(StatusState(CANCELBYSYSTEM_MESSAGE, NOBODY_APPROVE_BOOKING_STYLE))
                    break;
                default:
                    break;
            }
        }
        ChangeStatus()
    }, [status]);


    return (
        <Badge color="" className="badge-dot">
                    <i className={BookingStatus.style} />
                    {BookingStatus.message}
        </Badge>
    );
}

export default BookingStatus;
