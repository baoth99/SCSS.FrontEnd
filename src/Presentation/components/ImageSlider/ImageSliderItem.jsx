import React from 'react';
import {useDispatch} from 'react-redux';
import {ListGroupItem } from "reactstrap";
import {ViewImageSliderDetail} from '../../../Application/redux/actions/ImageSliderAction'

const ImageSliderItem = ({id, name}) => {
    const dispatch = useDispatch();

    const OnHandleViewDetail = () => {

        dispatch(ViewImageSliderDetail(id));
    }

    return (
        <ListGroupItem tag="button" action style={{padding: '10px'}} onClick={() => OnHandleViewDetail()}>
            <div style={{marginLeft: '30px'}}>
                    {name}
            </div>                 
        </ListGroupItem>
    );
}

export default ImageSliderItem;
