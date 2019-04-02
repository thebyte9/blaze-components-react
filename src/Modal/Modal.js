import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Alert = ({
  children,
  simple,
  alert,
  title,
  actions
}) => {
  const [offModal, setModalOff] = useState(false);

  const type = () => {
    if (simple) return '--simple';
    if (alert) return '--alert';
    return '';
  };

  const renderModal = (
    <Fragment>
      <div className="overlay" />
      <div className={`modal modal${type()} modal--show`}>
        <div className={`modal__header modal__header${type()}`}>
          {!alert && <div className="modal__title">{title}</div>}
          {!alert && (
          <div className="modal__close" role="button" onClick={() => setModalOff(true)}>
            <i className="material-icons">close</i>
          </div>
          )}
        </div>
        <div className={`modal__content modal__content${type()}`}>
          {children}
        </div>
        <div className={`modal__footer modal__footer${type()}`}>
          <div className="modal__button">
            {alert && <Button className="button button--link" onClick={() => setModalOff(true)}>Cancel</Button>}
            {actions.map(([text, func]) => (
              <Button key={text} className="button button--link" onClick={func}>{text}</Button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {!offModal && renderModal}
    </Fragment>
  );
};

Alert.propTypes = {
  simple: PropTypes.bool,
  alert: PropTypes.bool,
  title: PropTypes.string,
  actions: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Alert.defaultProps = {
  simple: false,
  alert: false,
  title: '',
  actions: [],
  children: 'No content'
};

export default Alert;
