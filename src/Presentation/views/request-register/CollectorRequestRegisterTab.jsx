import React from 'react';
import CollectorRequestRegisterTable from '../../components/Request-Register/Collectors/CollectorRequestRegisterTable';
import CollectorRequestRegisterSearchForm from '../../components/Request-Register/Collectors/CollectorRequestRegisterSearchForm';
const CollectorRequestRegisterTab = () => {
    return (
        <>
            <CollectorRequestRegisterSearchForm/>
            <CollectorRequestRegisterTable/>
        </>
    );
}

export default CollectorRequestRegisterTab;
