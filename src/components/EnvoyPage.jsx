import React from 'react';
import { connect } from 'react-redux';

import { getEnvoy } from '../actions/actions';

class EnvoyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            envoy: this.props.currentEnvoy,
            nextEnvoyId: this.props.nextEnvoyId,
            prevEnvoyId: this.props.prevEnvoyId
        }
    }

    componentDidMount() {
        this.props.getEnvoy(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            envoy: nextProps.currentEnvoy,
            nextEnvoyId: nextProps.nextEnvoyId,
            prevEnvoyId: nextProps.prevEnvoyId
        })
    }

    render() {
        return (
            <div>envoypage</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentEnvoy: state.appReducer.currentEnvoy,
        nextEnvoyId: state.appReducer.nextEnvoyId,
        prevEnvoyId: state.appReducer.prevEnvoyId
    }
}

export default connect(mapStateToProps, {getEnvoy})(EnvoyPage);