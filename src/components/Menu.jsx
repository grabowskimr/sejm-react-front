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
                <MenuLink onClick={this.props.onClick} to="/poslowie" name="Kandydaci Sejm 2019"/>
                <MenuLink onClick={this.props.onClick} to="/criterions" name="Nasze kryteria"/>
                <MenuLink onClick={this.props.onClick} to="/best" name="Przyjaźni zwierzętom"/>
                <MenuLink onClick={this.props.onClick} to="/worst" name="Nieprzyjaźni zwierzętom"/>
                <MenuLink onClick={this.props.onClick} to="/location" name="W twoim okręgu wyborczym"/>
                <MenuLink onClick={this.props.onClick} to="/contact" name="Kontakt"/>
                <MenuLink onClick={this.props.onClick} to="/petition" name="Podpisz petycję"/>
            </MenuContainer>
        )
    }
}

export default Menu;