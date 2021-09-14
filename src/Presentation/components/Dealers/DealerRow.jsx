import React from 'react';
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media} from "reactstrap";
import { useHistory } from 'react-router-dom';

const DealerRow = ({id, stt, dealerName, dealerPhone, managedBy, isSubcribed, dealerType, dealerStatus}) => {
    const history = useHistory();
    const path = "/admin/dealers/" + id;
    const GoToDealerDetail = () => {
        history.push(path);
    }

    return (
         <tr onDoubleClick={() => GoToDealerDetail()} style={{cursor: 'pointer'}}>
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
                        {dealerName}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {dealerPhone}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {managedBy}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {isSubcribed ? 'Right' : 'Wrong'}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {dealerType}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {dealerStatus ? 'Right' : 'Wrong'}
                    </span>
                </Media>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" role="button" size="sm" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem onClick={() => GoToDealerDetail()}>
                            Chi Tiết
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
         </tr>
    );
}

export default DealerRow;
