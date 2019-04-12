import tokens from './tokens';
import { css } from 'styled-components';

const baseUnit = multiplier => `${multiplier * 4}px`;

export const Box = {
    Transparent: css`
        background-color: transparent;
    `,
    Primary: css`
        background-color: ${tokens.color.palette.primary[500]};
    `,
    Danger: css`
        background-color: ${tokens.color.palette.danger[500]};
    `,
    Warning: css`
        background-color: ${tokens.color.palette.warning[500]};
    `,
    Success: css`
        background-color: ${tokens.color.palette.success[500]};
    `,
    Facebook: css`
        background-color: ${tokens.color.palette.facebook[500]};
    `,
    Twitter: css`
        background-color: ${tokens.color.palette.twitter[500]};
    `,
};

export const Border = {
    Transparent: css`
        border-color: transparent;
    `,
    Base: css`
        border-color: ${tokens.color.palette.neutral[500]};
    `,
    Primary: css`
        border-color: ${tokens.color.palette.primary[500]};
    `,
    Danger: css`
        border-color: ${tokens.color.palette.danger[500]};
    `,
    Warning: css`
        border-color: ${tokens.color.palette.warning[500]};
    `,
    Success: css`
        border-color: ${tokens.color.palette.success[500]};
    `,
    Facebook: css`
        border-color: ${tokens.color.palette.facebook[500]};
    `,
    Twitter: css`
        border-color: ${tokens.color.palette.twitter[500]};
    `,
};

export const TextColor = {
    Base: css`
        color: ${tokens.color.palette.neutral[700]};
    `,
    Inverted: css`
        color: ${tokens.color.palette.neutral[0]};
    `,
    Primary: css`
        color: ${tokens.color.palette.primary[500]};
    `,
    Danger: css`
        color: ${tokens.color.palette.danger[500]};
    `,
    Warning: css`
        color: ${tokens.color.palette.warning[500]};
    `,
    Success: css`
        color: ${tokens.color.palette.success[500]};
    `,
    Facebook: css`
        color: ${tokens.color.palette.facebook[500]};
    `,
    Twitter: css`
        color: ${tokens.color.palette.twitter[500]};
    `,
};

export const TextSize = {
    xs: css`
        font-size: 12px;
        line-height: ${baseUnit(4)};
    `,
    sm: css`
        font-size: 13px;
        line-height: ${baseUnit(4)};
    `,
    base: css`
        font-size: 15px;
        line-height: ${baseUnit(5)};
    `,
    lg: css`
        font-size: 24px;
        line-height: ${baseUnit(8)};
    `,
    xl: css`
        font-size: 36px;
        line-height: ${baseUnit(10)};
    `,
};

export default { Box, Border, TextColor, TextSize };
