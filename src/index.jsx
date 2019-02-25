import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import theme from 'styled-theming';

import Basic from './pages/Basic';
import { HomePage } from './pages/Home';
import { MaestroPlayground } from './pages/MaestroPlayground';
import { ThemeProvider } from './utils/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { modes } from './theme/modes';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        color: ${props => theme('mode', {
            light: props.theme.styles.color.neutral['900'],
            dark: props.theme.styles.color.neutral['0'],
        })};
        background-color: ${props => theme('mode', {
            light: props.theme.styles.color.neutral['0'],
            dark: props.theme.styles.color.neutral['900'],
        })};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

const AppHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid #c5c5c5;
    background-color: ${props => theme('mode', {
        light: props.theme.styles.color.neutral['0'],
        dark: props.theme.styles.color.neutral['1000'],
    })};
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

class App extends Component {
    state = {
        mode: modes.light,
    };

    toggleMode = () => {
        this.setState({
            mode: this.state.mode === modes.light ? modes.dark : modes.light,
        });
    };

    render() {
        return (
            <ThemeProvider mode={this.state.mode}>
                <div className="App">
                    <GlobalStyle />
                    <Router>
                        <>
                            <AppHeader>
                                <Logo>Theming React</Logo>
                                <NavBar>
                                    <NavBarLink to="/">Home</NavBarLink>
                                    <NavBarLink to="/basic">Basic</NavBarLink>
                                    <NavBarLink to="/maestro">Maestro Playground</NavBarLink>
                                </NavBar>
                                <Actions>
                                    <ThemeSwitcher
                                        onClick={() => this.toggleMode()}
                                    />
                                </Actions>
                            </AppHeader>
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <HomePage currentMode={this.state.mode} />
                                )}
                            />
                            <Route
                                path="/basic"
                                render={() => (
                                        <Basic currentMode={this.state.mode} />
                                )}
                            />
                            <Route
                                path="/maestro"
                                render={() => (
                                        <MaestroPlayground currentMode={this.state.mode} />
                                )}
                            />
                        </>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
