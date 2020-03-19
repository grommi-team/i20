import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './views/LoginPage/LoginPage';

import CatalogyPage from './views/CatalogyPage/CatalogyPage';
import LandingPage from './views/LandingPage/LandingPage';

export default class Client extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login-page' component={LoginPage} />
                <Route path='/catalogy-page' component={CatalogyPage} />
                <Route path='/' component={LandingPage} />
            </Switch>
        )
    }
}
