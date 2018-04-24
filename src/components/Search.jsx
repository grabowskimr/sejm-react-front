import React from 'react';

import SearchContainer from '../containers/SearchContainer';
import Sorting from '../containers/Sorting';
import SearchInput from '../containers/SearchInput';
import Alphabet from '../containers/Alphabet';
import ListButton from '../containers/ListButton';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return (
            <SearchContainer
                alphabet={Alphabet}
            >
                <Sorting show={this.state.showMenu} onClick={this.toggleMenu}>
                    <ListButton name="Wg partii" />
                    <ListButton name="Alfabetycznie">
                        <a href="#">A-Z</a> | <a href="#">Z-A</a>
                    </ListButton>
                    <ListButton name="Liczba punktów" />
                    <ListButton name="Tylko przyjaźni zwierzętom" />
                </Sorting>
                <SearchInput />
            </SearchContainer>
        )
    }
}

export default Search;