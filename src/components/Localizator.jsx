import React from 'react';
import { connect } from 'react-redux';

import { getLocation, getCountries, getEnvoyByCountry } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';
import AutoComplate from './AutoComplate';

class Localizator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            nearestEnvoy: this.props.nearestEnvoy,
            locationFinish: this.props.locationFinish,
            getEnvoyFinish: this.props.getEnvoyFinish,
            countries: this.props.countries,
            country: '',
            timeout: false,
            suggestion: false
        };
        this.onChange = this.onChange.bind(this);
        this.onChangeSuggestion = this.onChangeSuggestion.bind(this);
    }

    componentDidMount() {
        this.props.getLocation();
        setTimeout(() => {
            this.props.getCountries();
            this.setState({
                timeout: true
            })
        }, 4000)
    }

    componentWillReceiveProps(nextProps) {
        let sorted = [];
        if(nextProps.nearestEnvoy) {
            sorted = nextProps.nearestEnvoy.sort((a,b) => {
                let pointA = parseFloat(a.points);
                let pointB = parseFloat(b.points);
                if(pointA > pointB) {
                    return -1
                } else if(pointA < pointB) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        this.setState({
            location: nextProps.location,
            nearestEnvoy: sorted,
            locationFinish: nextProps.locationFinish,
            getEnvoyFinish: nextProps.getEnvoyFinish,
            countries: nextProps.countries
        })
    }

    onChange(e) {
        this.setState({
            country: e.target.value
        });
    }

    onChangeSuggestion(name, value) {
        this.props.getEnvoyByCountry({
            city: value,
            country: value
        });
        this.setState({
            country: value,
            suggestion: true
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.locationFinish ?
                    <React.Fragment>
                        <h3 className="subpage-title">W twoim okręgu</h3>
                        {(this.state.getEnvoyFinish && this.state.nearestEnvoy.length && !this.state.suggestion) ? 
                            <div className="friend-list">
                                <EnvoyList letter={"Powiat " + this.state.location.country} list={this.state.nearestEnvoy}/>
                            </div> : <div className="custom-location">
                                <AutoComplate 
                                    countries={this.state.countries} 
                                    onChange={this.onChange} 
                                    onChangeSuggestion={this.onChangeSuggestion}
                                    value={this.state.country} 
                                />
                                {(this.state.getEnvoyFinish && this.state.nearestEnvoy.length && this.state.suggestion) ? 
                                    <div className="friend-list">
                                        <EnvoyList letter={"Powiat " + this.state.country} list={this.state.nearestEnvoy}/>
                                    </div> : <h3 className="subpage-title-2">Pusta lista</h3>
                                }
                            </div>
                        }
                    </React.Fragment> 
                    : this.state.timeout ? 
                        <div className="custom-location">
                            <AutoComplate 
                                countries={this.state.countries} 
                                onChange={this.onChange} 
                                onChangeSuggestion={this.onChangeSuggestion}
                                value={this.state.country} 
                            />
                            {(this.state.getEnvoyFinish && this.state.nearestEnvoy.length) ? 
                                <div className="friend-list">
                                    <EnvoyList letter={"Powiat " + this.state.country} list={this.state.nearestEnvoy}/>
                                </div> : <h3 className="subpage-title-2">Pusta lista</h3>
                            }
                        </div>
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
        getEnvoyFinish: state.appReducer.getEnvoyFinish,
        countries: state.appReducer.countries
    }
}

export default connect(mapStateToProps, { getLocation, getCountries, getEnvoyByCountry })(Localizator);