import React, { Fragment, useState } from 'react';

interface IToggleInputTypeProps {
  type: string | undefined;
  toggleType: (newType: string) => void
}

const ToggleInputType = ({
  type,
  toggleType
}: IToggleInputTypeProps): JSX.Element => {

  interface IPasswordState {
    icon: string,
    status: string,
    text: string
  }

  const passwordDefaultClasses: IPasswordState = {
    icon: 'visibility_off',
    status: 'active',
    text: 'Show'
  };

  const [passwordClasses, setPasswordState] = useState(passwordDefaultClasses);

  const handleToggleClasses = (): void => {
    if (type === 'password') {
      setPasswordState({
        icon: 'visibility',
        status: 'hide',
        text: 'Hide'
      });
      toggleType('text');
    } else {
      setPasswordState(passwordDefaultClasses);
      toggleType('password');
    }
  }

  const { status, icon, text } = passwordClasses

  return (
    <Fragment>
      <span
        onClick={handleToggleClasses}
        className={`show-hide-password ${status}`}
        role="button">
        {text}
        <i className="material-icons">{icon}</i>
      </span>
    </Fragment>
  );
}

export default ToggleInputType;