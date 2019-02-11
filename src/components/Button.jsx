import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as styledTheme from 'styled-theming';

const ButtonBase = css`
    font-size: 1rem;
    padding: 0.5em 0.75em;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;

    & + button {
        margin-left: 1em;
    }
`;

const color = ({ theme }) => {
    const defaultStyles = {
        default: { light: 'white', dark: 'white' },
        primary: { light: 'white', dark: 'white' },
    };

    return styledTheme.variants('mode', 'variant', defaultStyles);
};

const backgroundColor = ({ theme, styles: customStyles }) => {
    const defaultBackgroundColorStyles = {
        default: {
            light: theme.styles.color.secondary,
            dark: theme.styles.color.primary,
        },
        primary: {
            light: theme.styles.color.primary,
            dark: theme.styles.color.secondary,
        },
    };

    const customBackgroundColorStyles =
        (customStyles && customStyles.backgroundColor) || {};

    const backgroundColorStyles = Object.assign(
        defaultBackgroundColorStyles,
        customBackgroundColorStyles,
    );

    return styledTheme.variants('mode', 'variant', backgroundColorStyles);
};

const borderColor = ({ theme, styles: customStyles }) => {
    const defaultBorderColorStyles = {
        default: {
            light: theme.styles.color.secondary,
            dark: theme.styles.color.primary,
        },
        primary: {
            light: theme.styles.color.primary,
            dark: theme.styles.color.secondary,
        },
    };

    const customBorderColorStyles =
        (customStyles && customStyles.backgroundColor) || {};

    const borderColorStyles = Object.assign(
        defaultBorderColorStyles,
        customBorderColorStyles,
    );

    return styledTheme.variants('mode', 'variant', borderColorStyles);
};

const ButtonStyles = css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${borderColor};
`;

const StyledButton = styled.button`
    ${ButtonBase}
    ${ButtonStyles}
`;

const ButtonIcon = styled.i`
    display: inline-block;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    background-color: turquoise;
`;

const onClickHandler = () => {
    alert('Button clicked');
};

class Button extends Component {
    static propTypes = {
        variant: PropTypes.oneOf(['default', 'primary']),
        onClick: PropTypes.func,
    };

    render() {
        return (
            <StyledButton {...this.props}>
                {this.props.icon && <ButtonIcon />}
                {this.props.children}
            </StyledButton>
        );
    }
}

Button.defaultProps = {
    variant: 'default',
    onClick: () => {
        onClickHandler();
    },
};

export default Button;
