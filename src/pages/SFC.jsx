import React from 'react';
import { ThemeProvider } from '../utils/ThemeProvider';

import customTheme from '../theme/customTheme';

import Button from '../components/Button';
import { Wrapper } from '../components/Wrapper';

const ThemedButtonStyles = {
    backgroundColor: {
        default: {
            light: customTheme.color.primary,
            dark: customTheme.color.secondary,
        },
        primary: {
            light: customTheme.color.neutral[700],
            dark: customTheme.color.primary,
        },
        danger: { light: 'white', dark: 'tomato' },
    },
    borderColor: {
        default: {
            light: customTheme.color.primary,
            dark: customTheme.color.secondary,
        },
        primary: {
            light: customTheme.color.neutral[700],
            dark: customTheme.color.primary,
        },
        danger: { light: 'tomato', dark: 'tomato' },
    },
};

const ThemedButton = props => {
    return <Button {...props} styles={ThemedButtonStyles} />;
};

export const SFCPage = ({ currentMode }) => (
    <ThemeProvider mode={currentMode} styles={customTheme}>
        <Wrapper>
            <h2>Themed - SFC Props</h2>
            <ThemedButton>Themed Button</ThemedButton>
            <ThemedButton variant="primary">Themed Primary Button</ThemedButton>
            <br />
            <br />
            <ThemedButton variant="danger">Danger zone</ThemedButton>
            <ThemedButton icon="test">Themed Button</ThemedButton>
        </Wrapper>
    </ThemeProvider>
);
