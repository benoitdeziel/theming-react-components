import React from 'react';

import { Wrapper } from '../components/Wrapper';

import '../styles.css';

export const HomePage = () => (
    <>
        <Wrapper>
            <h1>Theming React</h1>
            <h2>Goals</h2>
            <p>
                This repository goal is to try different ways to style and theme
                components with styled-components.
            </p>
            <h2>How to use</h2>
            <ul>
                <li>
                    Create a new file in the&nbsp;<code>Pages</code> folder
                </li>
                <li>
                    Create a new route in the&nbsp;<code>index.jsx</code>
                </li>
                <li>
                    Create a styled-component with the values from&nbsp;
                    <code>styles.css</code>
                </li>
                <li>Recreate each of the following buttons</li>
            </ul>
            <h2>Default css styling</h2>
            <h3>Default</h3>
            <p>A button with default styles</p>
            <h4>Light</h4>
            <div className="light">
                <button className="Button">Default Button</button>
            </div>
            <h4>Dark</h4>
            <div className="dark">
                <button className="Button">Default Button</button>
            </div>
            <h3>Variant</h3>
            <p>
                A button with a variant prop of <strong>danger</strong>
            </p>
            <button className="Button Button--danger">Danger Button</button>
            <h3>Attribute</h3>
            <p>
                A button with the attribute <strong>disabled</strong>
            </p>
            <button className="Button" disabled>
                Disabled Button
            </button>
            <button className="Button Button--danger" disabled>
                Disabled Danger Button
            </button>
            <h3>Themed</h3>
            <p>
                A themed button that overrides some styling from the default
                button.
                <br />
                <strong>Use case:</strong> Using the library in another project
                with a custom theme.
            </p>
            <button className="Button ButtonThemed">Themed Button</button>
            <button className="Button Button--danger ButtonThemed">
                Themed Danger Button
            </button>
            <button className="Button ButtonThemed" disabled>
                Disabled Themed Button
            </button>
            <button className="Button Button--danger ButtonThemed" disabled>
                Disabled Themed Danger Button
            </button>
        </Wrapper>
    </>
);
