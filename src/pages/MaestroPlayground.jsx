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

// Button Styles

const OutlinedButton = css`
    background-color: transparent;
    border-color: ${props => props.selected ? props.theme.styles.color.primary['700'] : props.theme.styles.color.primary['500']};
    color: ${props => props.selected ? props.theme.styles.color.primary['700'] : props.theme.styles.color.primary['500']};

    &:hover {
        background-color: transparent;
        border-color: ${props => props.theme.styles.color.primary['700']};
        color: ${props => props.theme.styles.color.primary['700']};
    }
`;

const BaseButton = styled.button`
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
    background-color: ${props => theme('mode', {
        light: props.selected ? props.theme.styles.color.primary['700'] : props.theme.styles.color.primary['500'],
        dark: props.selected ? props.theme.styles.color.neutral['100'] : props.theme.styles.color.neutral['0'],  
    })};
    color: ${props => theme('mode', {
        light: props.theme.styles.color.neutral['0'],
        dark: props.selected ? props.theme.styles.color.neutral['1000'] : props.theme.styles.color.neutral['700']
    })};
    border-color: transparent;

    &:hover {
        background-color: ${props => theme('mode', {
            light: props.theme.styles.color.primary['700'],
            dark: props.theme.styles.color.neutral['100'],  
        })};
        color: ${props => theme('mode', {
            dark: props.theme.styles.color.neutral['1000']
        })};
    }

    &:disabled {
        border-color: transparent !important;
        cursor: default !important;
        background-color: ${props => props.theme.styles.color.neutral['100']} !important;
        color: ${props => props.theme.styles.color.neutral['300']} !important;
    }

    ${props => props.outlined && OutlinedButton}
`;

const OutlinedDangerButton = css`
    background-color: transparent;
    color: ${props => props.theme.styles.color.danger['500']};
    border-color: ${props => props.theme.styles.color.danger['500']};

    :not([disabled]):hover {
        background-color: transparent;
        color: ${props => props.theme.styles.color.danger['700']};
        border-color: ${props => props.theme.styles.color.danger['700']};
    }
`;

const DangerButton = styled(BaseButton)`
    background-color: ${props => props.theme.styles.color.danger['500']};
    
    :not([disabled]):hover {
        background-color: ${props => props.theme.styles.color.danger['700']};
    }

    ${props => props.outlined && OutlinedDangerButton}
`;

const SuccessButton = styled(BaseButton)`
    ${props => props.outlined && OutlinedButton};
`;

const OutlinedWarningButton = css`
    background-color: transparent;
    color: ${props => props.theme.styles.color.warning['500']};
    border-color: ${props => props.theme.styles.color.warning['500']};

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.styles.color.warning['700']};
        border-color: ${props => props.theme.styles.color.warning['700']};
    }
`;

const WarningButton = styled(BaseButton)`
    background-color: ${props => props.theme.styles.color.warning['500']};

    &:hover {
        background-color: ${props => props.theme.styles.color.warning['700']};
    }

    ${props => props.outlined && OutlinedWarningButton}
`;

const Button = (props) => {
    const variants = {
        danger: (props) => <DangerButton {...props}></DangerButton>,
        warning: (props) => <WarningButton {...props}></WarningButton>,
        success: (props) => <SuccessButton {...props}></SuccessButton>,
    }
    if (props.variant) {
        return variants[props.variant](props);
    }
    return <BaseButton {...props}></BaseButton>
}

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

    &:hover {
        background-color: #fff;
    }
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
                <DemoButton outlined>Outlined</DemoButton>
                <DemoButton outlined selected>Outlined Selected</DemoButton>
                <DemoButton disabled>Disabled</DemoButton>
            </ComponentContainer>
            <SectionTitle>Variants</SectionTitle>
            <ComponentGroup>
                <ComponentContainer>
                    <DemoButton variant="success">Success</DemoButton>
                    <DemoButton variant="success" outlined>Outlined</DemoButton>
                    <DemoButton variant="success" outlined disabled>Disabled</DemoButton>
                </ComponentContainer>
                <ComponentContainer>
                    <DemoButton variant="danger">Danger</DemoButton>
                    <DemoButton variant="danger" outlined>Outlined</DemoButton>
                    <DemoButton variant="danger" outlined disabled>Disabled</DemoButton>
                </ComponentContainer>
                <ComponentContainer>
                    <DemoButton variant="warning">Warning</DemoButton>
                    <DemoButton variant="warning" outlined>Outlined</DemoButton>
                    <DemoButton variant="warning" outlined disabled>Disabled</DemoButton>
                </ComponentContainer>
            </ComponentGroup>
            <SectionTitle>Custom Theme</SectionTitle>
            <ComponentContainer>
                <CustomThemedButton>Custom Themed Button</CustomThemedButton>
            </ComponentContainer>
        </PageWrapper>
    </>
);
