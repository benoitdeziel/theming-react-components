import React from 'react';

const BaseButton = props => {
    let classes = props.className || '';

    // Add the active class if toggleState is passed and is true
    if (props.toggleState) {
        classes = `${classes} active`;
    }

    return (
        <button {...props} className={classes}>
            <div className="inner">{props.children}</div>
        </button>
    );
};

export default function Button(props) {
    return <button {...props} />;
}
