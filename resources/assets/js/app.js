import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';

const Main = () => (
    <MuiThemeProvider>
        <Router>
            <div>
                <Header/>
                <div className="main">
                    <Routes/>
                    <Sidebar/>
                </div>
            </div>
        </Router>
    </MuiThemeProvider>
);

render(<Main />, document.getElementById('app'));
