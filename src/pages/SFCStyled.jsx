import React from 'react';
import styled from 'styled-components';
import * as styledTheme from 'styled-theming';
import { ThemeProvider } from '../utils/ThemeProvider';

import customTheme from '../theme/customTheme';

import { Wrapper } from '../components/Wrapper';
import Button from '../components/Button';

const ThemedButtonStyles = {
    color: props => {
        props.variant = props.variant ? props.variant : 'default';

        return styledTheme.variants('mode', 'variant', {
            default: { light: 'white', dark: 'black' },
            primary: { light: 'white', dark: 'white' },
            danger: { light: 'tomato', dark: 'white' },
        });
    },
    backgroundColor: styledTheme.variants('mode', 'variant', {
        default: {
            light: customTheme.color.primary,
            dark: customTheme.color.secondary,
        },
        primary: {
            light: customTheme.color.neutral[700],
            dark: customTheme.color.primary,
        },
        danger: { light: 'white', dark: 'tomato' },
    }),
    borderColor: styledTheme.variants('mode', 'variant', {
        default: {
            light: customTheme.color.primary,
            dark: customTheme.color.secondary,
        },
        primary: {
            light: customTheme.color.neutral[700],
            dark: customTheme.color.primary,
        },
        danger: { light: 'tomato', dark: 'tomato' },
    }),
    boxShadow: styledTheme('mode', {
        light: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        dark: '0px 6px 15px rgba(255, 255, 255, 0.3)',
    }),
};

const ThemedButton = styled(Button)`
    color: ${ThemedButtonStyles.color};
    background-color: ${ThemedButtonStyles.backgroundColor};
    border-color: ${ThemedButtonStyles.borderColor};
    border-radius: 0;
    box-shadow: ${ThemedButtonStyles.boxShadow};
`;

export const SFCStyledPage = ({ currentMode }) => (
    <ThemeProvider mode={currentMode} styles={customTheme}>
        <Wrapper>
            <h2>Themed - SFC Styled</h2>
            <ThemedButton>Themed Button</ThemedButton>
            <ThemedButton variant="primary">Themed Primary Button</ThemedButton>
            <br />
            <br />
            <ThemedButton variant="danger">Danger zone</ThemedButton>
            <ThemedButton icon="test">Themed Button</ThemedButton>
        </Wrapper>
    </ThemeProvider>
);
