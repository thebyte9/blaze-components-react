import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Modal = ({
  children,
  simple,
  alert,
  title,
  actions,
  isActive,
  buttonText,
  buttonModifiers
}) => {
  const [modalStatus, setModalStatus] = useState(isActive);

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
          <div className="modal__close" role="button" onClick={() => setModalStatus(false)}>
            <i className="material-icons">close</i>
          </div>
          )}
        </div>
        <div className={`modal__content modal__content${type()}`}>
          {children}
        </div>
        <div className={`modal__footer modal__footer${type()}`}>
          <div className="modal__button">
            {alert && <Button modifiers="link" onClick={() => setModalStatus(false)}>Cancel</Button>}
            {actions.map(([text, func, modifiers = 'link']) => (
              <Button key={text} modifiers={modifiers} onClick={func}>{text}</Button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {modalStatus && renderModal}
      {
        buttonText
        && (
        <Button
          modifiers={buttonModifiers}
          onClick={() => setModalStatus(!modalStatus)}>
          {buttonText}
        </Button>
        )
      }
    </Fragment>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonModifiers: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
      PropTypes.func
    )
  ),
  simple: PropTypes.bool,
  alert: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Modal.defaultProps = {
  title: '',
  buttonText: '',
  buttonModifiers: 'outline',
  actions: [],
  simple: false,
  alert: false,
  isActive: false,
  children: 'No content'
};

export default Modal;
