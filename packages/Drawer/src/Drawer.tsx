import { ButtonView } from '@blaze-react/button';
import { buildClassNames } from '@blaze-react/utils';
import React, { useState } from 'react';

import DrawerMainContent from './DrawerMainContent';
import DrawerPageContent from './DrawerPageContent';

type TModifier = 'right' | 'left';
interface IDrawerProps {
  children: [JSX.Element, JSX.Element];
  modifier: TModifier;
  isResponsive?: boolean;
  isPermanent: boolean;
  title?: string;
}
const Drawer = ({ children, modifier, isResponsive, isPermanent, title }: IDrawerProps): JSX.Element => {
  const [menuStatus, setMenuStatus] = useState<boolean>(isPermanent);

  const [DrawerMainContentComponent, DrawerPageContentComponent]: [JSX.Element, JSX.Element] = children;

  const drawerWrapperClassNames: string = buildClassNames('drawer__wrapper', {
    [`drawer__wrapper--drawer-${modifier}`]: !!modifier,
  });

  const drawerTypeClassNames: string = buildClassNames('drawer', {
    'drawer--responsive': !!isResponsive,
    open: menuStatus,
    [`drawer--${modifier}`]: !!modifier,
  });

  const drawerHeaderClassNames: string = buildClassNames('drawer__header', {
    'drawer__header--responsive': !!isResponsive,
    [`drawer__header--${modifier}`]: !!modifier,
  });

  const drawerPageHeaderClassNames: string = buildClassNames('page__header page__header--drawer', {
    'page__header--responsive': !!isResponsive,
    [`page__header--opens-${modifier}`]: !!modifier,
  });

  const handleToggleMenuStatus = (): void => setMenuStatus(!menuStatus);

  return (
    <div className={drawerWrapperClassNames}>
      <div className={drawerTypeClassNames} data-testid="drawer-wrapper">
        <div className="drawer__content-wrapper">
          <div className={drawerHeaderClassNames}>
            {!isPermanent && (
              <ButtonView className="icon-button" onClick={handleToggleMenuStatus} data-testid="icon-button-arrow">
                <i className="material-icons">{`keyboard_arrow_${modifier}`}</i>
              </ButtonView>
            )}
          </div>
          <div className="drawer__content">{DrawerMainContentComponent}</div>
        </div>
      </div>
      <div className="page page--drawer">
        <div className={drawerPageHeaderClassNames}>
          {!isPermanent && (
            <ButtonView className="icon-button" onClick={handleToggleMenuStatus} data-testid="icon-button-menu">
              <i className="material-icons">menu</i>
            </ButtonView>
          )}
          {title}
        </div>
        <div className="page__content page__content--drawer">{DrawerPageContentComponent}</div>
      </div>
    </div>
  );
};

Drawer.DrawerMainContent = DrawerMainContent;
Drawer.DrawerPageContent = DrawerPageContent;

Drawer.defaultProps = {
  isPermanent: false,
  isResponsive: false,
  title: '',
};

export default Drawer;
