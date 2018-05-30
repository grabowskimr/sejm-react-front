import React from 'react';
import { connect } from 'react-redux';

import { getWorstForAnimals } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';

class WorstForAnimals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            worstForAnimals: this.props.worstForAnimals
        }
    }

    componentDidMount() {
        this.props.getWorstForAnimals();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            worstForAnimals: nextProps.worstForAnimals
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="subpage-title">Nieprzyjaźni zwierzętom</h3>
                <div className="friend-list">
                    <EnvoyList worst={true} letter=":(" list={this.state.worstForAnimals}/>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        worstForAnimals: state.appReducer.worstForAnimals
    }
}

export default connect(mapStateToProps, {getWorstForAnimals})(WorstForAnimals);