import React from 'react';

const BookingColumn = () => {
    return (
        <thead className="thead-light">
            <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã Đặt Lịch</th>
                <th scope="col">Ngày Đặt Lịch</th>
                <th scope="col">Khoảng Thời Gian</th>
                <th scope="col">Người Đặt</th>               
                <th scope="col">Người Nhận</th>               
                <th scope="col">Tình Trạng</th>               
                <th scope="col" />
            </tr>
        </thead>
    );
}

export default BookingColumn;
