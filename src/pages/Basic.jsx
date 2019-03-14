import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Wrapper } from '../common/Wrapper';
import defaultTheme from '../theme/default/light';
import customTheme from '../theme/custom/light';

const Button = styled.button.attrs({ type: 'button' })`
    /* Base styles */
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

    /* Default Styles */
    background-color: ${({ variant, theme }) => {
        if (theme.mode === 'light') {
            return variant === 'danger'
                ? defaultTheme.color('danger')
                : defaultTheme.color('primary');
        } else if (theme.mode === 'dark') {
            return variant === 'danger'
                ? defaultTheme.color('danger')
                : defaultTheme.color('primary');
        }
    }};
    border-color: transparent;
    color: ${defaultTheme.color('neutral', 0)};

    &:disabled {
        background-color: ${defaultTheme.color('neutral', 100)};
        border-color: transparent;
        color: ${defaultTheme.color('neutral', 300)};
        cursor: default;
    }
`;

const ThemedButton = styled(Button)`
    border-color: ${({ variant }) =>
        variant === 'danger'
            ? customTheme.color('danger')
            : customTheme.color('primary')};
    background-color: transparent;
    color: ${({ variant }) =>
        variant === 'danger'
            ? customTheme.color('danger')
            : customTheme.color('primary')};

    border-width: 2px;
    border-radius: 4px;
    box-shadow: 0 3px 5px ${customTheme.color('neutral', 300)};
`;

const Basic = () => (
    <>
        <Wrapper>
            <h2>Basic</h2>
            <h3>Default</h3>
            <Button>Default Button</Button>
            <h3>Variant</h3>
            <Button variant="danger">Danger Button</Button>
            <h3>Attribute</h3>
            <Button disabled>Disabled button</Button>
            <h3>Themed</h3>
            <ThemedButton>Themed button</ThemedButton>
        </Wrapper>
    </>
);

export default withTheme(Basic);
