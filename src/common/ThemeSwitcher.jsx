import React from 'react';
import { Toggle } from './Toggle';
import { useTheme } from '../utils/ThemeProvider';

export const ThemeSwitcher = props => {
    const themeState = useTheme();
    const toggle = () => {
        props.onClick();
    };
    return (
        <Toggle
            isActive={themeState.isDarkMode}
            offText="Light"
            onText="Dark"
            onClick={() => toggle()}
        />
    );
};
