import withUtils from "@blaze-react/utils";
import React from "react";

interface IChipIconProps {
  children: JSX.Element | JSX.Element[];
  modifier: string;
  handleRemoveChip: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const ChipIcon = ({
  children,
  modifier,
  handleRemoveChip,
  utils: { classNames }
}: IChipIconProps): JSX.Element => {
  const iconClassName = classNames("chip__icon", {
    [`chip__icon--${modifier}`]: !!modifier
  });

  return (
    <div className={iconClassName} onClick={handleRemoveChip}>
      {children}
    </div>
  );
};

export default withUtils(ChipIcon);
