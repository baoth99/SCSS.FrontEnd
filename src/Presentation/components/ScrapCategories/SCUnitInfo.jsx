import React, {useState, useEffect} from 'react';
import SCStatus from './SCStatus';
import {GetPrice} from '../../../Infrastucture/helpers/CommonHelper';


const ShowScrapCategoryUnit = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <SCUnitRow key={index} price={val.price}  unit={val.unit}
                           status={val.status} updatedTime={val.updatedTime}/>
            )
        });
    }
    return result;
}


const SCUnitInfo = ({data}) => {
    const [Units, setUnits] = useState([]);

    useEffect(() => {
        function FetchData() {
            setUnits(data);
        }
        FetchData();
    }, [data])

    return (
        <table className="table table-hover">
            <thead style={{display: 'table', width: '90%', tableLayout: 'fixed'}}>
                <tr style={{display: 'table', width: '90%', tableLayout: 'fixed'}}>
                    <th scope="col">Đơn Vị</th>
                    <th scope="col">Giá Tiền</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Thời Điểm Dừng SD</th>
                </tr>
            </thead>
            <tbody style={{height: '270px', display: 'block', overflow: 'auto', tableLayout: 'fixed'}}>
                {ShowScrapCategoryUnit(Units)}
            </tbody>
        </table>
    );
}

export default SCUnitInfo;

const SCUnitRow = ({unit, price, status, updatedTime}) => {
    return (
        <tr>
            <td>{unit}</td>
            <td>{GetPrice(price)}</td>
            <td><SCStatus status={status}/></td>
            <td>{updatedTime}</td>
        </tr>
    );
}
