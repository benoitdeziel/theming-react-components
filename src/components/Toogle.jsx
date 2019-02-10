import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    width: 4em;
    display: flex;
    justify-content: ${props => (props.isActive ? 'flex-end' : 'flex-start')};
    border: 1px solid black;
`;

const ToggleHandle = styled.div`
    background-color: black;
    width: 2em;
    height: 2em;
`;

export const Toggle = props => {
    return (
        <ToggleContainer {...props}>
            <ToggleHandle />
        </ToggleContainer>
    );
};
