import { css } from 'styled-components';
// import tokens from '../light';
import components from '../light/components';

const Button = css`
    ${components.Button}
    background-color: rebeccapurple;
`;

export default { ...components, Button };
