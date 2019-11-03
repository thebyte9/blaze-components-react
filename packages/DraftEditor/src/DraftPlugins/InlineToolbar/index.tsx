import React from "react";

const Pickers = (components: any[]) => {
  return (props: any) => {
    const onWindowClick = () => props.onOverrideContent(undefined);

    return (
      <div onClick={onWindowClick}>
        {components.map((Button, i) => (
          <Button key={i} {...props} />
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
        <button onClick={onClick} className="headlineButton">
          {icon}
        </button>
      </div>
    );
  };
};

export default NewPicker;
