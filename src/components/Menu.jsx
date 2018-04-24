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
                <MenuLink to="#" name="Posłowie"/>
                <MenuLink to="#" name="Senatorowie"/>
                <MenuLink to="#" name="Nasze kryteria"/>
                <MenuLink to="#" name="Przyjźni zwierzętom"/>
                <MenuLink to="#" name="Nieprzyjaźni zwierzętom"/>
                <MenuLink to="#" name="W twoim okręgu wyborczym"/>
                <MenuLink to="#" name="Kontakt"/>
            </MenuContainer>
        )
    }
}

export default Menu;