import React from 'react';
import styled from 'styled-components';

const ToggleComponent = styled.label`
    display: inline-flex;
    align-items: center;
`;

const ToggleSlider = styled.div`
    display: flex;
    justify-content: ${props => (props.isActive ? 'flex-end' : 'flex-start')};
    width: calc(1em * 3);
    border: 2px solid #a5a5a5;
    border-radius: 1em;
    padding: 0.25em;
`;

const ToggleHandle = styled.div`
    background-color: ${props => (props.isActive ? 'tomato' : '#a5a5a5')};
    width: 1em;
    height: 1em;
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
                <ToggleHandle {...props} />
            </ToggleSlider>
            <ToggleText>{props.onText}</ToggleText>
        </ToggleComponent>
    );
};
