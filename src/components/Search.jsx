import React from 'react';
import { connect } from 'react-redux';

import SearchContainer from '../containers/SearchContainer';
import Sorting from '../containers/Sorting';
import SearchInput from '../containers/SearchInput';
import Alphabet from '../containers/Alphabet';
import ListButton from '../containers/ListButton';
import { updateSearchQuery, getEnvoyListByParty, getEnvoyList, getEnvoyListByPoints, getEnvoyListPositive, getQueryList } from '../actions/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            searchQuery: this.props.searchQuery,
            alphabet: this.props.alphabet,
            type: this.props.type
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
        this.scrollToLetter = this.scrollToLetter.bind(this);
        this.getListByParty = this.getListByParty.bind(this);
        this.getListAsc = this.getListAsc.bind(this);
        this.getListDesc = this.getListDesc.bind(this);
        this.getListByPointsAsc = this.getListByPointsAsc.bind(this);
        this.getListByPointDesc = this.getListByPointDesc.bind(this);
        this.getOnlyPositive = this.getOnlyPositive.bind(this);
        this.searchEnvoes = this.searchEnvoes.bind(this);
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
        if(e.target.value.length > 3) {
            this.props.getQueryList(e.target.value);
        }
        if(e.target.value.length == 0) {
            this.props.getEnvoyList('asc', this.state.type);
        }
    }

    scrollToLetter(e) {
        jQuery('body, html').animate({
            scrollTop: jQuery(`#letter-${e.target.name}`).offset().top - 40
        }, 500)
    }

    getListByParty(e) {
        e.preventDefault();
        this.props.getEnvoyListByParty(this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    getListAsc(e) {
        e.preventDefault();
        this.props.getEnvoyList('asc', this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    getListDesc(e) {
        e.preventDefault();
        this.props.getEnvoyList('desc', this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    getListByPointsAsc(e) {
        e.preventDefault();
        this.props.getEnvoyListByPoints('asc', this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    getListByPointDesc(e) {
        e.preventDefault();
        this.props.getEnvoyListByPoints('desc', this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    getOnlyPositive(e) {
        e.preventDefault();
        this.props.getEnvoyListPositive(this.state.type);
        this.toggleMenu();
        window.scrollBy(0, 1);
    }

    searchEnvoes(e) {
        e.preventDefault();
        if(this.state.searchQuery.length > 3) {
            this.props.getQueryList(this.state.searchQuery);
        }
        if(this.state.searchQuery.length == 0) {
            this.props.getEnvoyList('asc', this.state.type);
        }
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
                    <ListButton name="Wg partii" onClick={this.getListByParty} />
                    <ListButton name="Alfabetycznie">
                        <a href="#" onClick={this.getListAsc}>A-Z</a> | <a href="#" onClick={this.getListDesc}>Z-A</a>
                    </ListButton>
                    <ListButton name="Liczba punktów">
                        <a href="#" onClick={this.getListByPointsAsc}>MIN-MAX</a> | <a href="#" onClick={this.getListByPointDesc}>MAX-MIN</a>
                    </ListButton>
                    <ListButton name="Tylko przyjaźni zwierzętom" onClick={this.getOnlyPositive} />
                </Sorting>
                <SearchInput value={this.state.searchQuery} onChange={(e) => this.changeSearchQuery(e)} onSubmit={this.searchEnvoes}/>
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

export default connect(mapStateToProps, {updateSearchQuery, getEnvoyListByParty, getEnvoyList, getEnvoyListByPoints, getEnvoyListPositive, getQueryList})(Search);