import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Card = styled.div`
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
`;

Card.Button = props => <Button variant="primary" {...props} />;

export default Card;
