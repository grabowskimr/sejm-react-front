import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import { getEnvoyList } from '../actions/actions';
import EnvoyList from '../containers/EnvoyList';
import HomeTextContainer from './HomeTextContainer';

class MepsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            envoyList: this.props.mepsList,
            alphabetOrder: this.props.alphabetOrder
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            envoyList: nextProps.mepsList,
            alphabetOrder: nextProps.alphabetOrder
        })
    }

    componentDidMount() {
        if(!Object.keys(this.state.envoyList).length) {
            this.props.getEnvoyList('asc', 'envoy');
        }
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
        mepsList: state.appReducer.mepsList,
        alphabetOrder: state.appReducer.alphabetOrder
    }
}

export default connect(mapStateToProps, {getEnvoyList})(MepsPage);