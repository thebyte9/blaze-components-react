import { buildClassNames } from '@blaze-react/utils';
import React, { useEffect, useRef, useState } from 'react';
import MoreAvatar from './MoreAvatar';
import MoreContent from './MoreContent';
interface IMoreProps {
  isHeader?: boolean;
  isMoreMenu?: boolean;
  displayBg?: boolean;
  children?: any;
  onClose: () => void;
  disabled?: boolean;
}

const More = ({ children, isHeader, isMoreMenu, displayBg, disabled, onClose }: IMoreProps): JSX.Element => {
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggle] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('mousedown', (event): any => {
      return handleOutsideClick(event);
    });

    return function cleanup() {
      document.removeEventListener('mousedown', (event): any => {
        return handleOutsideClick(event);
      });
    };
  }, []);

  const handleToggle = (event: any) => {
    if (disabled) {
      return;
    }

    event.stopPropagation();

    setToggle(!toggled);

    if (toggled) {
      onClose();
    }
  };

  const ulClassName = buildClassNames('dropdown', {
    'dropdown dropdown__list': !isHeader,
    'dropdown__list dropdown__list--header dropdown--header': isHeader,
    'more-menu__list': isMoreMenu,
  });
  const liClassName = buildClassNames({
    'dropdown__list-item': !isHeader,
    'dropdown__list-item dropdown__list-item--header': isHeader,
    'more-menu__list-item': isMoreMenu,
  });

  const handleOutsideClick = (event: any) => {
    if (moreMenuRef.current !== null && !moreMenuRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  return (
    <div className="more-menu__wrapper" ref={moreMenuRef} data-testid="more-menu-wrapper">
      <ul className={ulClassName} data-testid="more-menu-ul">
        <li className={liClassName} data-testid="more-menu-li">
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              handleToggle,
              toggled: toggled?.toString() || 'false',
              // Warning: React does not recognize the `displayBg` prop on a DOM element.
              // If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `displaybg` instead.
              displaybg: displayBg?.toString() || 'false',
              disabled,
            }),
          )}
        </li>
      </ul>
    </div>
  );
};

More.Avatar = MoreAvatar;
More.Content = MoreContent;

export default More;
