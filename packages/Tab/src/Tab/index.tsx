import Button from "../../../Button/src";
import PropTypes from "prop-types";
import React, { useState } from "react";

type selectedType = string | number;

interface ITabProps {
  selected: selectedType;
  children?: any;
}

export const Tab = ({ selected, children }: ITabProps) => {
  const [selectedValue, setSelected] = useState(selected);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {children.map(
          ({ props: { title = "Unnamed tab" } }: any, step: any) => (
            <Button
              className={`tabs__list-item ${
                step === selectedValue ? "current" : ""
              }`}
              onClick={() => setSelected(step)}
              key={title}
            >
              {title}
            </Button>
          )
        )}
      </div>
      {children[selectedValue]}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  selected: PropTypes.number
};

Tab.defaultProps = {
  children: "No content",
  selected: 0
};
