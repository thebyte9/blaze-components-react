import React from 'react';
import { DisplayErrorAs, InputState, TextInputProps } from '../../types';
import { ErrorMessage } from './ErrorMessage';
import { ErrorIcon } from './Icons/ErrorIcon';
import { LoadingIcon } from './Icons/LoadingIcon';
import { SuccessIcon } from './Icons/SuccessIcon';
import { WarningIcon } from './Icons/WarningIcon';

export const TextInput = ({
  placeholder,
  label = 'Label',
  currentState,
  errorMessage,
  displayError,
  classes,
  icon,
  ...rest
}: TextInputProps): JSX.Element => {
  const iconProps = {
    classes: classes,
    currentState: currentState,
  };

  return (
    <>
      <label className={classes[currentState].container}>
        <span className={classes[currentState].label}>{label}</span>
        {currentState === InputState.Error &&
          displayError === DisplayErrorAs.Icon &&
          (icon ?? <ErrorIcon {...iconProps} />)}
        {currentState === InputState.Loading && (icon ?? <LoadingIcon {...iconProps} />)}
        {currentState === InputState.Warning && (icon ?? <WarningIcon {...iconProps} />)}
        {currentState === InputState.Success && (icon ?? <SuccessIcon {...iconProps} />)}

        <input
          type="text"
          className={classes[currentState].input}
          placeholder={placeholder}
          autoComplete="true"
          error={currentState === InputState.Error}
          loading={currentState === InputState.Loading}
          warning={currentState === InputState.Warning}
          success={currentState === InputState.Success}
          {...rest}
        />
      </label>
      {currentState === InputState.Error && displayError === DisplayErrorAs.Message && (
        <ErrorMessage classes={classes.error.message} message={errorMessage} />
      )}
    </>
  );
};
