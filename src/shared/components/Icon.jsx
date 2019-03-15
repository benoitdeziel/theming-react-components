import React, { Component } from 'react';

const withIcon = IconComponent => {
    return class IconHOC extends Component {
        render() {
            return <IconComponent {...this.props} />;
        }
    };
};

export default withIcon;
