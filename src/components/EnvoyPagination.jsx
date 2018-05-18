import React from 'react';
import { connect } from 'react-redux';

import EnvoyPaginationContent from '../containers/EnvoyPaginationContent';
import { getEnvoy } from '../actions/actions';

class EnvoyPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextEnvoyId: this.props.nextEnvoyId,
            prevEnvoyId: this.props.prevEnvoyId
        };
        this.onPrevClick = this.onPrevClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nextEnvoyId: nextProps.nextEnvoyId,
            prevEnvoyId: nextProps.prevEnvoyId
        })
    }

    onPrevClick() {
        this.props.getEnvoy(this.state.prevEnvoyId);
    }

    onNextClick() {
        this.props.getEnvoy(this.state.nextEnvoyId);
    }

    render() {
        return (
            <EnvoyPaginationContent 
                prev={this.state.prevEnvoyId} 
                next={this.state.nextEnvoyId} 
                onPrevClick={this.onPrevClick}
                onNextClick={this.onNextClick}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        nextEnvoyId: state.appReducer.nextEnvoyId,
        prevEnvoyId: state.appReducer.prevEnvoyId
    }
}

export default connect(mapStateToProps, {getEnvoy})(EnvoyPagination);