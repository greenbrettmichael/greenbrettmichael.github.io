import React from 'react';

import { Provider } from "react-redux";
import store from "../redux/store";

import Routes from './Routes'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-129809681-1');

const Root = () => {

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default Root;