import React, {useState, useEffect} from 'react';

import { BsLock, BsCheckCircle, BsUnlock, BsQuestionCircle } from "react-icons/bs";

import {ACTIVE_NUM, BANNING_NUM, NOT_APPROVE_NUM, 
    APPROVE_ACCOUNT_STYLE, BLOCK_ACCOUNT_STYLE, UNBLOCK_ACCOUNT_STYLE} from '../../utils/constants/CommonConstants';
import {BLOCK_BUTTON, APPROVE_BUTTON, UNBLOCK_BUTTON} from '../../utils/constants/MessageConstants';


const StatusState = (message, icon, style, changeStatus) => {
   return {
        mesage : message,
        icon : icon,
        style: style,
        changeStatus: changeStatus
   }
}

const UserStatusButton = ({id,status}) => {
    
    const [AccountStatus, setAccountStatus] = useState(() => StatusState("Không Xác Định", <BsQuestionCircle/>, "btn btn-dark", 555));

    const ChangeStatus = () => {
        alert(id + '-' + AccountStatus.changeStatus);
    }

    useEffect(() => {
        function ChangeStatus(){
            switch (status) {
                case ACTIVE_NUM:
                    setAccountStatus(StatusState(BLOCK_BUTTON, <BsLock/>, BLOCK_ACCOUNT_STYLE, BANNING_NUM))
                    break;
                case BANNING_NUM:
                    setAccountStatus(StatusState(UNBLOCK_BUTTON, <BsUnlock/>, UNBLOCK_ACCOUNT_STYLE, ACTIVE_NUM));
                    break;
                case NOT_APPROVE_NUM: {
                    setAccountStatus(StatusState(APPROVE_BUTTON, <BsCheckCircle/>, APPROVE_ACCOUNT_STYLE, ACTIVE_NUM));                   
                }
                default:
                    break;
            }
        }
        ChangeStatus();
    }, [])

    return (
        <>
          <button type="button" className={AccountStatus.style} onClick={() => ChangeStatus()}>
              {AccountStatus.icon}
              &nbsp;
              {AccountStatus.mesage}
          </button>           
        </>
    );
}

export default UserStatusButton;
