import defaultTokens from '../../default/light/tokens';

const tokens = {
    ...defaultTokens,
    colors: {
        colorPalette: {
            text: {
                base: '#212B35',
                light: '#454F5B',
                lighter: '#637381',
            },
            primary: {
                base: '#007bff',
                300: '#84DFDF',
                400: '#5AD5D5',
                500: '#32CBCB',
                600: '#2DB6B6',
                700: '#28A2A2',
            },
            danger: {
                base: '#ffc107',
            },
            neutral: {
                0: '#ffffff',
                100: '#f5f5f5',
                300: '#c5c5c5',
                500: '#a5a5a5',
            },
        },
    },
};

export default tokens;
