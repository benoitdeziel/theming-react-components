import { css } from 'styled-components';
import { Box, TextColor, Border } from '../primitives';
import tokens from '../tokens';

const Button = {
    variant: {
        primary: {
            base: {
                normal: [Box.Primary, Border.Primary, TextColor.Base],
                hover: css`
                    background-color: ${tokens.color.palette.secondary[700]};
                    border-color: ${tokens.color.palette.secondary[700]};
                `,
            },
        },
    },
    shape: {
        rounded: css`
            border-radius: 12px;
        `,
    },
};

export default Button;
