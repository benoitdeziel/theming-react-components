import React from 'react';
import { ThemeProvider } from 'styled-components';

import customTheme from '../theme/customTheme';

import Button from '../components/Button';
import { Wrapper } from '../components/Wrapper';

const ThemedButtonStyles = {
    backgroundColor: {
        default: { light: 'limegreen', dark: 'green' },
        primary: { light: 'orange', dark: 'rebeccapurple' },
        danger: { light: 'tomato', dark: 'red' },
    },
};

const ThemedButton = props => {
    return (
        <ThemeProvider theme={{ styles: ThemedButtonStyles }}>
            <Button {...props} />
        </ThemeProvider>
    );
};

export const SFCPage = ({ currentMode }) => (
    <ThemeProvider
        theme={{
            mode: currentMode,
            theme: customTheme,
        }}>
        <Wrapper>
            <h2>Themed - SFC</h2>
            <ThemedButton>Themed Button</ThemedButton>
            <ThemedButton variant="primary">Themed Primary Button</ThemedButton>
            <br />
            <br />
            <ThemedButton variant="danger">Danger zone</ThemedButton>
            <ThemedButton icon="test">Themed Button</ThemedButton>
        </Wrapper>
    </ThemeProvider>
);
