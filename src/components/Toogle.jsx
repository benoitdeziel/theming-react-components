import React from 'react';
import styled from 'styled-components';

const ToggleComponent = styled.label`
    display: inline-flex;
    align-items: center;
`;

const ToggleSlider = styled.div`
    display: flex;
    justify-content: ${props => (props.isActive ? 'flex-end' : 'flex-start')};
    width: calc(1.5em * 2.5);
    border: 1px solid tomato;
    border-radius: 1.5em;
    padding: 0.25em;
`;

const ToggleHandle = styled.div`
    background-color: tomato;
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
`;

const ToggleText = styled.div`
    font-weight: bold;

    &:first-child {
        margin-right: 0.5em;
    }

    &:last-child {
        margin-left: 0.5em;
    }
`;

export const Toggle = props => {
    return (
        <ToggleComponent>
            <ToggleText>{props.offText}</ToggleText>
            <ToggleSlider {...props}>
                <ToggleHandle />
            </ToggleSlider>
            <ToggleText>{props.onText}</ToggleText>
        </ToggleComponent>
    );
};
