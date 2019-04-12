import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import ArrowDownIcon from '../components/ArrowDownIcon';
import { ifProp } from 'styled-tools';
import SpinnerIcon from './SpinnerIcon';

const ButtonStyles = props => {
    const Button = props.theme.styles.components.Button;

    return css`
        ${Button.base};

        ${({ variant, kind }) => Button.variant[variant][kind].normal}
        ${({ kind }) => Button.kind[kind]}
        ${({ size }) => Button.size[size]}
        ${({ shape }) => Button.shape[shape]} 

        &:hover {
            ${({ variant, kind }) => Button.variant[variant][kind].hover}
        }

        &:focus,
        &:active {
            outline: 0;
            ${({ variant, kind }) => Button.variant[variant][kind].focus}
        }

        &[disabled],
        &:disabled {
            ${({ variant, kind }) =>
                Button.variant[variant][kind].disabled
                    ? Button.variant[variant][kind].disabled
                    : Button.disabled[kind]}
        }
    `;
};

const ButtonIconStyles = ({ theme }) =>
    !!theme.styles.components.ButtonIcon
        ? theme.styles.components.ButtonIcon
        : null;

const ButtonElement = {
    Content: styled.div`
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
        transition: top 400ms ease-in-out;
        top: 0;

        ${ifProp(
            'loading',
            css`
                top: -3em;
            `,
        )}
    `,
    Icon: {
        Left: styled.div`
            flex: 0 1 auto;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            margin-left: auto;

            ${ButtonIconStyles}
        `,
        Right: styled.div`
            flex: 0 1 auto;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;

            ${ButtonIconStyles}
        `,
    },
    Label: styled.div`
        flex: 0 1 auto;
        word-wrap: break-word;
        white-space: normal;
        text-align: left;
        line-height: inherit;
        padding: 0 8px;
        margin-right: auto;
        margin-left: auto;

        ${ifProp(
            'icon',
            css`
                margin-left: 0;
            `,
        )}
    `,
    Loader: styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: top 400ms ease-in-out;

        ${ifProp(
            'loading',
            css`
                top: 0;
            `,
        )}
    `,
};

const ButtonComponent = ({
    children,
    dropdown,
    fluid,
    icon,
    iconRight,
    kind,
    loading,
    shape,
    size,
    theme,
    variant,
    ...restProps
}) => {
    const Component = restProps.href ? 'a' : 'button';

    return (
        <Component {...restProps}>
            <ButtonElement.Content loading={loading}>
                {icon && (
                    <ButtonElement.Icon.Left>
                        {<icon />}
                    </ButtonElement.Icon.Left>
                )}
                {children && shape !== 'round' && (
                    <ButtonElement.Label icon={icon}>
                        {children}
                    </ButtonElement.Label>
                )}
                {(dropdown || iconRight) && (
                    <ButtonElement.Icon.Right>
                        {dropdown && <ArrowDownIcon size={size} />}
                        {iconRight && <>{iconRight}</>}
                    </ButtonElement.Icon.Right>
                )}
            </ButtonElement.Content>

            <ButtonElement.Loader loading={loading}>
                {loading && <SpinnerIcon size={size} />}
            </ButtonElement.Loader>
        </Component>
    );
};

const Button = styled(ButtonComponent).attrs({ type: 'button' })`
    ${ifProp(
        'fluid',
        css`
            width: 100%;
            display: flex;
        `,
        css`
            display: inline-flex;
        `,
    )};
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    white-space: nowrap;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 400ms ease-in-out;

    ${ifProp(
        ({ loading, disabled }) => loading || disabled,
        css`
            pointer-events: none;
        `,
    )}

    & + & {
        margin-left: 1rem;
    }

    ${ButtonStyles}
`;

Button.propTypes = {
    dropdown: PropTypes.bool,
    fluid: PropTypes.bool,
    icon: PropTypes.object,
    iconRight: PropTypes.object,
    kind: PropTypes.string,
    loading: PropTypes.bool,
    shape: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    theme: PropTypes.object,
};

Button.defaultProps = {
    dropdown: false,
    fluid: false,
    icon: null,
    iconRight: null,
    kind: 'base',
    loading: false,
    shape: 'base',
    size: 'base',
    variant: 'primary',
};

Button.displayName = 'MaestroButton';

export default withTheme(Button);
