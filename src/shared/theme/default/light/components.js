import lightComponents from '../light/components';

import styled from 'styled-components';
import use from 'reuse';

const Button = styled(use('div'))`
    color: blue;
`;

export default { ...lightComponents, Button };
