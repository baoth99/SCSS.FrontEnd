import React from 'react';
import { ListGroupItem, ListGroupItemText, Badge } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';

const DCFeedbackItem = ({transactionCode, sellerName, sellerFeedback, collectorName, collectorFeedback, sellerRate, feedbackDateTime}) => {
    return (
        <ListGroupItem>
            <h2>
                Phản hồi của giao dịch <Badge color="success">{transactionCode}</Badge>
            </h2>
            <ListGroupItemText>
                <Badge color="info" pill>
                    Phản hồi từ người Bán "{sellerName}": 
                </Badge>
                &nbsp; {sellerFeedback}
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
                &nbsp; <Rating name="read-only" value={sellerRate} max={10} readOnly />
            </ListGroupItemText>      
            <small className="text-muted">{feedbackDateTime}</small>                  
        </ListGroupItem>
    );
}

export default DCFeedbackItem;
