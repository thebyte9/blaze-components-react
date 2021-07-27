import { ButtonView } from '@blaze-react/button';
import React from 'react';

interface IActions {
  handleLibraryClick?: (...args: any[]) => void;
  handleBrowse?: (...args: any[]) => void;
  handleChange?: (...args: any[]) => void;
  selectFile: any;
  actionText: string;
}

const Actions = ({ handleBrowse, handleLibraryClick, handleChange, selectFile, actionText }: IActions) => (
  <>
    {!handleLibraryClick && <ButtonView onClick={handleBrowse}>Browse</ButtonView>}
    {handleLibraryClick && <ButtonView onClick={handleLibraryClick}>{actionText}</ButtonView>}
    <input type="file" onChange={handleChange} ref={selectFile} style={{ display: 'none' }} />
  </>
);

export default Actions;
