import React from 'react';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";

import { useHistory } from 'react-router-dom';

import { BsPersonLinesFill } from "react-icons/bs";

import Gender from '../Commons/Gender';
import UserStatus from './UserStatus';
import Role from '../Commons/Role';

const UserRow = ({stt, id, name, phone, gender, status, role, totalPoint}) => {

    const history = useHistory();
    const path = "/admin/users/" + id;
    
    const GoToUserDetail = () => {
        history.push(path);
    }

    
    return (
        <tr onDoubleClick={() => GoToUserDetail()} style={{cursor: 'pointer'}}>  
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
                        {name}
                    </span>
                </Media>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                        {phone}
                    </span>
                </Media>
            </td>
            <td>
                <Gender gender={gender}/>
            </td>
            <td>
                <UserStatus status={status}/>
            </td>
            <td>
                <Role role={role}/>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                       {totalPoint}
                    </span>
                </Media>
            </td>
            <td className="text-right">
            <UncontrolledDropdown>
                <DropdownToggle className="btn-icon-only text-light" role="button" size="sm" onClick={(e) => e.preventDefault()}>
                    <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem onClick={() => GoToUserDetail()}>
                        <BsPersonLinesFill/>
                        &nbsp;
                        Chi Tiết
                    </DropdownItem>              
                </DropdownMenu>
            </UncontrolledDropdown>
            </td>
        </tr>                           
    );
}

export default UserRow;
