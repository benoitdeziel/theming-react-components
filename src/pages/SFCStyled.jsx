import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as styledTheme from 'styled-theming';

import customTheme from '../theme/customTheme';

import { Wrapper } from '../components/Wrapper';
import Button from '../components/Button';

const StatelessButtonStyles = {
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

const StatelessButton = styled(Button)`
    color: ${StatelessButtonStyles.color};
    background-color: ${StatelessButtonStyles.backgroundColor};
    border-color: ${StatelessButtonStyles.borderColor};
    border-radius: 0;
`;

export const SFCStyledPage = () => (
    <ThemeProvider theme={{ mode: 'light', theme: customTheme }}>
        <Wrapper>
            <h2>Themed - Stateless component</h2>
            <StatelessButton>Stateless Button</StatelessButton>
            <StatelessButton variant="primary">
                Stateless Primary Button
            </StatelessButton>
            <br />
            <br />
            <StatelessButton variant="danger">Danger zone</StatelessButton>
            <StatelessButton icon="test">Stateless Button</StatelessButton>
        </Wrapper>
    </ThemeProvider>
);
