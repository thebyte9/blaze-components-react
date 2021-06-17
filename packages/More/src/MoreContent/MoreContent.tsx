import React, { useEffect, useRef } from 'react';

import { buildClassNames } from '@blaze-react/utils';
import { createPortal } from 'react-dom';

interface IMoreContentProps {
  toggled?: boolean;
  isHeader?: boolean;
  isMoreMenu?: boolean;
  isDropdown?: boolean;
  handleToggle?: any;
  displayBg?: boolean;
}
const MoreContent: React.SFC<IMoreContentProps> = ({
  children,
  toggled,
  isHeader,
  isMoreMenu,
  isDropdown,
  displayBg,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    changeElementPosition();
  }, [toggled]);

  const changeElementPosition = () => {
    if (listMenuRef) {
      const { current } = listMenuRef;
      if (current) {
        const DEFAULT_TOP = 30;
        const elementHeight = current.getBoundingClientRect().height;
        const top = isOutOfBottomViewport(current) ? elementHeight * -1 : DEFAULT_TOP;
        current.style.top = `${top}px`;
      }
    }
  };

  const isOutOfBottomViewport = (element: HTMLUListElement) => {
    const bounding = element.getBoundingClientRect();

    if (!element) {
      return false;
    }

    return bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  };

  const getContainer = () => {
    const id = 'moreBackground';
    let containerElementRef = document.getElementById(id);
    if (!containerElementRef) {
      containerElementRef = document.createElement('div');
      containerElementRef.id = id;
      document.body.appendChild(containerElementRef);
    }
    return containerElementRef;
  };

  const ulClassName = buildClassNames({
    dropdown__submenu: isDropdown,
    'dropdown__submenu dropdown__submenu--header': isHeader,
    'dropdown__submenu--displayed dropdown__list-item--displayed': toggled && isHeader,
    'more-menu more-menu__list': isMoreMenu,
    'more-menu--open': toggled && isMoreMenu,
  });

  const liClassName = buildClassNames({
    'dropdown__list-item dropdown__list-item--submenu': isDropdown,
    'dropdown__list-item--header': isHeader,
    'more-menu__list-item': isMoreMenu,
  });

  const childClassname = buildClassNames({
    'dropdown__list-item-link--header': isHeader,
    'more-menu__link': isMoreMenu,
  });

  return (
    <>
      {toggled &&
        displayBg &&
        createPortal(
          <div className="more-menu__background" ref={wrapperRef} data-testid="more-menu-background" />,
          getContainer(),
        )}
      <ul className={ulClassName} ref={listMenuRef}>
        {React.Children.map(
          children,
          (child: any) =>
            child && (
              <li key={child.symbol} className={liClassName}>
                {React.cloneElement(child, {
                  className: `${child.props.className ? child.props.className : ''} ${childClassname}`,
                })}
              </li>
            ),
        )}
      </ul>
    </>
  );
};

MoreContent.defaultProps = {
  displayBg: false,
  isDropdown: false,
  isHeader: false,
  isMoreMenu: false,
  toggled: false,
};

export default MoreContent;
