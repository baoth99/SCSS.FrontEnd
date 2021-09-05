import React from 'react';

const RequestRegisterColumn = ({list}) => {
    return (
        <thead className="thead-light">
            <tr>
                {list.map((val, index) => {
                    return <th key={index} scope="col">{val}</th>
                })}
                <th scope="col" />
            </tr>
        </thead>
    );
}

export default RequestRegisterColumn;
