import React from 'react';
import { ListGroupItem, ListGroupItemText, Badge } from 'reactstrap';
import ReplyComplaint from './ReplyComplaint';

const ComplaintItem = ({id, code, complaintContent, ownerInfo, complaintedAccountInfo, repliedContent, wasReplied, complaintTime, dealerAccountName, action}) => {
    return (
        <ListGroupItem style={{backgroundColor: wasReplied ? '#FFFFFF' : '#D9E9C8'}}>
            <h3>
                Từ  <Badge color="success">{code}</Badge>  
            </h3>
            {
                dealerAccountName != null ? ( <ListGroupItemText>
                                                        <Badge color="primary" pill>
                                                            Chủ Vựa "{dealerAccountName}"
                                                        </Badge>
                                                    </ListGroupItemText>) : null
            }
            <ListGroupItemText>
                <Badge color="warning" pill>
                    Phản hồi từ "{ownerInfo}" : 
                </Badge>
                &nbsp; {complaintContent}
                <br/> 
            </ListGroupItemText>
            {
                complaintedAccountInfo != "-" ? ( <ListGroupItemText>
                                                    <Badge color="primary" pill>
                                                        Đến "{complaintedAccountInfo}"
                                                    </Badge>
                                                  </ListGroupItemText>) : null
            }  
            
            {
                wasReplied ? (<RepliedContent repliedContent={repliedContent}/>) :
                                (<ReplyComplaint complaintId={id} action={action}/>)
            }   
               
            <ListGroupItemText>
                <small className="text-muted">{complaintTime}</small>                  
            </ListGroupItemText> 
        </ListGroupItem>
    );
}

export default ComplaintItem;

const RepliedContent = ({repliedContent}) => {
    return (
        <ListGroupItemText>
            <Badge color="info" pill>
                Phản hồi từ người quản trị : 
            </Badge>
            &nbsp; {repliedContent}
        </ListGroupItemText>
    );
}