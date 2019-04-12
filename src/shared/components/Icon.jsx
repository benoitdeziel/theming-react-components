import React from 'react';

const IconSizes = {
    xs: 12,
    sm: 20,
    base: 24,
    lg: 32,
    xl: 44,
};

const withIcon = IconComponent => props => (
    <IconComponent size={IconSizes[props.size]} />
);

export default withIcon;
