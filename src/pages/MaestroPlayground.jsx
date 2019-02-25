import React from 'react';
import styled, {css} from 'styled-components';
import theme from 'styled-theming';

import { Wrapper } from '../components/Wrapper';

const PageWrapper = styled(Wrapper)`
    text-align: center;
    width: 800px;
    max-width: 100%;
    margin: auto;
`;

const PageTitle = styled.h1`
    margin-bottom: 0;
    font-size: 30px;
`;

const PageSubtitle = styled.h2`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 60px;
`;

const SectionTitle = styled.h3``;

const ComponentTitle = styled.h4``;

const ComponentGroup = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
`;

const getBackgroundColor = (props) => {
    let defaultValue = props.theme.styles.color.primary['500'];
    let selectedStateValue = props.theme.styles.color.primary['700'];
    let value = defaultValue;

    const mode = {
        light: defaultValue,
        dark: defaultValue
    }
    const variant = {
        danger: props.theme.styles.color.danger['500'],
        warning: props.theme.styles.color.warning['500'],
        success: defaultValue
    }
    const outlinedValue = 'transparent';
    
    value = theme('mode', mode);
    value = variant[props.variant] || value;
    value = props.selected ? selectedStateValue : value;
    value = props.outlined && outlinedValue || value;

    selectedStateValue = props.outlined ? outlinedValue : selectedStateValue;

    return css`
        background-color: ${value};

        &:hover {
            background-color: ${selectedStateValue};
        }
    `
}

const getBorderColor = (props) => {
    let selectedStateValue = props.theme.styles.color.primary['700'];
    let defaultValue = 'transparent';
    let color;
    const mode = {
        light: defaultValue,
        dark: '#00d1b2',
    }
    const variant = {
        danger: defaultValue,
        warning: defaultValue,
        success: defaultValue,
    }
    const outlined = props.selected ? props.theme.styles.color.primary['700']: props.theme.styles.color.primary['500'];
    color = theme('mode', mode);
    color = variant[props.variant] || color;
    color = props.outlined && outlined || color;

    return css`
        border-color: ${color}

        &:hover {
            border-color: ${selectedStateValue};
        }
    `;
}

const getColor = (props) => {
    let selectedStateValue = props.theme.styles.color.neutral['0'];
    let defaultValue = props.theme.styles.color.neutral['0'];
    let color;
    const mode = {
        light: defaultValue,
        dark: defaultValue,
    }
    const variant = {
        danger: defaultValue,
        warning: defaultValue,
        success: defaultValue,
    }
    const outlined = props.selected ? props.theme.styles.color.primary['700']: props.theme.styles.color.primary['500'];
    color = theme('mode', mode);
    color = variant[props.variant] || color;
    if (props.outlined) {
        color = outlined;
        selectedStateValue = props.theme.styles.color.primary['700']
    }
    return css`
        color: ${color};

        &:hover {
            color: ${selectedStateValue}
        }
    `;
}

const Button = styled.button`
    font-size: 1rem;
    line-height: 2;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    justify-content: center;
    padding-left: .75em;
    padding-right: .75em;
    text-align: center;
    white-space: nowrap;

    ${getBackgroundColor};
    ${getBorderColor};
    ${getColor};

    &:disabled {
        background-color: #f5f5f5;
        border-color: transparent;
        color: #c5c5c5;
        cursor: default;
    }
`;

const DemoButton = styled(Button)`
    margin: 10px 0;
`;

const CustomThemedButton = styled(DemoButton)`
    background-color: #fff;
    border-color: #007bff;
    color: #007bff;
    border-width: 2px;
    border-radius: 4px;
    box-shadow: 0 3px 5px #c5c5c5;
`;

export const MaestroPlayground = () => (
    <>
        <PageWrapper>
            <PageTitle>Maestro Playground</PageTitle>
            <PageSubtitle>Button</PageSubtitle>
            <SectionTitle>Default</SectionTitle>
            <ComponentContainer>
                <DemoButton>Normal</DemoButton>
                <DemoButton selected>Selected</DemoButton>
                <DemoButton outlined>Normal Outlined</DemoButton>
                <DemoButton outlined selected>Selected Outlined</DemoButton>
                <DemoButton disabled>Disabled</DemoButton>
            </ComponentContainer>
            <SectionTitle>Variants</SectionTitle>
            <ComponentGroup>
                <ComponentContainer>
                    <DemoButton variant="success">Success Variant Button</DemoButton>
                </ComponentContainer>
                <ComponentContainer>
                    <DemoButton variant="danger">Danger Variant Button</DemoButton>
                </ComponentContainer>
                <ComponentContainer>
                    <DemoButton variant="warning">Warning Variant Button</DemoButton>
                </ComponentContainer>
            </ComponentGroup>
            <SectionTitle>Custom Theme</SectionTitle>
            <ComponentContainer>
                <CustomThemedButton>Custom Themed Button</CustomThemedButton>
            </ComponentContainer>
        </PageWrapper>
    </>
);
