import React, { useId } from 'react';
import { DisplayErrorAs, InputState, TextInputProps } from '../../types';
import { ErrorMessage } from './ErrorMessage';
import { ErrorIcon } from './Icons/ErrorIcon';
import { LoadingIcon } from './Icons/LoadingIcon';
import { SuccessIcon } from './Icons/SuccessIcon';
import { WarningIcon } from './Icons/WarningIcon';
import Tooltip from '@blaze-react/tooltip';

interface ExtendedTextInputProps extends TextInputProps {
  tooltip?: any | string | JSX.Element;
}

export const TextInput = ({
  placeholder,
  label = 'Label',
  currentState,
  errorMessage,
  displayError,
  classes,
  icon,
  id,
  name,
  tooltip = {},
  ...rest
}: ExtendedTextInputProps): JSX.Element => {
  const iconProps = {
    classes: classes,
    currentState: currentState,
  };

  // Same reasoning as the deprecated Input: without a name or id every instance
  // would share `input-${type}`, so labels could not point at their own field.
  const uniqueId = useId();
  const fieldName = `input-${name || id || `${rest.type}-${uniqueId}`}`

  return (
    <>
      <label data-testid="input-label" className={classes[currentState].container} htmlFor={fieldName}>
        <span className={classes[currentState].label}> {label} <Tooltip {...tooltip} /></span>
        {currentState === InputState.Error &&
          displayError === DisplayErrorAs.Icon &&
          (icon ?? <ErrorIcon {...iconProps} />)}
        {currentState === InputState.Loading && (icon ?? <LoadingIcon {...iconProps} />)}
        {currentState === InputState.Warning && (icon ?? <WarningIcon {...iconProps} />)}
        {currentState === InputState.Success && (icon ?? <SuccessIcon {...iconProps} />)}

        <input
          className={classes[currentState].input}
          placeholder={placeholder}
          autoComplete="true"
          loading={currentState === InputState.Loading}
          {...rest}
          id={fieldName}
        />
      </label>
      {currentState === InputState.Error && displayError === DisplayErrorAs.Message && (
        <ErrorMessage classes={classes.error.message} message={errorMessage} />
      )}
    </>
  );
};
