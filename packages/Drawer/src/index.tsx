import Button from "@blaze-react/button";
import withUtils from "@blaze-react/utils";
import React, { useState } from "react";

import DrawerMainContent from "./DrawerMainContent";
import DrawerPageContent from "./DrawerPageContent";

interface IDrawerProps {
  children: [JSX.Element, JSX.Element];
  modifier?: string;
  responsive?: boolean;
  permanent: boolean;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const Drawer = ({
  children,
  modifier,
  responsive,
  permanent,
  utils: { classNames }
}: IDrawerProps): JSX.Element => {
  const [menuStatus, setMenuStatus] = useState<boolean>(permanent);

  const [DrawerMainContentComponent, DrawerPageContentComponent]: [
    JSX.Element,
    JSX.Element
  ] = children;

  const drawerWrapperClassNames: string = classNames("drawer__wrapper", {
    [`drawer__wrapper--drawer-${modifier}`]: !!modifier
  });

  const drawerTypeClassNames: string = classNames("drawer", {
    "drawer--responsive": !!responsive,
    open: menuStatus,
    [`drawer--${modifier}`]: !!modifier
  });

  const drawerHeaderClassNames: string = classNames("drawer__header", {
    "drawer__header--responsive": !!responsive,
    [`drawer__header--${modifier}`]: !!modifier
  });

  const drawerPageHeaderClassNames: string = classNames(
    "page__header page__header--drawer",
    {
      "page__header--responsive": !!responsive,
      [`page__header--opens-${modifier}`]: !!modifier
    }
  );

  return (
    <div className={drawerWrapperClassNames}>
      <div className={drawerTypeClassNames}>
        <div className="drawer__content-wrapper">
          <div className={drawerHeaderClassNames}>
            {!permanent && (
              <Button
                className="icon-button"
                onClick={(): void => setMenuStatus(!menuStatus)}
              >
                <i className="material-icons">keyboard_arrow_left</i>
              </Button>
            )}
          </div>
          <div className="drawer__content">{DrawerMainContentComponent}</div>
        </div>
      </div>
      <div className="page page--drawer">
        <div className={drawerPageHeaderClassNames}>
          {!permanent && (
            <Button
              className="icon-button"
              onClick={(): void => setMenuStatus(!menuStatus)}
            >
              <i className="material-icons">menu</i>
            </Button>
          )}
          Drawer responsive
        </div>
        <div className="page__content page__content--drawer">
          {DrawerPageContentComponent}
        </div>
      </div>
    </div>
  );
};

Drawer.DrawerMainContent = DrawerMainContent;
Drawer.DrawerPageContent = DrawerPageContent;

Drawer.defaultProps = {
  modifier: "",
  permanent: false,
  responsive: false
};

export default withUtils(Drawer);
