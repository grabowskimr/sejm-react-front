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
                <MenuLink to="/meps" name="Posłowie"/>
                <MenuLink to="/senators" name="Senatorowie"/>
                <MenuLink to="/criterions" name="Nasze kryteria"/>
                <MenuLink to="/best" name="Przyjźni zwierzętom"/>
                <MenuLink to="/worst" name="Nieprzyjaźni zwierzętom"/>
                <MenuLink to="#" name="W twoim okręgu wyborczym"/>
                <MenuLink to="/contact" name="Kontakt"/>
            </MenuContainer>
        )
    }
}

export default Menu;