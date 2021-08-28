import React from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
const logo = require("../../../assets/img/brand/logowed.png").default;

const RedirectLoading = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img className="rounded mx-auto d-block" style={{width: "500px", marginTop: "100px"}} src={logo}/>
            <CircleToBlockLoading size='large'/>
        </div>
    )
}

export default RedirectLoading;
