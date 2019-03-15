import React from 'react';
import styled, { withTheme } from 'styled-components';
import use from 'reuse';

const ButtonText = styled.div`
    flex: 1 0 auto;
`;

const ButtonIcon = styled.div`
    flex: 0 1 auto;
    margin-right: auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const ButtonElement = styled(use('button')).attrs({ type: 'button' })`
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    vertical-align: middle;
    transform: translateZ(0);

    & + & {
        margin-left: 1rem;
    }
`;

const Button = props => {
    return (
        <ButtonElement use={props.theme.styles.components.Button} {...props}>
            <ButtonWrapper>
                {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
                <ButtonText>{props.children}</ButtonText>
            </ButtonWrapper>
        </ButtonElement>
    );
};

export default withTheme(Button);
