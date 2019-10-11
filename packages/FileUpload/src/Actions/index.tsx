import Button from "@blaze-react/button";
import ButtonSelect from "@blaze-react/button-select";
import React from "react";

interface IActions {
  handleLibraryClick?: (...args: any[]) => void;
  handleBrowse?: (...args: any[]) => void;
  handleChange?: (...args: any[]) => void;
  selectFile: any;
}

const Actions = ({
  handleBrowse,
  handleLibraryClick,
  handleChange,
  selectFile
}: IActions) => (
  <>
    {!handleLibraryClick && <Button onClick={handleBrowse}>Browse</Button>}
    {handleLibraryClick && (
      <ButtonSelect text="Add files">
        <Button
          modifiers={[
            Button.availableModifiers.plain,
            Button.availableModifiers.fullWidth
          ]}
          onClick={handleLibraryClick}
        >
          From library
        </Button>
        <Button
          modifiers={[
            Button.availableModifiers.plain,
            Button.availableModifiers.fullWidth
          ]}
          onClick={handleBrowse}
        >
          From device
        </Button>
      </ButtonSelect>
    )}
    <input
      type="file"
      onChange={handleChange}
      ref={selectFile}
      style={{ display: "none" }}
    />
  </>
);

export default Actions;
