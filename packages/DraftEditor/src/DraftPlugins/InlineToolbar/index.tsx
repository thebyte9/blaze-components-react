import Button from "@blaze-react/button";
import React, { useEffect } from "react";

const Pickers = (components: any[]) => {
  return (props: any) => {
    useEffect(() => {
      window.addEventListener("click", onWindowClick);
      return () => window.removeEventListener("click", onWindowClick);
    }, []);

    const onWindowClick = () => props.onOverrideContent(undefined);

    return (
      <div onClick={onWindowClick}>
        {components.map((DraftButton, i) => (
          <DraftButton key={i} {...props} />
        ))}
      </div>
    );
  };
};

const NewPicker = (components: any[], icon: JSX.Element) => {
  return (props: any) => {
    const onMouseDown = (event: React.MouseEvent<HTMLInputElement>) =>
      event.preventDefault();

    const onClick = () => props.onOverrideContent(Pickers(components));

    return (
      <div onMouseDown={onMouseDown} className="headlineButtonWrapper">
        <Button onClick={onClick} className="headlineButton">
          {icon}
        </Button>
      </div>
    );
  };
};

export default NewPicker;
