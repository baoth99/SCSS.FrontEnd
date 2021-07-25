import React from 'react';

import {ListGroup, ListGroupItem, ListGroupItemHeading, Badge, ListGroupItemText } from "reactstrap";

const ShowRejectedList = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <ListGroupItem key={index} >
                    <ListGroupItemHeading>
                        <h2><Badge color="warning">{val.info}</Badge></h2>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        <Badge color="info">Lí Do: </Badge> {val.content}
                    </ListGroupItemText>
                </ListGroupItem>
            )
        });
    }
    return result;
}


const BookingRejectedList = ({rejectedList}) => {
    return (
        <>
            {
                rejectedList.length === 0 || !Array.isArray(rejectedList) ? 
                    (<h2>N/A</h2>) 
                    : 
                    (
                        <ListGroup>
                            {ShowRejectedList(rejectedList)}
                        </ListGroup>
                    )
            }           
        </>
        
    );
}

export default BookingRejectedList;
