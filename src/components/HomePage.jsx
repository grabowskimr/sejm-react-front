import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { getEnvoyList } from '../actions/actions';
import EnvoyList from './EnvoyList';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            envoyList: this.props.envoyList
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            envoyList: nextProps.envoyList
        })
    }

    componentDidMount() {
        this.props.getEnvoyList();
    }

    render() {
        return (
            <React.Fragment>
                <Search />
                <EnvoyList />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyList: state.appReducer.envoyList
    }
}

export default connect(mapStateToProps, {getEnvoyList})(HomePage);