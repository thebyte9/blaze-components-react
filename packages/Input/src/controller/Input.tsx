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
    classes[currentState].container = 'flex-row items-center justify-between relative';
    classes[currentState].message += ' ml-32';
    classes[currentState].icon += ' top-0';
  }

  if (layout === LayoutType.Vertical) {
    classes[currentState].icon += ' top-8 mt-1';
    classes[currentState].label += ' min-w-max mr-6';
  }

  return loading ? (
    <Skeleton classes={skeleton[layout]} />
  ) : (
    <TextInput type={type} classes={classes} {...rest} layout={layout} currentState={currentState} />
  );
};
