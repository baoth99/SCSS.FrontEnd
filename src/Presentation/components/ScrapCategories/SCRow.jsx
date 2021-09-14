import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";
import Role from '../Commons/Role';
import SCStatus from './SCStatus';
const SCRow = ({id, stt, name, status, createdBy, role, createdTime}) => {
    const history = useHistory();
    const path = "/admin/scrap-category/" + id;
    const GoToSCDetail = () => {
        history.push(path);
    }

    return (
        <tr onDoubleClick={() => GoToSCDetail()} style={{cursor: 'pointer'}}>  
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
                       {createdBy}
                    </span>
                </Media>
            </td>
            <td>
                <Role role={role}/>
            </td>
            <td>
                <Media>
                    <span className="mb-0 text-sm">
                       {createdTime}
                    </span>
                </Media>
            </td>
            <td>
                <SCStatus status={status}/>
            </td>
            
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" role="button" size="sm">
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem onClick={() => GoToSCDetail()}>
                            Chi Tiết
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default SCRow;
