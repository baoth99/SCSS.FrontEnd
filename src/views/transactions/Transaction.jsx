import React from 'react';
import TransactionDashboard from './TransactionDashboard';
//core components
import Header from "../../components/Headers/Header";

const Transaction = () => {
    return (
        <>
            <Header />
        {/* Page content */}   
            <TransactionDashboard/>    
        </>
    );
}

export default Transaction;
