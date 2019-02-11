import React, { Component } from 'react';
import { Toggle } from './Toogle';

export class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    isActive = () => this.state.active;

    toggle = () => {
        this.setState({
            active: !this.isActive(),
        });

        this.props.onClick();
    };

    render() {
        return (
            <Toggle
                isActive={this.isActive()}
                offText="Light"
                onText="Dark"
                onClick={() => this.toggle()}
            />
        );
    }
}
