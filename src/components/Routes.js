import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
// import ProjectDetails from './projectDetails/ProjectDetails'
// import PageNotFound from './pageNotFound/PageNotFound'

import ReactGA from 'react-ga';

const Routes = () => {    
    
    const logPageView = () => {
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    logPageView();

    return (
        <Router basename={process.env.PUBLIC_URL}> 
            <Switch >               
            <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;