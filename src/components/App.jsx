import React from 'react';
import { Switch, Route } from 'react-router';

import Header from './Header';
import HomePage from './HomePage';
import EnvoyPage from './EnvoyPage';
import MepsPage from './MepsPage';
import SenatorsPage from './SenatorsPage';
import CriterionPage from './CriterionPage';
import BestForAnimals from './BestForAnimals';
import WorstForAnimals from './WorstForAnimals';
import ContactPage from './ContactPage';
import Localizator from './Localizator';
import Petition from './Petition';
import Questionnarie from './Questionnarie';

// setup check

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
                        <Route exact path="/poslowie" component={MepsPage} />
                        <Route exact path="/senatorzy" component={SenatorsPage} />
                        <Route exact path="/criterions" component={CriterionPage} />
                        <Route exact path="/best" component={BestForAnimals} />
                        <Route exact path="/worst" component={WorstForAnimals} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/location" component={Localizator} />
                        <Route exact path="/ankieta" component={Questionnarie} />
                        <Route path="/envoy/:id" component={EnvoyPage} />
                        <Route path="/petition" component={Petition} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default App;