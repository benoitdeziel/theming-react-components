import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { modes } from '../theme/modes';
import defaultTheme from '../theme/default';

export const ThemeProvider = ({ mode, styles, children }) => {
    const theme = {
        mode: mode || modes.light,
        styles: styles || defaultTheme,
    };

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
