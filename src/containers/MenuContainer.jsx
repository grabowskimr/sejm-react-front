import React from 'react';

const MenuContainer = (props) => (
    <div className="menu-container">
        <ul className="menu-list">
            {props.children}
        </ul>
    </div>
);


export default MenuContainer;