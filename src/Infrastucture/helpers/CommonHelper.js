import {COLLECTOR_NUM, DEALER_NUM } from '../utils/constants/CommonConstants'
import {DEALER_LEADER, DEALER_LEADER_MESSAGE, DEALER_MEMBER, DEALER_MEMBER_MESSAGE } from '../utils/constants/CommonConstants'
import {COLLECTOR,  DEALER } from '../utils/constants/MessageConstants'

import ComplaintItem from '../../Presentation/components/Complaints/ComplaintItem';

export const RenderComboBox = (list) => {
    let result = null;
    if(!Array.isArray(list)) {
        return result;
    }
    if(list.length > 0) {
        result = list.map((value, index) => {
            return <option key={index} value={value.key}>{value.val}</option>          
        })
    }
    return result;
}

export const GetImageToShow = (extension, base64) => {
    //data:image/png;base64,
    const data = "data:image/" + extension.toLowerCase() + ";base64," + base64;
    return data;
}

export const GetPrice = (price) => `${price} VNĐ`;

export const GetRoleMessage = (status) => {
    switch (status) {
        case DEALER_NUM: {
            return DEALER;
        }
        case COLLECTOR_NUM: {
            return COLLECTOR;
        }
        default:
           return "Không Xác Định";
    }
}

export const GetDealerType = (type) => {
    switch (type) {
        case DEALER_LEADER: {
            return DEALER_LEADER_MESSAGE;
        }
        case DEALER_MEMBER: {
            return DEALER_MEMBER_MESSAGE;
        }
        default:
            return "Không Xác Định";
    }
}

export const RenderComplaintList = (data, action) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <ComplaintItem key={index} id={val.id} code={val.code} complaintContent={val.complaintContent} 
                                           ownerInfo={val.ownerInfo} complaintedAccountInfo={val.complaintedAccountInfo}
                                           repliedContent={val.repliedContent} wasReplied={val.wasReplied} complaintTime={val.complaintTime}
                                           dealerAccountName={val.dealerAccountName} action={action} />
            )
        });
    }
    return result;
}