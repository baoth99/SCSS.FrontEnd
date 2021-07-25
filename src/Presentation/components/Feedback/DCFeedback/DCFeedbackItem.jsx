import React from 'react';
import { ListGroupItem, ListGroupItemText, Badge } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';

const DCFeedbackItem = ({transactionCode, dealerName, dealerFeedback, collectorName, collectorFeedback, collectorRate, feedbackDateTime}) => {
    return (
        <ListGroupItem>
            <h2>
                Phản hồi của giao dịch <Badge color="success">{transactionCode}</Badge>
            </h2>
            <ListGroupItemText>
                <Badge color="info" pill>
                    Phản hồi từ vựa "{dealerName}": 
                </Badge>
                &nbsp; {dealerFeedback}
            </ListGroupItemText>
            <ListGroupItemText>
                <Badge color="warning" pill>
                    Phản hồi từ người thu mua "{collectorName}": 
                </Badge>
                &nbsp; {collectorFeedback}
                <br/> 
            </ListGroupItemText>
            <ListGroupItemText>
                <Badge color="danger" pill>
                    Đánh Giá Vựa: 
                </Badge>
                &nbsp; <Rating name="read-only" value={collectorRate} max={10} readOnly />
            </ListGroupItemText>      
            <small className="text-muted">{feedbackDateTime}</small>                  
        </ListGroupItem>
    );
}

export default DCFeedbackItem;
