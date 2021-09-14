import React, {useState, useEffect} from 'react';

import {Media} from "reactstrap";


import { BiStreetView } from "react-icons/bi";
import { MdFace, MdHelpOutline } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

import {SELLER_NUM, COLLECTOR_NUM,DEALER_NUM, DEALER_MEM_NUM} from '../../../Infrastucture/utils/constants/CommonConstants';
import {COLLECTOR,DEALER,DEALER_MEM,SELLER} from '../../../Infrastucture/utils/constants/MessageConstants'

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
                    break;
                case DEALER_MEM_NUM:
                    setAccountRole(RoleState(DEALER_MEM,<BiStreetView/>));
                    break;
                default:
                    break;
            }
        }
        ChangeRole();
    }, [role])
    
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
