import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleMenu } from '../actions/actions';
import Menu from './Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedMobileMenu: this.props.openedMobileMenu
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.props.toggleMenu();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            openedMobileMenu: nextProps.openedMobileMenu
        })
    }

    render() {
        return (
            <div className="tm-header-react">
                <div className="content-container">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo"/>
                    </Link>
                    <button className="toggle-mobile-menu" onClick={this.toggleMenu}><img src="/images/assets/menu.png" /></button>
                    <div className={this.state.openedMobileMenu ? "mobile-menu opened" : "mobile-menu"}>
                        <div>
                            <Link to="/" onClick={this.toggleMenu}>
                                <img src="/images/logo.png" alt="logo"/>
                            </Link>
                            <Menu onClick={this.toggleMenu}/>
                        </div>
                    </div>
                </div>
                <Menu onClick={()=>{}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        openedMobileMenu: state.appReducer.openedMobileMenu
    }
}

export default connect(mapStateToProps, {toggleMenu})(Header);