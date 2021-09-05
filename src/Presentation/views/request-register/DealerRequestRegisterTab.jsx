import React from 'react';
import DealerRequestRegisterTable from '../../components/Request-Register/Dealers/DealerRequestRegisterTable';
import DealerRequestRegisterSearchForm from '../../components/Request-Register/Dealers/DealerRequestRegisterSearchForm';
const DealerRequestRegisterTab = () => {
    return (
        <>
            <DealerRequestRegisterSearchForm/>
            <DealerRequestRegisterTable/>
        </>
    );
}

export default DealerRequestRegisterTab;
