import React from 'react';
import { toggleHoverOff } from './helpers';

interface BaseComponentProps {
  className: string;
  props: any;
  children: any;
  onClick: any;
}

const BaseComponent = ({ className, props, children }: BaseComponentProps): JSX.Element => {
  const { component, setHover, isModalOpen } = props;

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        toggleHoverOff(isModalOpen, setHover);
      }}
      data-testid={component.name}
    >
      <div key={[component.id, component.name, component.type].join('-')}>{children}</div>
    </div>
  );
};

export default BaseComponent;
