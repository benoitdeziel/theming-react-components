import { css } from 'styled-components';
import { ifNotProp } from 'styled-tools';

import tokens from '../tokens';
import { Box, Border, TextColor, TextSize } from '../primitives';
import {
    paddingVertical,
    baseUnit,
    paddingHorizontal,
} from '../../../../utils';

let Button = {};

Button.base = css`
    font-weight: 500;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    padding: 0;
`;

Button.variant = {
    primary: {
        base: {
            normal: [Box.Primary, Border.Primary, TextColor.Inverted],
            hover: css`
                background-color: ${tokens.color.palette.primary[700]};
                border-color: ${tokens.color.palette.primary[700]};
            `,
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [TextColor.Primary],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [Border.Primary, TextColor.Primary],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    secondary: {
        base: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    ghost: {
        base: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    danger: {
        base: {
            normal: [Box.Danger, Border.Danger, TextColor.Inverted],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [TextColor.Danger],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [Border.Danger, TextColor.Danger],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    warning: {
        base: {
            normal: [Box.Warning, Border.Warning, TextColor.Inverted],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [TextColor.Danger],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [Border.Warning, TextColor.Warning],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    success: {
        base: {
            normal: [Box.Success, Border.Success, TextColor.Inverted],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [TextColor.Success],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [Border.Success, TextColor.Success],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    facebook: {
        base: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
    twitter: {
        base: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        plain: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
        outline: {
            normal: [],
            hover: [],
            pressed: [],
            focus: [],
        },
    },
};

Button.size = {
    xs: [
        TextSize.xs,
        ifNotProp(
            { kind: 'plain' },
            css`
                ${paddingVertical(baseUnit(1))};
                ${paddingHorizontal(baseUnit(1))};
            `,
        ),
    ],
    sm: [
        TextSize.sm,
        ifNotProp(
            { kind: 'plain' },
            css`
                ${paddingVertical(baseUnit(2))};
                ${paddingHorizontal(baseUnit(3))};
            `,
        ),
    ],
    base: [
        TextSize.base,
        ifNotProp(
            { kind: 'plain' },
            css`
                ${paddingVertical(baseUnit(3))};
                ${paddingHorizontal(baseUnit(3))};
            `,
        ),
    ],
    lg: [
        TextSize.base,
        ifNotProp(
            { kind: 'plain' },
            css`
                ${paddingVertical(baseUnit(4))};
                ${paddingHorizontal(baseUnit(4))};
            `,
        ),
    ],
};

Button.kind = {
    plain: css`
        border-width: 0;
    `,
    outline: css`
        border-width: 1px;
    `,
};

Button.shape = {
    rounded: css`
        border-radius: 25px;
    `,
    round: css`
        border-radius: 100%;
    `,
};

Button.disabled = {
    base: css`
        color: ${tokens.color.palette.neutral[300]};
        background-color: ${tokens.color.palette.neutral[100]};
        border-color: ${tokens.color.palette.neutral[100]};
    `,
    plain: css`
        color: ${tokens.color.palette.neutral[300]};
    `,
    outline: css`
        color: ${tokens.color.palette.neutral[300]};
        border-color: ${tokens.color.palette.neutral[100]};
    `,
};

export default Button;
