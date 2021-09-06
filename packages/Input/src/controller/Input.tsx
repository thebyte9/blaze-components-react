import { InputControllerProps, InputType, LayoutType } from '../types';
import React, { Suspense } from 'react';
import { useComponentLogic } from '../hooks/useComponentLogic';
import { Input as Skeleton } from '@blaze-react/skeleton';

export const Input = ({
  type = InputType.Text,
  layout = LayoutType.Vertical,
  theme,
  overrides = [],
  loading,
  currentState,
  ...rest
}: InputControllerProps): JSX.Element => {
  const Input = React.lazy(() => import(`../view/${InputType[type]}/Input`));

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
    <Suspense
      fallback={
        <svg
          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      }
    >
      <Input type={type} classes={classes} {...rest} layout={layout} currentState={currentState} />
    </Suspense>
  );
};
