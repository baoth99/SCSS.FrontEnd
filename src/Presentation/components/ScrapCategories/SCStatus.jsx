import React,{useState, useEffect} from 'react';
import {Badge} from "reactstrap";
import {StatusState} from '../../../Infrastucture/utils/variables/InitialStateData';

import {SCRAP_CATEGORY_ACTIVE, SCRAP_CATEGORY_DE_ACTIVE, ACTIVE_STYLE, BANNING_STYLE,
    SCRAP_CATEGORY_ACTIVE_MESSAGE, SCRAP_CATEGORY_DE_ACTIVE_MESSAGE} from '../../../Infrastucture/utils/constants/CommonConstants';

const SCStatus = ({status}) => {
    const [SCStatus, setSCStatus] = useState(() => StatusState("Không Xác Định", "bg-dark"));

    useEffect(() => {
        function ChangeStatus(){
            switch (status) {
                case SCRAP_CATEGORY_ACTIVE:
                    setSCStatus(StatusState(SCRAP_CATEGORY_ACTIVE_MESSAGE, ACTIVE_STYLE));
                    break;
                case SCRAP_CATEGORY_DE_ACTIVE:
                    setSCStatus(StatusState(SCRAP_CATEGORY_DE_ACTIVE_MESSAGE, BANNING_STYLE));
                    break
                default:
                    break;
            }
        }
        ChangeStatus();
    }, [status])
    return (
        <Badge color="" className="badge-dot">
                <i className={SCStatus.style} />
                {SCStatus.message}
        </Badge>
    );
}

export default SCStatus;
