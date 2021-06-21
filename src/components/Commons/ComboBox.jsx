import React from 'react';

const ComboBox = ({list, leftRight, topBottom}) => {
    return (
        <select id="cars" name="cars" 
            className="form-control-alternative"
            style={{paddingLeft: leftRight, paddingRight: leftRight, paddingTop: topBottom, paddingBottom: topBottom, borderRadius: 5}}
            onChange={() => console.log('Combobox')}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
    );
}

export default ComboBox;
