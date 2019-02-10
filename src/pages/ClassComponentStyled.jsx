import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as styledTheme from 'styled-theming';

import customTheme from '../theme/customTheme';

import { Wrapper } from '../components/Wrapper';
import Button from '../components/Button';

const ThemedButtonStyles = {
    color: props => {
        props.variant = props.variant ? props.variant : 'default';

        return styledTheme.variants('mode', 'variant', {
            default: { light: 'white', dark: 'black' },
            primary: { light: 'rebeccapurple', dark: 'white' },
            danger: { light: 'tomato', dark: 'white' },
        });
    },
    backgroundColor: styledTheme.variants('mode', 'variant', {
        default: { light: 'black', dark: 'white' },
        primary: { light: 'white', dark: 'rebeccapurple' },
        danger: { light: 'white', dark: 'tomato' },
    }),
    borderColor: styledTheme.variants('mode', 'variant', {
        default: { light: 'black', dark: 'white' },
        primary: { dark: 'rebeccapurple' },
        danger: { light: 'tomato', dark: 'tomato' },
    }),
};

const ThemedButtonStyled = styled(Button)`
    color: ${ThemedButtonStyles.color};
    background-color: ${ThemedButtonStyles.backgroundColor};
    border-color: ${ThemedButtonStyles.borderColor};
    border-radius: 0;
`;

class ThemedButton extends Button {
    render() {
        return (
            <ThemedButtonStyled {...this.props}>
                {this.props.children}
            </ThemedButtonStyled>
        );
    }
}

export const ClassComponentStyledPage = ({ currentMode }) => (
    <ThemeProvider theme={{ mode: currentMode, theme: customTheme }}>
        <Wrapper>
            <h2>Class Component Styled</h2>
            <ThemedButton>Themed Button</ThemedButton>
            <ThemedButton variant="primary">Themed Primary Button</ThemedButton>
            <br />
            <br />
            <ThemedButton variant="danger">Danger zone</ThemedButton>
            <ThemedButton icon="test">Themed Button</ThemedButton>
        </Wrapper>
    </ThemeProvider>
);
