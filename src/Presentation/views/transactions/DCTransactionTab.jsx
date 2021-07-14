import React from 'react';

import DCTransactionSearchForm from '../../components/Transaction/DCTransaction/DCTransactionSearchForm';
import DCTransactionTable from '../../components/Transaction/DCTransaction/DCTransactionTable';

const DCTransactionTab = () => {
    return (
       <>
            <DCTransactionSearchForm/>
            <DCTransactionTable/>
       </>
    );
}

export default DCTransactionTab;
