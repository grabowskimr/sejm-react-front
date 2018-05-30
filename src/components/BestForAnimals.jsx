import React from 'react';
import { connect } from 'react-redux';

import { getBestForAnimals } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';

class BestForAnimals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestForAnimals: this.props.bestForAnimals
        }
    }

    componentDidMount() {
        this.props.getBestForAnimals();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bestForAnimals: nextProps.bestForAnimals
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="subpage-title">Przyjaźni zwierzętom</h3>
                <div className="friend-list">
                    <EnvoyList letter=":)" list={this.state.bestForAnimals}/>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        bestForAnimals: state.appReducer.bestForAnimals
    }
}

export default connect(mapStateToProps, {getBestForAnimals})(BestForAnimals);