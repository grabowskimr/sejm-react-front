import React from 'react';
import {Switch} from 'react-router';

import Menu from './Menu';
import HomeTextContainer from './HomeTextContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Menu />
                <HomeTextContainer />
            </React.Fragment>
        )
    }
}

export default App;