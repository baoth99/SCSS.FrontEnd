import React, { useState } from 'react';
import { UncontrolledAlert, Alert  } from 'reactstrap';

const AlertMessage = ({message}) => {
    return (
            <UncontrolledAlert className="mt-0" color={'success'} fade={false}>
                {message}
            </UncontrolledAlert>
    );
}

export default AlertMessage;
