import { InputControllerProps, InputType, LayoutType } from '../types';
import React from 'react';
import { useComponentLogic } from '../hooks/useComponentLogic';
import { Input as Skeleton } from '@blaze-react/skeleton';
import { TextInput } from '../view/Text/Input';

export const Input = ({
  type = InputType.Text,
  layout = LayoutType.Vertical,
  theme,
  overrides = [],
  loading,
  currentState,
  ...rest
}: InputControllerProps): JSX.Element => {
  const { classes, skeleton } = useComponentLogic({
    componentVariant: 'text',
    theme: theme,
    overrides: overrides,
    type: type,
    currentState,
  });

  if (layout === LayoutType.Horizontal) {
    classes[currentState].container += ' flex items-center justify-between';
    classes[currentState].message += ' ml-28';
  }

  if (layout === LayoutType.Vertical) {
    classes[currentState].icon += ' top-10';
    classes[currentState].label += ' min-w-max mr-6';
  }

  return loading ? (
    <Skeleton classes={skeleton[layout]} />
  ) : (
    <TextInput type={type} classes={classes} {...rest} layout={layout} currentState={currentState} />
  );
};
