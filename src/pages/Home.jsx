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
                    Create a new file in the <code>Pages</code> folder
                </li>
                <li>
                    Create a new route in the <code>index.jsx</code>
                </li>
                <li>
                    Create a styled-component with the values from
                    <code>styles.css</code>
                </li>
                <li>Recreate each following buttons</li>
            </ul>
            <h2>Default css styling</h2>
            <h3>Default</h3>
            <p>A button with default styles</p>
            <button className="Button">Default button</button>
            <h3>Variant</h3>
            <p>
                A button with a variant prop of <strong>danger</strong>
            </p>
            <button className="Button Button--danger">Danger button</button>
            <h3>Attribute</h3>
            <p>
                A button with the attribute <strong>disabled</strong>
            </p>
            <button className="Button" disabled>
                Disabled button
            </button>
            <h3>Themed</h3>
            <p>
                A themed button that overrides some styling from the default
                button.
                <br />
                <strong>Use case:</strong> Using the library in another project
                with a custom theme.
            </p>
            <button className="Button ButtonThemed">Themed button</button>
        </Wrapper>
    </>
);
