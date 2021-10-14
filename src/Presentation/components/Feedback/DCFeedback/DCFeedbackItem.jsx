import React from 'react';
import { ListGroupItem, ListGroupItemText, Badge } from 'reactstrap';
//import Rating from '@material-ui/lab/Rating';
import ReplyFeedback from '../ReplyFeedback';
import {ReplyCollectorFeedback} from '../../../../Application/redux/actions/FeedbackAction';

const DCFeedbackItem = ({id, transactionCode, feedbackContent, sellingAccountInfo, dealerInfo, buyingAccountName, repliedContent, wasReplied, feedbackTime}) => {
    return (
        <ListGroupItem>
            <h2>
                Phản hồi của giao dịch <Badge color="success">{transactionCode}</Badge>
            </h2>
            <ListGroupItemText>
                <Badge color="warning" pill>
                    Phản hồi từ người thu gom "{sellingAccountInfo}": 
                </Badge>
                &nbsp; {feedbackContent}
                <br/> 
            </ListGroupItemText>
            {
                wasReplied ? (<RepliedContent repliedContent={repliedContent}/>) :
                                (<ReplyFeedback feedbackId={id} action={ReplyCollectorFeedback}/>)
            }
            <ListGroupItemText>
                <Badge color="warning" pill>
                    Người quản lí vựa: {buyingAccountName} - Vựa "{dealerInfo}"
                </Badge>
            </ListGroupItemText>
              
            <small className="text-muted">{feedbackTime}</small>                  
        </ListGroupItem>
    );
}

export default DCFeedbackItem;

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