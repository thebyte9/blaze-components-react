import React from "react";

const CloseIcon = (props: any) => (
  <svg
    {...{
      "aria-hidden": true,
      height: 16,
      width: 14,
      viewBox: `0 0 14 16`,
      fill: "#FFFFFF",
      style: {
        display: "inline-block",
        verticalAlign: "text-top"
      }
    }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    />
  </svg>
);

export default CloseIcon;
