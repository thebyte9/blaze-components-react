import withUtils from "@blaze-react/utils";
import React from "react";
import ChipAvatar from "./ChipAvatar";
import ChipIcon from "./ChipIcon";
import ChipLabel from "./ChipLabel";

interface IChipsProps {
  children: JSX.Element | JSX.Element[];
  modifiers: string[];
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const Chips = withUtils(
  ({
    children,
    modifiers,
    utils: { classNames }
  }: IChipsProps): JSX.Element => {
    const chipClassName = classNames("chip", {
      [modifiers
        .map(modifier => `chip--${modifier}`)
        .join(" ")]: !!modifiers.length
    });

    return (
      <div className="chip__wrapper">
        <div className={chipClassName}>{children}</div>
      </div>
    );
  }
);

Chips.Avatar = ChipAvatar;
Chips.Label = ChipLabel;
Chips.Icon = ChipIcon;

export default Chips;
