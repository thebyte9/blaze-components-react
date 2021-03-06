import React from "react";

const CheckIcon = (props: any) => (
  <svg
    {...{
      "aria-hidden": true,
      height: 16,
      width: 12,
      viewBox: `0 0 12 16`,
      fill: "#FFFFFF",
      style: {
        display: "inline-block",
        verticalAlign: "text-top"
      }
    }}
    {...props}
  >
    <path fillRule="evenodd" d="M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z" />
  </svg>
);

export default CheckIcon;
