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
            envoyList: [],
            alphabetOrder: this.props.alphabetOrder
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            envoyList: nextProps.envoyList,
            alphabetOrder: nextProps.alphabetOrder
        })
    }

    componentDidMount() {
        this.props.getEnvoyList('asc','envoy');
    }

    render() {
        return (
            <React.Fragment>
                <HomeTextContainer />
                {Object.keys(this.state.envoyList) ?
                <div>
                    <Search type="all" />
                    { this.state.alphabetOrder === 'asc' ?
                        Object.keys(this.state.envoyList).map((key) => (
                            <EnvoyList key={key} letter={key} list={this.state.envoyList[key]}/>
                        )) : 
                        Object.keys(this.state.envoyList).reverse().map((key) => (
                            <EnvoyList key={key} letter={key} list={this.state.envoyList[key]}/>
                        ))
                    } 
                </div>
                : <div className="loader">Loading...</div>}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        envoyList: state.appReducer.envoyList,
        alphabetOrder: state.appReducer.alphabetOrder
    }
}

export default connect(mapStateToProps, {getEnvoyList})(HomePage);