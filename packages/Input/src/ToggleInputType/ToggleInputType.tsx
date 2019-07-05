import React, { useState } from 'react';

interface IToggleInputTypeProps {
  type: string | undefined;
  toggleType: (newType: string) => void
}
interface IPasswordState {
  icon: string,
  status: string,
  text: string
}

const ToggleInputType = ({
  type,
  toggleType
}: IToggleInputTypeProps): JSX.Element => {

  const passwordDefaultClasses: IPasswordState = {
    icon: 'visibility_off',
    status: 'active',
    text: 'Show'
  };

  const passwordActiveClasses: IPasswordState = {
    icon: 'visibility_off',
    status: 'active',
    text: 'Show'
  };

  const [passwordClasses, setPasswordState] = useState<IPasswordState>(passwordDefaultClasses);

  const isPassword = type === 'password';

  const handleToggleClasses = (): void => {
    if (isPassword) {
      setPasswordState(passwordActiveClasses);
      toggleType('text');
    } else {
      setPasswordState(passwordDefaultClasses);
      toggleType('password');
    }
  }

  const { status, icon, text }: IPasswordState = passwordClasses

  return (
    <span
      onClick={handleToggleClasses}
      className={`show-hide-password ${status}`}
      role="button">
      {text}
      <i className="material-icons">{icon}</i>
    </span>
  );
}

export default ToggleInputType;