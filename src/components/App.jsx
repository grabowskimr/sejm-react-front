import React from 'react';
import { Switch, Route } from 'react-router';

import Menu from './Menu';
import HomeTextContainer from './HomeTextContainer';
import HomePage from './HomePage';
import EnvoyPage from './EnvoyPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Menu />
                <HomeTextContainer />
                <Switch>
                    <Route exaxt path="/" component={HomePage} />
                    <Route path="/envoy/:id" component={EnvoyPage} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;