import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './utils/ThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { modes } from './theme/modes';

import { createGlobalStyle } from 'styled-components';

import { ThemeSwitcher } from './components/ThemeSwitcher';

import { HomePage } from './pages/Home';
import { ClassComponentPage } from './pages/ClassComponent';
import { ClassComponentStyledPage } from './pages/ClassComponentStyled';
import { SFCPage } from './pages/SFC';
import { SFCStyledPage } from './pages/SFCStyled';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        text-align: center;
        color: ${props =>
            props.theme.mode === modes.light ? 'black' : 'white'};
        background-color: ${props =>
            props.theme.mode === modes.light ? 'white' : 'black'};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

const NavBar = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;

    li {
        margin: 0 0.5em;
    }
`;

class App extends Component {
    state = {
        mode: modes.light,
    };

    switchMode = mode => {
        this.setState({
            mode: modes[mode],
        });
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
                    <h1>Theming React</h1>
                    <ThemeSwitcher onClick={() => this.toggleMode()} />
                    <Router>
                        <>
                            <NavBar>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/class-component">
                                        Class Component
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/class-component-styled">
                                        Class Component Styled
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sfc">SFC</Link>
                                </li>
                                <li>
                                    <Link to="/sfc-styled">SFC Styled</Link>
                                </li>
                            </NavBar>
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <HomePage currentMode={this.state.mode} />
                                )}
                            />
                            <Route
                                path="/class-component"
                                render={() => (
                                    <ClassComponentPage
                                        currentMode={this.state.mode}
                                    />
                                )}
                            />
                            <Route
                                path="/class-component-styled"
                                render={() => (
                                    <ClassComponentStyledPage
                                        currentMode={this.state.mode}
                                    />
                                )}
                            />
                            <Route
                                path="/sfc"
                                render={() => (
                                    <SFCPage currentMode={this.state.mode} />
                                )}
                            />
                            <Route
                                path="/sfc-styled"
                                render={() => (
                                    <SFCStyledPage
                                        currentMode={this.state.mode}
                                    />
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
