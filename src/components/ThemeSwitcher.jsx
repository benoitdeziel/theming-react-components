import React, { Component } from 'react';

export class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'false',
        };
    }

    isActive = () => this.state.active;

    toggle = () => {
        this.setState({
            active: !this.isActive(),
        });
    };

    render() {
        return (
            <button aria-pressed={this.isActive()} onClick={this.toggle}>
                dark theme:
                <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
            </button>
        );
    }
}
