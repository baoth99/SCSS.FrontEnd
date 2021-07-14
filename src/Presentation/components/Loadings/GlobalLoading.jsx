import React from 'react';
import { CommonLoading } from 'react-loadingg';
import { useSelector } from 'react-redux';

const GlobalLoading = () => {
    const {showLoading} = useSelector(state => state.Loading);

    let xhtml = null
    if (showLoading) {
        xhtml = (
            <div style={{position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', zIndex: '99', background: 'rgba(0, 0, 0, 0.4)'}}>
                <CommonLoading size='large'/>
            </div>
        )
    }
   return xhtml;
}

export default GlobalLoading;
