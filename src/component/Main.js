import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Home } from './Home';
import Conseil from './Conseil';
import Erreur from './Erreur';
import Test from './Test';
import { Switch, Route } from 'react-router-dom';
import { QUESTION } from '../shared/question';



class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/conseil" component={Conseil} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test" component={() => <Test question={QUESTION} />} />
                    <Route component={Erreur} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
