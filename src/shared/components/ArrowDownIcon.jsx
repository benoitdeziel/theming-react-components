import React from 'react';
import withIcon from './Icon';

const ArrowDownIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <title>Arrow Down Icon</title>
        <g fill="currentColor">
            <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z" />
        </g>
    </svg>
);

export default withIcon(ArrowDownIcon);
