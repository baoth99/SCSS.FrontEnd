import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";
import {useDispatch} from 'react-redux'
import {RemoveSC} from '../../../Application/redux/actions/SCAction';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';

const SCRow = ({id, stt, name, unit, createdBy, createdTime}) => {
    const dispatch = useDispatch();

    const history = useHistory();
    const path = "/admin/scrap-category/" + id;

    const GoToUserDetail = () => {
        history.push(path);
    }

    const RemoveSCAction = () => {
        const title = `Xác Nhận Xóa ${name}`;
        const message = `Bạn muốn xóa ${name}`;
        dispatch(
            ShowConfirmDialog(title, message, RemoveSC(id, false))
        );
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
                        {unit}
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
                <Media>
                    <span className="mb-0 text-sm">
                       {createdTime}
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
                <DropdownItem
                    onClick={() => GoToUserDetail()}
                >
                    Chi Tiết
                </DropdownItem>
                <DropdownItem
                    onClick={() => RemoveSCAction()}
                >
                    Xóa
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default SCRow;
