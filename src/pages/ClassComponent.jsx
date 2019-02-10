import React from 'react';
import { ThemeProvider } from 'styled-components';

import customTheme from '../theme/customTheme';

import { Wrapper } from '../components/Wrapper';
import Button from '../components/Button';

const ThemedButtonStyles = {
    backgroundColor: {
        default: { light: 'limegreen', dark: 'green' },
        primary: { light: 'orange', dark: 'rebeccapurple' },
        danger: { light: 'tomato', dark: 'red' },
    },
};

class ThemedButton extends Button {
    render() {
        return (
            <ThemeProvider theme={{ styles: ThemedButtonStyles }}>
                <Button {...this.props} />
            </ThemeProvider>
        );
    }
}

export const ClassComponentPage = ({ currentMode }) => (
    <ThemeProvider
        theme={{
            mode: currentMode,
            theme: customTheme,
        }}>
        <Wrapper>
            <h2>Themed - Class component</h2>
            <ThemedButton>Themed Button</ThemedButton>
            <ThemedButton variant="primary">Themed Primary Button</ThemedButton>
            <br />
            <br />
            <ThemedButton variant="danger">Danger zone</ThemedButton>
            <ThemedButton icon="test">Themed Button</ThemedButton>
        </Wrapper>
    </ThemeProvider>
);
