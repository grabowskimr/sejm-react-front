import React from 'react';
import { connect } from 'react-redux';

import { getLocation } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';

class Localizator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            nearestEnvoy: this.props.nearestEnvoy,
            locationFinish: this.props.locationFinish,
            getEnvoyFinish: this.props.getEnvoyFinish
        }
    }

    componentDidMount() {
        this.props.getLocation();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            location: nextProps.location,
            nearestEnvoy: nextProps.nearestEnvoy,
            locationFinish: nextProps.locationFinish,
            getEnvoyFinish: nextProps.getEnvoyFinish
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.locationFinish ?
                    <React.Fragment>
                        <h3 className="subpage-title">W twoim okręgu</h3>
                        {this.state.getEnvoyFinish ? 
                            <div className="friend-list">
                                <EnvoyList letter={"Powiat " + this.state.location.country} list={this.state.nearestEnvoy}/>
                            </div> : <h3 className="subpage-title">Brak posłów i senatorów</h3>
                        }
                    </React.Fragment> 
                    : <div className="loader">Loading...</div>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.appReducer.location,
        nearestEnvoy: state.appReducer.nearestEnvoy,
        locationFinish: state.appReducer.locationFinish,
        getEnvoyFinish: state.appReducer.getEnvoyFinish
    }
}

export default connect(mapStateToProps, { getLocation })(Localizator);