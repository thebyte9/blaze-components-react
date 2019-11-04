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
        {components.map(([componentName, DraftButton]) => (
          <DraftButton key={componentName} {...props} />
        ))}
      </div>
    );
  };
};

const NewPicker = (components: object, icon: JSX.Element) => {
  return (props: any) => {
    const onMouseDown = (event: React.MouseEvent<HTMLInputElement>) =>
      event.preventDefault();

    const formatedComponents = Object.keys(components).map(key => [
      key,
      components[key]
    ]);

    const onClick = () => props.onOverrideContent(Pickers(formatedComponents));

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
