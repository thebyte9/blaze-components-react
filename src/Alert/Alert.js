import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Alert = ({
  children,
  close,
  icon,
  type,
  ...attrs
}) => {
  const [offModal, setModalOff] = useState(false);
  const assignType = type && `alert--${type}`;
  const isDismissable = close && 'alert--dismissable';
  const withIcon = icon && 'alert--icon';

  const renderAlert = (
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

  return (
    <Fragment>
      {!offModal && renderAlert}
    </Fragment>
  );
};

Alert.propTypes = {
  close: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Alert.defaultProps = {
  close: false,
  icon: '',
  type: '',
  children: 'No content'
};

export default Alert;
