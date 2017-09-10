import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Home from './Home';
import Example from './Example';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/example" component={Example}/>
        <Redirect from="*" to="/"/>
    </Switch>
);

export default Routes;
