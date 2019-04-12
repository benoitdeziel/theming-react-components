import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';

import { ThemeSwitcher } from './common/ThemeSwitcher';
import { ThemeProvider, useTheme } from './common/utils/ThemeProvider';

import Theme from './shared/theme/default';
import { modes } from './shared/theme/modes';

import Buttons from './pages/Buttons';
import HomePage from './pages/Home';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        font-weight: 400;
        line-height: 1.45;
        color: ${props =>
            props.theme.mode === modes.light ? 'black' : 'white'};
        background-color: ${props =>
            props.theme.mode === modes.light ? 'white' : 'black'};
    }

    p {
        margin-bottom: 1.25em;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 1em 0;
        font-weight: 400;
        line-height: 1.15;
    }

    h1 {
        margin-top: 0;
        font-size: 4.209em;
    }

    h2 {
        font-size: 3.157em;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #ccc;
    }

    h3 {
        font-size: 2.369em;
    }

    h4 {
        font-size: 1.777em;
        font-weight: 500;
    }

    h5 {
        font-size: 1.333em;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

const AppHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    background-color: ${props =>
        props.theme.mode === modes.light ? 'white' : 'black'};
    border-bottom: 1px solid #c5c5c5;
`;

const Logo = styled.div`
    flex: 0 1 auto;
    font-weight: 700;
`;

const NavBar = styled.ul`
    flex: 1 0 auto;
    display: flex;
    list-style: none;

    li {
        margin: 0 0.5em;
    }

    a {
        font-weight: 500;
        text-decoration: none;

        &:link,
        &:visited {
            color: #a5a5a5;
        }

        &.active {
            font-weight: 700;
            color: tomato;
        }
    }
`;

const NavBarLink = props => (
    <li>
        <NavLink exact {...props} activeClassName="active" />
    </li>
);

const Actions = styled.div`
    flex: 0 1 auto;
    margin-left: auto;
`;

const App = () => {
    const themeState = useTheme();

    return (
        <div className="App">
            <GlobalStyle />
            <Router>
                <>
                    <AppHeader>
                        <Logo>Theming React</Logo>
                        <NavBar>
                            <NavBarLink to="/">Home</NavBarLink>
                            <NavBarLink to="/buttons">Buttons</NavBarLink>
                        </NavBar>
                        <Actions>
                            <ThemeSwitcher
                                onClick={() => themeState.toggle()}
                            />
                        </Actions>
                    </AppHeader>
                    <Route path="/" exact render={() => <HomePage />} />
                    <Route path="/buttons" render={() => <Buttons />} />
                </>
            </Router>
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
    <ThemeProvider styles={Theme}>
        <App />
    </ThemeProvider>,
    rootElement,
);
