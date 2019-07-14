import withUtils from "@blaze-react/utils";
import React, { Fragment, ReactElement, useState } from "react";
import ChipAvatar from "./ChipAvatar";
import ChipIcon from "./ChipIcon";
import ChipLabel from "./ChipLabel";

interface IChipsProps {
  children: JSX.Element | JSX.Element[];
  modifiers: string[];
  action?: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const Chips = withUtils(
  ({
    children,
    modifiers,
    action,
    utils: { classNames }
  }: IChipsProps): JSX.Element => {
    const [showChip, setChip] = useState<boolean>(true);

    const handleRemoveChip = (): void => setChip(false);

    const chipClassName: string = classNames("chip", {
      [modifiers
        .map(modifier => `chip--${modifier}`)
        .join(" ")]: !!modifiers.length
    });

    return (
      <Fragment>
        {showChip && (
          <div className="chip__wrapper">
            <div className={chipClassName} onClick={action}>
              {modifiers.includes("deletable")
                ? React.Children.map(children, (child: ReactElement) =>
                    React.cloneElement(child, {
                      handleRemoveChip
                    })
                  )
                : children}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
);

Chips.Avatar = ChipAvatar;
Chips.Label = ChipLabel;
Chips.Icon = ChipIcon;

Chips.defaultProps = {
  modifiers: []
};

export default Chips;
