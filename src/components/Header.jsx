import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tm-header-react">
                <div className="content-container">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo"/>
                    </Link>
                </div>
                <Menu />
            </div>
        )
    }
}

export default Header;