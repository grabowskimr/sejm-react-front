import React from 'react';
import { connect } from 'react-redux';

import SearchContainer from '../containers/SearchContainer';
import Sorting from '../containers/Sorting';
import SearchInput from '../containers/SearchInput';
import Alphabet from '../containers/Alphabet';
import ListButton from '../containers/ListButton';
import { updateSearchQuery } from '../actions/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            searchQuery: this.props.searchQuery,
            alphabet: this.props.alphabet
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
        this.scrollToLetter = this.scrollToLetter.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchQuery: nextProps.searchQuery,
            alphabet: nextProps.alphabet
        })
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    changeSearchQuery(e) {
        this.props.updateSearchQuery(e.target.value);
    }

    scrollToLetter(e) {
        jQuery('body, html').animate({
            scrollTop: jQuery(`#letter-${e.target.name}`).offset().top - 40
        }, 500)
    }

    render() {
        return (
            <SearchContainer
                alphabet={() =>Alphabet({
                    alphabet: this.state.alphabet,
                    scrollToLetter: this.scrollToLetter
                })}
            >
                <Sorting show={this.state.showMenu} onClick={this.toggleMenu}>
                    <ListButton name="Wg partii" />
                    <ListButton name="Alfabetycznie">
                        <a href="#">A-Z</a> | <a href="#">Z-A</a>
                    </ListButton>
                    <ListButton name="Liczba punktów" />
                    <ListButton name="Tylko przyjaźni zwierzętom" />
                </Sorting>
                <SearchInput value={this.state.searchQuery} onChange={(e) => this.changeSearchQuery(e)} />
            </SearchContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchQuery: state.appReducer.searchQuery,
        alphabet: state.appReducer.alphabet
    }
}

export default connect(mapStateToProps, {updateSearchQuery})(Search);