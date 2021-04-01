import React from 'react';
// import EditorViewOverlayToolbar from '../OverlayToolbar';
// import EditorViewTooltip from '../Tooltip';
import { toggleHoverOff } from './helpers';

interface BaseComponentProps {
  className: string;
  props: any;
  children: any;
  onClick: any;
}

const BaseComponent = ({ className, props, children }: BaseComponentProps) => {
  const { component, setHover, hover, isModalOpen } = props;

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        toggleHoverOff(isModalOpen, setHover);
      }}
      data-testid={component.name}>
      {/* <EditorViewTooltip component={component} isHovered={hover} /> */}
      {/* {hover && <EditorViewOverlayToolbar {...props} />} */}
      <div key={[component.id, component.name, component.type].join('-')}>{children}</div>
    </div>
  );
};

export default BaseComponent;
