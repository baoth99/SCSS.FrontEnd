import React from 'react';
import { ListGroupItem, ListGroupItemText, Badge } from 'reactstrap';
import ReplyFeedback from '../ReplyFeedback';
import {ReplySellerFeedback} from '../../../../Application/redux/actions/FeedbackAction';


const CSFeedbackItem = ({id, collectingRequestCode, feedbackContent, feedbackTime, repliedContent, sellingInfo, buyingInfo, wasReplied}) => {

    return (
        <ListGroupItem style={{backgroundColor: wasReplied ? '#FFFFFF' : '#D9E9C8'}}>
            <h2>
                Phản hồi của yêu cầu thu gom <Badge color="success">{collectingRequestCode}</Badge>  
            </h2>
            <ListGroupItemText>
                <Badge color="warning" pill>
                    Phản hồi từ người bán "{sellingInfo}" : 
                </Badge>
                &nbsp; {feedbackContent}
                <br/> 
            </ListGroupItemText>
            {
                buyingInfo != "-" ? ( <ListGroupItemText>
                                        <Badge color="primary" pill>
                                            Người Thu Gom "{buyingInfo}"
                                        </Badge>
                                </ListGroupItemText>) : null
            }    
            {
                wasReplied ? (<RepliedContent repliedContent={repliedContent}/>) :
                                (<ReplyFeedback feedbackId={id} action={ReplySellerFeedback}/>)
            }   
            
        </ListGroupItem>
    );
}
export default CSFeedbackItem;

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



