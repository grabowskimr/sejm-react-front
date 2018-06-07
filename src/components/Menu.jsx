import React from 'react';

import MenuContainer from '../containers/MenuContainer';
import MenuLink from '../containers/MenuLink';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuContainer>
                <MenuLink onClick={this.props.onClick} to="/meps" name="Posłowie"/>
                <MenuLink onClick={this.props.onClick} to="/senators" name="Senatorowie"/>
                <MenuLink onClick={this.props.onClick} to="/criterions" name="Nasze kryteria"/>
                <MenuLink onClick={this.props.onClick} to="/best" name="Przyjźni zwierzętom"/>
                <MenuLink onClick={this.props.onClick} to="/worst" name="Nieprzyjaźni zwierzętom"/>
                <MenuLink onClick={this.props.onClick} to="/location" name="W twoim okręgu wyborczym"/>
                <MenuLink onClick={this.props.onClick} to="/contact" name="Kontakt"/>
            </MenuContainer>
        )
    }
}

export default Menu;