import React from 'react';
import { connect } from 'react-redux';

import { getEnvoy, getStructure } from '../actions/actions';
import EnvoyContent from '../containers/EnvoyContent';

class EnvoyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            envoy: this.props.currentEnvoy,
            nextEnvoyId: this.props.nextEnvoyId,
            prevEnvoyId: this.props.prevEnvoyId,
            criterions: [],
            criterionsNames: []
        }
    }

    componentDidMount() {
        this.props.getStructure();
        this.props.getEnvoy(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        var criterions = [];
        Object.keys(nextProps.currentEnvoy).map((key) => {
            if(key.indexOf('criterion') >= 0) {
                criterions.push({[key]: JSON.parse(nextProps.currentEnvoy[key])});
            }
        });
        var criterionsNames = {};
        nextProps.structure.map((item) => {
            if(item.Field.indexOf('criterion') >= 0) {
                criterionsNames[item.Field] = item.Comment
            }
        });
        this.setState({
            envoy: nextProps.currentEnvoy,
            nextEnvoyId: nextProps.nextEnvoyId,
            prevEnvoyId: nextProps.prevEnvoyId,
            criterions: criterions,
            criterionsNames: criterionsNames
        })
    }

    render() {
        console.log(this.state.envoy);
        console.log(this.state.criterions);
        console.log(this.state.criterionsNames);
        return (
            <EnvoyContent envoy={this.state.envoy} criterions={this.state.criterions} criterionsNames={this.state.criterionsNames} />
        )
    }
}

function mapStateToProps(state) {
    return {
        currentEnvoy: state.appReducer.currentEnvoy,
        nextEnvoyId: state.appReducer.nextEnvoyId,
        prevEnvoyId: state.appReducer.prevEnvoyId,
        structure: state.appReducer.structure
    }
}

export default connect(mapStateToProps, {getEnvoy, getStructure})(EnvoyPage);