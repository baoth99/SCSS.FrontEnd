import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";

import BookingStatus from './BookingStatus';

const BookingRow = ({stt, id, bookingCode, bookingDate, bookingRangeTime, bookingBy, bookingReceive, status}) => {
    const history = useHistory();

    const path = "/admin/booking/" + id;

    const GoToBookingDetail = () => {
        history.push(path);
    }

    return (
        <tr onDoubleClick={() => GoToBookingDetail()} style={{cursor: 'pointer'}}>
             <th scope="row">
                <Media>
                    <span className="mb-0 text-sm">
                       {stt}
                    </span>
                </Media>
            </th>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {bookingCode}
                    </span>
                </Media>
            </td>           
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {bookingDate}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {bookingRangeTime}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {bookingBy}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {bookingReceive}
                    </span>
                </Media>
            </td>
            <td>
                <BookingStatus status={status}/>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                    className="btn-icon-only text-light"
                    role="button"
                    size="sm"
                    color="#49EE86"
                    onClick={(e) => e.preventDefault()}
                    >
                    <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                onClick={() => GoToBookingDetail()}
                            >
                                Chi Tiết
                            </DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default BookingRow;
