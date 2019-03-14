import { css } from 'styled-components';
import tokens from './tokens';
import { switchProp } from 'styled-tools';

import defaultComponents from '../../default/light/components';

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
`;

export default { ...defaultComponents, Button };
