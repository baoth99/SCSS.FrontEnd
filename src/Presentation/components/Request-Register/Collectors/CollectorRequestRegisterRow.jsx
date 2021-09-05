import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";
import Gender from '../../Commons/Gender';
import UserStatus from '../../Users/UserStatus';

const CollectorRequestRegisterRow = ({stt, id, phone, name, gender, registerTime, status}) => {
    const history = useHistory();
    const path = "/admin/request-register/collector/" + id;

    const GoToCollectorDetai = () => {
         history.push(path);
    }

    return (
        <tr onDoubleClick={() => GoToCollectorDetai()} style={{cursor: 'pointer'}}>
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
                        {phone}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {name}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <Gender gender={gender}/>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {registerTime}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <UserStatus status={status}/>
                </Media>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" role="button" size="sm" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem onClick={() => GoToCollectorDetai()}>
                            Chi Tiết
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default CollectorRequestRegisterRow;
