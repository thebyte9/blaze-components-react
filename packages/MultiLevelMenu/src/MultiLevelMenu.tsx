import React, { useRef, useState } from "react";
import MultiLevelMenuList from "./MultiLevelMenuList";
import MultiLevelMenuListItem from "./MultiLevelMenuListItem";

interface IMultiLevelMenuProps {
  selected?: number;
  main: number;
  children: JSX.Element | JSX.Element[];
}

const MultiLevelMenu = ({
  main,
  selected,
  children,
  ...attrs
}: IMultiLevelMenuProps): JSX.Element => {
  const [menuStatus, setMenuStatus] = useState({
    active: main || selected,
    back: [selected]
  });

  const menuRef = useRef(null);

  const handleClickMenu = (to: number | undefined) => {
    if (!to) {
      return;
    }

    setMenuStatus({
      active: to,
      back: [...menuStatus.back, menuStatus.active]
    });
  };

  const handleBack = () => {
    const back = [...menuStatus.back];
    const previouslyActive = back.pop();
    setMenuStatus({ active: previouslyActive, back });
  };

  const { active } = menuStatus;

  return (
    <div className="multilevelmenu" ref={menuRef} {...attrs}>
      {active !== main && (
        <div
          className="multilevelmenu__backlink"
          onClick={handleBack}
          role="button"
          data-cy="multiLevelMenu-back-button"
        >
          <span>{`< Back`}</span>
        </div>
      )}

      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { active, handleClickMenu })
      )}
    </div>
  );
};

MultiLevelMenu.List = MultiLevelMenuList;
MultiLevelMenu.Item = MultiLevelMenuListItem;

export default MultiLevelMenu;
