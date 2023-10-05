import Input from '@blaze-react/input';
import Select from '@blaze-react/select';
import React from 'react';
import { IMAGE, INPUT_TYPES, NAME } from '../constants';
import { getInputLabel, sanitizedFilename } from '../utils';
import { MdOutlineCopyAll } from 'react-icons/md';

const { ALT_TEXT, CAPTION, HREF_URL, TITLE, CREDITS } = INPUT_TYPES;
const FileInputs = ({
  data,
  file,
  handleInputChange,
  handleSelectChange,
  index,
  name,
  selectOptions,
  copyToOthers,
}: {
  data: any | null;
  file: any;
  handleInputChange: any;
  handleSelectChange: any;
  index: any;
  name: string;
  selectOptions: any[];
  copyToOthers: (name: string, index: number) => void
}) => (
  <>
    <Input
      label={<span className='input-label'>{getInputLabel(TITLE, file.type)}<MdOutlineCopyAll role='button' onClick={() => copyToOthers(TITLE, index)} /> </span>}
      onChange={handleInputChange}
      value={name}
      id={`${index}-title-${sanitizedFilename(file)}`}
      name={NAME}
    />

    <Input
      label={<span className='input-label' >{getInputLabel(CAPTION, file.type)}<MdOutlineCopyAll role='button' onClick={() => copyToOthers(CAPTION, index)} /> </span>}
      onChange={handleInputChange}
      value={data.caption}
      id={`${index}-caption-${sanitizedFilename(file)}`}
      name={`${CAPTION}-${index}-${sanitizedFilename(file)}`}
    />

    <Input
      label={<span className='input-label'>{getInputLabel(CREDITS, file.type)}<MdOutlineCopyAll role='button' onClick={() => copyToOthers(CREDITS, index)} /> </span>}
      onChange={handleInputChange}
      value={data.credits}
      id={`${index}-credits-${sanitizedFilename(file)}`}
      name={`${CREDITS}-${index}-${sanitizedFilename(file)}`}
    />
    {
      file.type === IMAGE && (
        <>
          <Input
            label={<span className='input-label'>{getInputLabel(ALT_TEXT, file.type)}<MdOutlineCopyAll role='button' onClick={() => copyToOthers(ALT_TEXT, index)} /> </span>}
            onChange={handleInputChange}
            value={data.altText}
            id={`${index}-altText-${sanitizedFilename(file)}`}
            name={`${ALT_TEXT}-${index}-${sanitizedFilename(file)}`}
          />
          <Input
            label={<span className='input-label'>{getInputLabel(HREF_URL, file.type)}<MdOutlineCopyAll role='button' onClick={() => copyToOthers(HREF_URL, index)} /> </span>}
            onChange={handleInputChange}
            value={data.urlRedirect}
            id={`${index}-hrefUrl-${sanitizedFilename(file)}`}
            name={`${HREF_URL}-${index}-${sanitizedFilename(file)}`}
          />
          <Select
            label="Store type"
            data-testid="store-type"
            options={selectOptions}
            onChange={(event: any) => handleSelectChange(event, index)}
          />
        </>
      )
    }
  </>
);
export default FileInputs;