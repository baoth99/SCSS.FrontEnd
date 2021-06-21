import React from 'react';
import { CommonLoading } from 'react-loadingg';

const GlobalLoading = () => {
    return (
        <div style={{position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', zIndex: '99', background: 'rgba(0, 0, 0, 0.4)'}}>
            <CommonLoading size='large'/>
        </div>
    );
}

export default GlobalLoading;
