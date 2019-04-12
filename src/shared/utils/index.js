import { css } from 'styled-components';

export const baseUnit = multiplier => `${multiplier * 4}px`;

export const paddingVertical = size => css`
    padding-top: ${size};
    padding-bottom: ${size};
`;
export const paddingHorizontal = size => css`
    padding-left: ${size};
    padding-right: ${size};
`;
