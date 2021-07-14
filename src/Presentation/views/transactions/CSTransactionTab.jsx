import React from 'react';

import CSTransactionSearchForm from '../../components/Transaction/CSTransaction/CSTransactionSearchForm';
import CSTransactionTable from '../../components/Transaction/CSTransaction/CSTransactionTable';
const CSTransactionTab = () => {
    return (
        <>
            <CSTransactionSearchForm/>
            <CSTransactionTable/>
        </>
    );
}

export default CSTransactionTab;
