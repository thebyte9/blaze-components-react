import withUtils from "@blaze-react/utils";
import React from "react";

type TModifiers = "custom" | "delete";
interface IChipIconProps {
  children: JSX.Element | JSX.Element[];
  modifier: TModifiers;
  handleRemoveChip: () => void;
  utils: {
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
  };
  'data-cy'?: string;
}
const ChipIcon = ({
  children,
  modifier,
  handleRemoveChip,
  utils: { buildClassNames },
  'data-cy': dataCy
}: IChipIconProps): JSX.Element => {
  const iconClassName = buildClassNames("chip__icon", {
    [`chip__icon--${modifier}`]: !!modifier
  });

  return (
    <div className={iconClassName} onClick={handleRemoveChip} data-cy={dataCy}>
      {children}
    </div>
  );
};

export default withUtils(ChipIcon);
