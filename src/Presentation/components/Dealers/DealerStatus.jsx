import React, {useState, useEffect} from 'react';
import {StatusState} from '../../../Infrastucture/utils/variables/InitialStateData';
import { Badge } from "reactstrap";

const DealerStatus = ({status}) => {
    const [DealerStatus, setDealerStatus] = useState(() => StatusState('Không xác định', 'bg-dark'));

    useEffect(() => {
       function ChangeDealerStatus() {
            switch (status) {
                case true:
                    setDealerStatus(StatusState("Đang hoạt động", "bg-success"))
                    break;
                case false:
                    setDealerStatus(StatusState("Tạm Ngưng hoạt động", "bg-danger"))
                    break;
                default:
                    break;
            }
       }
       ChangeDealerStatus();
    }, [status])

    return (
        <Badge color="" className="badge-dot">
                    <i className={DealerStatus.style} />
                    {DealerStatus.message}
        </Badge>
    );
}

export default DealerStatus;
