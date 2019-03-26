import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    className, 
    disabled,
    isSubmit,
    children,
    ...attrs
}) => {
    
    attrs.type = (isSubmit) ? 'submit' : 'Button';
    
    return (
        <button className={className} disabled={disabled} {...attrs}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    target: PropTypes.string,
    href: PropTypes.string,
    link: PropTypes.bool,
    disabled: PropTypes.bool,
    isSubmit: PropTypes.bool,
    link: PropTypes.bool,
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  }

export default Button;
