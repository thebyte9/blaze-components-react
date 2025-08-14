import React from "react";

const parsedLabel = ({
  defaultId,
  label,
  onClick,
}: {
  defaultId: any;
  label?: string | [string, string];
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
  };

  if (Array.isArray(label)) {
    const [labelText, labelLongerText] = label;
    return (
      <label htmlFor={defaultId} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <span>{labelText}</span>
        <span>{labelLongerText}</span>
      </label>
    );
  }
  return (
    <label htmlFor={defaultId} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <span>{label}</span>
    </label>
  );
};

export default parsedLabel;
