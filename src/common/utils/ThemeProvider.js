import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { modes } from '../../shared/theme/modes';

const LOCALSTORAGE_MODE_NAME = 'LandrDarkMode';

const defaultContextData = {
    isDarkMode: false,
    toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        isDarkMode: false,
        hasThemeLoaded: false,
    });

    React.useEffect(() => {
        const localstorageMode =
            localStorage.getItem(LOCALSTORAGE_MODE_NAME) === 'true';
        setThemeState({
            ...themeState,
            isDarkMode: localstorageMode,
            hasThemeLoaded: true,
        });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ styles, children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeLoaded) {
        return <div>Loading...</div>;
    }

    const toggle = () => {
        const isDarkMode = !themeState.isDarkMode;

        localStorage.setItem(
            LOCALSTORAGE_MODE_NAME,
            JSON.stringify(isDarkMode),
        );

        setThemeState({ ...themeState, isDarkMode });
    };

    const computedTheme = {
        mode: themeState.isDarkMode ? modes.dark : modes.light,
        styles: themeState.isDarkMode ? styles.dark : styles.light,
    };

    return (
        <StyledThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{ isDarkMode: themeState.isDarkMode, toggle }}>
                {children}
            </ThemeContext.Provider>
        </StyledThemeProvider>
    );
};

export { ThemeProvider, useTheme };
