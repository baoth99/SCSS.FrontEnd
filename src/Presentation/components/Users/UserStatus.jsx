import React, {useState, useEffect} from 'react';
import {
    Badge
  } from "reactstrap";

import {ACTIVE_NUM, BANNING_NUM,NOT_APPROVE_NUM,
          ACTIVE_STYLE, BANNING_STYLE, NOT_APPROVE_STYLE} from '../../../Infrastucture/utils/constants/CommonConstants';

import {ACTIVE, NOT_APPROVE, BANNING} from '../../../Infrastucture/utils/constants/MessageConstants';

const StatusState = (message, style) => {
    return {
        message : message,
        style : style
    }
}
const UserStatus = ({status}) => {
    const [AccountStatus, setAccountStatus] = useState(() => StatusState("Không Xác Định", "bg-dark"));

    useEffect(() => {
        function ChangeStatus(){
            switch (status) {
                case NOT_APPROVE_NUM:
                    setAccountStatus(StatusState(NOT_APPROVE, NOT_APPROVE_STYLE))
                    break;
                case ACTIVE_NUM:
                    setAccountStatus(StatusState(ACTIVE, ACTIVE_STYLE));
                    break;
                case BANNING_NUM:
                    setAccountStatus(StatusState(BANNING, BANNING_STYLE));
                    break
                default:
                    break;
            }
        }
        ChangeStatus();
    }, [])

    return (
        <Badge color="" className="badge-dot">
                    <i className={AccountStatus.style} />
                    {AccountStatus.message}
        </Badge>
    );
}

export default UserStatus;
