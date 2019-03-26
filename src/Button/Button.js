import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, children}) => (
    <button onClick={() => console.log('click')} className={`${className}`} >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string.isRequired,
};

export default Button;
