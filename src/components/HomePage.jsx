import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { getEnvoyList } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';
import HomeTextContainer from './HomeTextContainer';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            envoyList: this.props.envoyList
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.envoyList);
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
                <HomeTextContainer />
                <Search />
                {Object.keys(this.state.envoyList).map((key) => (
                    <EnvoyList key={key} letter={key} list={this.state.envoyList[key]}/>
                ))}
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