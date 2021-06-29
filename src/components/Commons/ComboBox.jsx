import React from 'react';

const renderList = (list) => {
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

const ComboBox = ({list, leftRight, topBottom, onSelect, defaultVal, intialVal}) => {
    return (
        <select id="cars"
            className="form-control-alternative"
            style={{paddingLeft: leftRight, paddingRight: leftRight, paddingTop: topBottom, paddingBottom: topBottom, borderRadius: 5}}
            onChange={(e) => onSelect(e.target.value)}
            value={defaultVal}>
            <option value={intialVal}>------</option>
            {renderList(list)}
            
        </select>
    );
}

export default ComboBox;
