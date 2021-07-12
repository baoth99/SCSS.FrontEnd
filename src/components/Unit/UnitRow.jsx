import React, { useState } from 'react'


import {
    Row,
    Col,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Collapse,
    Media
  } from "reactstrap";

import {useDispatch} from 'react-redux'

import { AvForm, AvInput } from 'availity-reactstrap-validation';

import {ShowConfirmDialog} from '../../redux/actions/ModalAction';

import { RemoveUnit } from 'redux/actions/UnitAction';

export default function UnitRow({stt, id,  name, createdTime, createdBy}) {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const ShowUnitDetail = () => {
        setIsOpen(!isOpen);
    }

    const RemoveUnitAction = () => {
        const title = `Xác Nhận Xóa Đơn Vị ${name}`;
        const message = `Bạn muốn xóa đơn vị ${name}`;
        dispatch(
            ShowConfirmDialog(title, message, RemoveUnit(id))
        );
    }

    return (
        <>
            <tr onDoubleClick={() => ShowUnitDetail()} style={{cursor: 'pointer'}}>
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
                            {createdTime}
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
                                onClick={() => ShowUnitDetail()}
                            >
                                {isOpen ? "Thu Gọn" : "Chỉnh Sửa"}
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => RemoveUnitAction()}
                            >
                                Xóa
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </td>
            </tr>
        </>
    )
}
