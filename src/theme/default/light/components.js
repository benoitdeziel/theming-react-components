import styled, { css } from 'styled-components';
import tokens from './tokens';
import { switchProp } from 'styled-tools';
import use from 'reuse';

const BoxPrimary = css`
    background-color: ${tokens.colors.colorPalette.primary.base};
`;

const BoxDanger = css`
    background-color: ${tokens.colors.colorPalette.danger.base};
`;

const BorderPrimary = css`
    border-color: ${tokens.colors.colorPalette.primary.base};
`;

const BorderDanger = css`
    border-color: ${tokens.colors.colorPalette.danger.base};
`;

const Button = css`
    color: white;

    ${switchProp('variant', {
        primary: css`
            ${BoxPrimary}
            ${BorderPrimary}


            &:hover {
                opacity: 0.7;
            }
        `,
        danger: css`
            ${BoxDanger}
            ${BorderDanger}


            &:hover {
                opacity: 0.7;
            }
        `,
    })}

    ${switchProp('kind', {
        outline: css`
            color: ${({ variant }) => tokens.colors.colorPalette[variant].base};
            background-color: transparent;
        `,
        plain: css`
            color: ${({ variant }) => tokens.colors.colorPalette[variant].base};
            background-color: transparent;
            border-color: transparent;
            border-width: 0;
            padding: 0;
        `,
    })}

    &:disabled {
        color: ${tokens.colors.colorPalette.neutral[300]};
        background-color: ${tokens.colors.colorPalette.neutral[100]};
        border-color: transparent;
        cursor: default;

        &:hover {
            opacity: 1;
        }
    }
`;

const Paper = styled(use('div'))`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Rounded = styled(use('div'))`
    border-radius: 5px;
`;

const ButtonAlt = styled(use('button'))`
    font-size: 16px;
    padding: 0 1em;
    line-height: 2.5em;
    background: #3f51b5;
    color: white;
    cursor: pointer;
`;

const ComposableComponent = use(Paper, Rounded, ButtonAlt);

export default { Button, BoxPrimary, BoxDanger, ComposableComponent };
