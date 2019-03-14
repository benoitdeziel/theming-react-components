import React from 'react';
import styled, { css } from 'styled-components';

import tokens from '../theme/default/light';
import customTokens from '../theme/custom/light';

import { Wrapper } from '../common/Wrapper';

const ButtonTokens = {
    variant: {
        primary: {
            light: {
                color: tokens.color('neutral', '0'),
                backgroundColor: tokens.color('primary'),
                borderColor: 'transparent',
            },
            dark: {
                color: tokens.color('primary'),
                backgroundColor: 'transparent',
                borderColor: tokens.color('primary'),
            },
        },
        danger: {
            light: {
                color: tokens.color('neutral', '0'),
                backgroundColor: tokens.color('danger'),
                borderColor: 'transparent',
            },
            dark: {
                color: tokens.color('neutral', '0'),
                backgroundColor: tokens.color('danger'),
                borderColor: 'transparent',
            },
        },
    },
};

const ButtonBase = css`
    font-size: 1rem;
    line-height: 2;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;
`;

const Button = styled.button.attrs({
    type: 'button',
    variant: props => (props.variant ? props.variant : 'primary'),
})`
    ${ButtonBase}

    color: ${props => {
        return ButtonTokens.variant[props.variant][props.theme.mode].color;
    }};
    background-color: ${props =>
        ButtonTokens.variant[props.variant][props.theme.mode].backgroundColor};
    border-color: ${props =>
        ButtonTokens.variant[props.variant][props.theme.mode].borderColor};

    &:disabled {
        background-color: ${tokens.color('neutral', '100')};
        border-color: transparent;
        color: ${tokens.color('neutral', '300')};
        pointer-events: none;
    }

    & + & {
        margin-left: 1em;
    }
`;

const ThemedButton = styled(Button)`
    border-width: 2px;
    border-radius: 4px;
    box-shadow: 0 3px 5px ${customTokens.color('neutral', '300')};
`;

const StyledMap = () => (
    <>
        <Wrapper>
            <h1>Styled Tools</h1>
            <p>Test with styled-tools and design-system-utils</p>
            <h2>Playground</h2>
            <h3>Default</h3>
            <Button>Default Button</Button>
            <h4>Variant</h4>
            <Button variant="danger">Danger Button</Button>
            <h4>Attribute</h4>
            <Button disabled>Disabled Button</Button>
            <Button variant="danger" disabled>
                Disabled Danger Button
            </Button>
            <h3>Themed</h3>
            <ThemedButton>Themed Button</ThemedButton>
            <h4>Variant</h4>
            <ThemedButton variant="danger">Themed Danger Button</ThemedButton>
            <h4>Attribute</h4>
            <ThemedButton disabled>Disabled Themed Button</ThemedButton>
            <ThemedButton variant="danger" disabled>
                Disabled Themed Danger Button
            </ThemedButton>
            <h2>Notes</h2>
            <h4>Pros</h4>
            <ul>
                <li>?</li>
            </ul>
            <h4>Cons</h4>
            <ul>
                <li>Property declaration are hard to read</li>
                <li>Duplication of settings</li>
                <li>Feels less natural than writing css</li>
                <li>Lots of conditionnal check</li>
            </ul>
        </Wrapper>
    </>
);

export default StyledMap;
