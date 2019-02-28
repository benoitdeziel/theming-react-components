import React from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

import { tokens } from '../theme';
import { customTokens } from '../theme/customTokens';

import { Wrapper } from '../components/Wrapper';

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

const ButtonVariants = css`
    ${switchProp(prop('variant', 'default'), {
        default: css`
            ${switchProp('theme.mode', {
                light: css`
                    background-color: ${tokens.color('primary')};
                    border-color: transparent;
                    color: ${tokens.color('neutral', '0')};
                `,
                dark: css`
                    background-color: transparent;
                    border-color: ${tokens.color('primary')};
                    color: ${tokens.color('primary')};
                `,
            })};
        `,
        danger: css`
            background-color: ${tokens.color('danger')};
            border-color: transparent;
            color: ${tokens.color('neutral', '0')};
        `,
    })}
`;

const Button = styled.button.attrs({
    type: 'button',
})`
    ${ButtonBase}
    ${ButtonVariants}

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

    ${switchProp(prop('variant', 'default'), {
        default: css`
            background-color: ${customTokens.color('neutral', '0')};
            border-color: ${customTokens.color('primary')};
            color: ${customTokens.color('primary')};
        `,
    })}
`;

const StyledTools = () => (
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
                <li>Nice utilities</li>
            </ul>
            <h4>Cons</h4>
            <ul>
                <li>Design System Utils are a little opiniated</li>
            </ul>
        </Wrapper>
    </>
);

export default StyledTools;
