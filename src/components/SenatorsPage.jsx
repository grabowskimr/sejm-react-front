import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { getEnvoyList } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';
import HomeTextContainer from './HomeTextContainer';

class SenatorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senatorList: this.props.senatorList,
            alphabetOrder: this.props.alphabetOrder
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            senatorList: nextProps.senatorList,
            alphabetOrder: nextProps.alphabetOrder
        })
    }

    componentDidMount() {
        if(!Object.keys(this.props.senatorList).length) {
            this.props.getEnvoyList('asc', 'Senator');
        }
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="subpage-title">Kandydaci</h3>
                <Search type="senator" />
                { this.state.alphabetOrder === 'asc' ?
                    Object.keys(this.state.senatorList).map((key) => (
                        <EnvoyList key={key} letter={key} list={this.state.senatorList[key]}/>
                    )) : 
                    Object.keys(this.state.senatorList).reverse().map((key) => (
                        <EnvoyList key={key} letter={key} list={this.state.senatorList[key]}/>
                    ))
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        senatorList: state.appReducer.senatorList,
        alphabetOrder: state.appReducer.alphabetOrder
    }
}

export default connect(mapStateToProps, {getEnvoyList})(SenatorsPage);