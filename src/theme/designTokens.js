const designTokens = {
    type: {
        baseFontSize: '1rem',

        sizes: {
            xs: '0.7rem',
            sm: '0.85rem',
            md: '1rem',
            lg: '1.2rem',
            xl: '1.4rem',
            xxl: '2rem',
        },
    },

    colors: {
        colorPalette: {
            text: {
                base: '#212B35',
                light: '#454F5B',
                lighter: '#637381',
            },
            primary: {
                base: '#00d1b2',
            },
            danger: {
                base: '#ff3860',
            },
            neutral: {
                0: '#ffffff',
                100: '#f5f5f5',
                300: '#c5c5c5',
                500: '#a5a5a5',
            },
        },
    },

    breakpoints: {
        s: 200,
        m: '500px',
        l: 800,
    },

    zIndex: {
        low: 10,
        mid: 100,
        high: 1000,
    },

    spacing: {
        scale: [0, 8, 16, 24, 32, 40],
        baseline: 20,
    },
};

export default designTokens;
