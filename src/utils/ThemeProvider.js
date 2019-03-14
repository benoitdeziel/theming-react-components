import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { modes } from '../theme/modes';

export const ThemeProvider = ({ mode, theme, children }) => {
    const themeOject = {
        mode: mode || modes.light,
        ...theme,
    };

    return (
        <StyledThemeProvider theme={themeOject}>{children}</StyledThemeProvider>
    );
};
