import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const RenderImgList = (data) => {
    let result = null;
    if(!Array.isArray(data)) {
        return result;
    }
    if (data.length > 0) {
        result = data.map((val, index) => {
            return (
                <ListGroupItem key={index} style={{padding: '0px'}}>
                    <img src={val} alt={val.name} />
                </ListGroupItem>
            )
        });
    }
    return result;
}


const AdsImageList = ({imageList}) => {
    return (
        <ListGroup horizontal style={{overflowX: 'scroll'}}>
            {RenderImgList(imageList)}   
        </ListGroup>
    );
}

export default AdsImageList;
