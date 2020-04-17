import React from "react";

const parsedLabel = ({
  defaultId,
  label
}: {
  defaultId: any;
  label?: string | [string, string];
}) => {
  if (Array.isArray(label)) {
    const [labelText, labelLongerText] = label;
    return (
      <label htmlFor={defaultId}>
        <span>{labelText}</span>
        <span>{labelLongerText}</span>
      </label>
    );
  }
  return (
    <label htmlFor={defaultId}>
      <span>{label}</span>
    </label>
  );
};

export default parsedLabel;