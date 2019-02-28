import DesignSystem from 'design-system-utils';
import designTokens from './designTokens';

const customDesignTokens = {
    colors: {
        colorPalette: {
            text: {
                base: '#212B35',
                light: '#454F5B',
                lighter: '#637381',
            },
            primary: { base: '#007bff' },
            danger: { base: '#ffc107' },
            neutral: {
                0: '#ffffff',
                100: '#f5f5f5',
                300: '#c5c5c5',
                500: '#a5a5a5',
            },
        },
    },
};

export const customTokens = new DesignSystem({
    ...designTokens,
    ...customDesignTokens,
});
