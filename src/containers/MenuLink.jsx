import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = (props) => (
    <li>
        <Link className="menu-link" to={props.to}>{props.name}</Link>
    </li>
)

export default MenuLink;