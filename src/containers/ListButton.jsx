import React from 'react';

const ListButton = (props) => (
    <li>
        {!props.children ?
            <a href="#" className="list-button" {...props}>
                {props.name}
            </a>
         : <span className="list-span">
            <span className="list-span-name">{props.name}</span>
            <span className="list-span-content">{props.children}</span>
         </span>}
    </li>
);

export default ListButton;