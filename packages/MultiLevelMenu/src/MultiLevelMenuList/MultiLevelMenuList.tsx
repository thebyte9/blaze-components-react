import withUtils from "@blaze-react/utils";
import React, { useEffect, useState } from "react";

interface IMultiLevelMenuListProps {
  children: JSX.Element | JSX.Element[];
  id: number;
  active: number;
  handleClickMenu?: (to: number | undefined) => {};
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const MultiLevelMenuList = ({
  children,
  id,
  active,
  handleClickMenu,
  utils: { classNames }
}: IMultiLevelMenuListProps): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<number>(active);

  useEffect(() => {
    setActiveMenu(active);
  }, [active]);

  const sideMenuModifier: string = classNames({
    "multilevelmenu__sidemenu--hide": activeMenu !== id,
    "multilevelmenu__sidemenu--show": activeMenu === id
  });

  return (
    <div className={`multilevelmenu__sidemenu ${sideMenuModifier}`}>
      <ul>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, { handleClickMenu })
        )}
      </ul>
    </div>
  );
};

export default withUtils(MultiLevelMenuList);
