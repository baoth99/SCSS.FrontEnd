import React from 'react';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";


const CSTransactionRow = ({stt, id, transactionCode, sellerName, sellerPhone, collectorName, collectorPhone, transactionTime, totalPrice}) => {
    return (
        <tr onDoubleClick={() => alert(id)} style={{cursor: 'pointer'}}>
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
                        {transactionCode}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {sellerName}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {sellerPhone}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {collectorName}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {collectorPhone}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {transactionTime}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {totalPrice}
                    </span>
                </Media>
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
                        <DropdownItem onClick={() => alert(id)}>
                            Chi Tiết
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default CSTransactionRow;
