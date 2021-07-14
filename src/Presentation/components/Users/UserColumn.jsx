import React from 'react';
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

const UserColumn = () => {


    const SortIncrease = (name) => {
        console.log(name);
    }

    const SortDescrease = (name) => {
        console.log(name);
    }

    return (
        <thead className="thead-light">
            <tr>
                <th scope="col">Số Thứ Tự</th>
                <th scope="col">
                    Họ Và Tên 
                    &nbsp;
                    <TiArrowDownThick name="name decrease" onClick={(e)=> SortDescrease(e.target.name)} style={{cursor: 'pointer'}}/> 
                    <TiArrowUpThick name="name increase"  onClick={(e)=> SortIncrease(e.target.name)} style={{cursor: 'pointer'}}/>
                </th>
                <th scope="col">Số Điện Thoại</th>
                <th scope="col">Giới Tính</th>
                <th scope="col">Trạng Thái</th>
                <th scope="col">Quyền</th>
                <th scope="col">
                    Tổng Điểm
                    &nbsp;
                    <TiArrowDownThick name="totalPoint decrease" onClick={(e)=> SortDescrease(e.target.name)} style={{cursor: 'pointer'}}/> 
                    <TiArrowUpThick name="totalPoint increase"  onClick={(e)=> SortIncrease(e.target.name)} style={{cursor: 'pointer'}}/>
                </th>
                
                <th scope="col" />
            </tr>
        </thead>
    );
}

export default UserColumn;
