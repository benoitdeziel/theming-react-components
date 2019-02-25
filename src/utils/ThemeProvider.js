import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { modes } from '../theme/modes';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

export const ThemeProvider = ({ mode, styles, children }) => {
    const theme = {
        mode: mode || modes.light,
        styles: mode === modes.light ? lightTheme : darkTheme,
    };

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
