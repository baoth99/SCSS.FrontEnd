import React, {useState, useEffect} from 'react';

import {Media} from "reactstrap";


import { BiStreetView } from "react-icons/bi";
import { MdFace, MdHelpOutline } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

import {SELLER_NUM, COLLECTOR_NUM,DEALER_NUM} from '../../utils/constants/CommonConstants';
import {COLLECTOR,DEALER,SELLER} from '../../utils/constants/MessageConstants'

const RoleState = (message, icon) => {
    return {
        message: message,
        icon : icon
    }
}

const Role = ({role}) => {
    const [AccountRole, setAccountRole] = useState(RoleState("Không Xác Định", <MdHelpOutline/>));

    useEffect(() => {
        function ChangeRole(){
            switch (role) {
                case SELLER_NUM:
                    setAccountRole(RoleState(SELLER, <MdFace/>))
                    break;
                case DEALER_NUM:
                    setAccountRole(RoleState(DEALER,<BiStreetView/>));
                    break;
                case COLLECTOR_NUM:
                    setAccountRole(RoleState(COLLECTOR, <GrUserWorker/>));
                    break
                default:
                    break;
            }
        }
        ChangeRole();
    }, [])
    
    return (
        <Media>
            <span className="text-sm">
                {AccountRole.icon}
                &nbsp;
                {AccountRole.message}
            </span>
        </Media>
    );
}

export default Role;
