import { css } from 'styled-components';
import tokens from '../light';

const BoxPrimary = css`
    background-color: ${tokens.color('primary')};
`;

const BoxDanger = css`
    background-color: ${tokens.color('danger')};
`;

const Button = css`
    color: ${tokens.color('neutral', 0)};
    border-color: ${tokens.color('primary')};

    &:disabled {
        color: ${tokens.color('neutral', 300)};
        background-color: ${tokens.color('neutral', 100)};
        border-color: transparent;
        cursor: default;
    }
`;

export default { Button, BoxPrimary, BoxDanger };
