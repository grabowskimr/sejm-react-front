import React from 'react';
import { Switch, Route } from 'react-router';

import Header from './Header';
import HomePage from './HomePage';
import EnvoyPage from './EnvoyPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="content-container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/envoy/:id" component={EnvoyPage} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default App;