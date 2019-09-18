import withUtils from "@blaze-react/utils";
import React, { Fragment, ReactElement, useState } from "react";
import ChipAvatar from "./ChipAvatar";
import ChipIcon from "./ChipIcon";
import ChipLabel from "./ChipLabel";

type TModifiers = "deletable" | "outlined" | "primary" | "secondary" | "small";
interface IChipsProps {
  children: JSX.Element | JSX.Element[];
  modifiers: TModifiers[];
  action: () => void;
  onDelete: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const Chips = withUtils(
  ({
    children,
    modifiers,
    action,
    onDelete,
    utils: { classNames }
  }: IChipsProps): JSX.Element => {
    const [showChip, setChip] = useState<boolean>(true);

    const deletable: TModifiers = "deletable";

    const isRemovable: boolean = modifiers && modifiers.includes(deletable);

    const formatedModifiers: string = modifiers
      ? modifiers.map(modifier => `chip--${modifier}`).join(" ")
      : "";

    const handleRemoveChip = (): void => {
      onDelete();
      setChip(false);
    };

    const chipClassNames: string = classNames("chip", {
      [formatedModifiers]: !!modifiers
    });

    return (
      <Fragment>
        {showChip && (
          <div className="chip__wrapper">
            <div className={chipClassNames} onClick={action}>
              {isRemovable
                ? React.Children.map(
                    children,
                    (child: ReactElement): ReactElement =>
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

const availableModifiers = {
  icon: {
    custom: "custom",
    delete: "delete"
  },
  parent: {
    deletable: "deletable",
    outlined: "outlined",
    primary: "primary",
    secondary: "secondary",
    small: "small"
  }
};

Chips.Avatar = ChipAvatar;
Chips.Label = ChipLabel;
Chips.Icon = ChipIcon;

Chips.availableModifiers = availableModifiers;

Chips.defaultProps = {
  action: () => void 0,
  onDelete: () => void 0
};

export default Chips;
