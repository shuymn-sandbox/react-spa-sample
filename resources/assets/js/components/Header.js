import React, { Component } from 'react';
import { AppBar } from 'material-ui';

export default class Header extends Component {
    render() {
        return (
            <AppBar
                className="header"
                style={{ "position":"fixed" }}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}
