import { css } from 'styled-components';
import tokens from './tokens';
import { prepareTheme } from '../utils';

export const Box = {
    Primary: css`
        background-color: ${tokens.color.palette.secondary[500]};
    `,
};

export const Border = {
    Primary: css`
        border-color: ${tokens.color.palette.secondary[500]};
    `,
};

export const TextColor = {
    Base: css`
        color: ${tokens.color.palette.neutral[0]};
    `,
    Primary: css`
        color: ${tokens.color.palette.secondary[500]};
    `,
};

const primitives = { Box, Border, TextColor };

export default prepareTheme('primitives', primitives);
