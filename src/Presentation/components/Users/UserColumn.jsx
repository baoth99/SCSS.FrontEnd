import React from 'react';
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

const UserColumn = () => {

    return (
        <thead className="thead-light">
            <tr>
                <th scope="col">Số Thứ Tự</th>
                <th scope="col">
                    Họ Và Tên 
                </th>
                <th scope="col">Số Điện Thoại</th>
                <th scope="col">Giới Tính</th>
                <th scope="col">Trạng Thái</th>
                <th scope="col">Quyền</th>
                <th scope="col">
                    Tổng Điểm
                </th>
                
                <th scope="col" />
            </tr>
        </thead>
    );
}

export default UserColumn;
