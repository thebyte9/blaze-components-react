import withUtils from "@blaze-react/utils";
import React from "react";

type TModifiers = "custom" | "delete";
interface IChipIconProps {
  children: JSX.Element | JSX.Element[];
  modifier: TModifiers;
  handleRemoveChip: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  'data-cy'?: string;
}
const ChipIcon = ({
  children,
  modifier,
  handleRemoveChip,
  utils: { classNames },
  'data-cy': dataCy
}: IChipIconProps): JSX.Element => {
  const iconClassName = classNames("chip__icon", {
    [`chip__icon--${modifier}`]: !!modifier
  });

  return (
    <div className={iconClassName} onClick={handleRemoveChip} data-cy={dataCy}>
      {children}
    </div>
  );
};

export default withUtils(ChipIcon);
