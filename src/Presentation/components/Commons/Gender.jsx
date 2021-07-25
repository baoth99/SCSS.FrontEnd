import { Media} from "reactstrap";
import { BiFemale, BiMale } from "react-icons/bi";
import React from 'react';
import {FEMALE, MALE} from '../../../Infrastucture/utils/constants/CommonConstants'
const Gender = ({gender}) => {
    return (
        <Media>
            <span className="mb-0 text-sm">                
                {gender === 1 ? <BiMale/> : <BiFemale/>}
                &nbsp;
                {gender === 1 ? MALE : FEMALE}
            </span>
        </Media>
    );
}

export default Gender;
