import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { getEnvoyListByPoints } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';
import HomeTextContainer from './HomeTextContainer';

class MepsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            envoyList: this.props.envoyList,
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
        this.props.getEnvoyListByPoints('desc', 'envoy');
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="subpage-title">Posłowie</h3>
                <Search type="envoy" />
                { this.state.alphabetOrder === 'asc' ?
                    Object.keys(this.state.envoyList).map((key) => (
                        <EnvoyList key={key} letter={key} list={this.state.envoyList[key]}/>
                    )) : 
                    Object.keys(this.state.envoyList).reverse().map((key) => (
                        <EnvoyList key={key} letter={key} list={this.state.envoyList[key]}/>
                    ))
                }
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

export default connect(mapStateToProps, {getEnvoyListByPoints})(MepsPage);