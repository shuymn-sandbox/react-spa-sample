import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Drawer,
    MenuItem
} from 'material-ui';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div className="sidebar">
                <Drawer open={this.state.open}>
                    <Link to="/"><AppBar title="Sample" showMenuIconButton={false}/></Link>
                    <Link to="/"><MenuItem primaryText="Home"/></Link>
                    <Link to="/example"><MenuItem primaryText="Example"/></Link>
                </Drawer>
            </div>
        );
    }
}
