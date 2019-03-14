import React from 'react';
import styled, { withTheme } from 'styled-components';
import use from 'reuse';
import customTheme from '../theme/custom/light';

import { Wrapper } from '../common/Wrapper';
import { ThemeProvider } from '../utils/ThemeProvider';

const ButtonBase = styled(use('div'))`
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
    overflow: hidden;

    & + & {
        margin-left: 1em;
    }
`;

const ButtonElement = styled.button.attrs(() => ({
    type: 'button',
}))`
    ${props => props.theme.ds.Button}
`;

const ButtonBuilder = ({ variant, ...props }) => {
    return (
        <ButtonElement variant={variant ? variant : 'primary'} {...props}>
            {props.icon && <div />}
            {!props.isLoading && <div>{props.children}</div>}
            {props.isLoading && <div>Loading</div>}
        </ButtonElement>
    );
};

const Button = use(ButtonBase, ButtonBuilder);

const TestElement = styled(use('div'))`
    display: block;
    background-color: yellow;
`;

const Test = withTheme(props => {
    return (
        <TestElement use={props.theme.ds.ComposableComponent}>
            {props.children}
        </TestElement>
    );
});

const Composable = () => (
    <>
        <Wrapper>
            <h1>Composable Buttons</h1>
            <h2>Default</h2>
            <h3>Based</h3>
            <Button>My button</Button>
            <Button disabled>My button</Button>
            <Button kind="outline">My button</Button>
            <Button kind="plain">My button</Button>
            <h3>Danger</h3>
            <Button variant="danger">Danger button</Button>
            <Button variant="danger" disabled>
                Danger button
            </Button>
            <Button variant="danger" kind="outline">
                Danger button
            </Button>
            <Button variant="danger" kind="plain">
                Danger button
            </Button>
            <h3>Loading</h3>
            <Button variant="danger" isLoading={false}>
                Danger button
            </Button>
            <h2>Themed</h2>
            <ThemeProvider theme={customTheme}>
                <Button>My Themed button</Button>
            </ThemeProvider>
            <h2>Composition</h2>
            <Test>Hello world</Test>
        </Wrapper>
    </>
);

export default Composable;
