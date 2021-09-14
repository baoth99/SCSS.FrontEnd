import React, {useState, useEffect} from 'react';

import { BsLock, BsCheckCircle, BsUnlock, BsQuestionCircle } from "react-icons/bs";

import {ACTIVE_NUM, BANNING_NUM, NOT_APPROVE_NUM, 
    APPROVE_ACCOUNT_STYLE, BLOCK_ACCOUNT_STYLE, UNBLOCK_ACCOUNT_STYLE} from '../../../Infrastucture/utils/constants/CommonConstants';
import {BLOCK_BUTTON, APPROVE_BUTTON, UNBLOCK_BUTTON} from '../../../Infrastucture/utils/constants/MessageConstants';
import {ShowConfirmDialog} from '../../../Application/redux/actions/ModalAction';

import {useDispatch} from 'react-redux'
import {ChangeAccountStatus} from '../../../Application/redux/actions/UserAction';


const StatusState = (message, icon, style, changeStatus) => {
   return {
        mesage : message,
        icon : icon,
        style: style,
        changeStatus: changeStatus
   }
}

const UserStatusButton = ({id,status, name, phone}) => {
    const dispatch = useDispatch();
    const [AccountStatus, setAccountStatus] = useState(() => StatusState("Không Xác Định", <BsQuestionCircle/>, "btn btn-dark", 555));

    const ChangeStatus = () => {
        let changeStatus = 0;
        switch (status) {
            case ACTIVE_NUM:
                changeStatus = 3
                break;
            case BANNING_NUM:
                changeStatus = 2
                break;
            default:
                break;
        }
        const title = changeStatus == 2 ? `Mở Khóa Tài Khoản` :`Khóa Tài Khoản`;
        const statusMess = changeStatus == 2 ? `Xác Thực Mở Khóa` : `Xác Thực Khóa`;
        const message = statusMess + ` Tài Khoản ${name} Với Số ĐT ${phone}`;
        dispatch(
            ShowConfirmDialog(title, message, ChangeAccountStatus(id, changeStatus)) 
        )
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
    }, [status])

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
