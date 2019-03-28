import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Alert = ({
  children,
  simple,
  close,
  icon,
  type,
  ...attrs
}) => {
  const [offModal, setModalOff] = useState(false);
  const assignType = type && `alert--${type}`;
  const isDismissable = close && 'alert--dismissable';
  const withIcon = icon && 'alert--icon';

  const renderAlert = () => {
    if (offModal) return null;
    return (
      <div className={`alert ${assignType} ${isDismissable} ${withIcon}`} {...attrs}>
        {icon && <i className="material-icons">{icon}</i>}
        {children}
        {close && (
        <button onClick={() => setModalOff(true)} className="icon-button icon-button--close" type="button">
          <i className="material-icons">close</i>
        </button>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      {renderAlert()}
    </Fragment>
  );
};

Alert.propTypes = {
  simple: PropTypes.bool,
  close: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Alert.defaultProps = {
  simple: true,
  close: false,
  icon: '',
  type: '',
  children: 'No content'
};

export default Alert;
