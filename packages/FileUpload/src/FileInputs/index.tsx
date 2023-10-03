import Input from '@blaze-react/input';
import Select from '@blaze-react/select';
import React from 'react';
import { IMAGE, INPUT_TYPES, NAME } from '../constants';
import { getInputLabel, sanitizedFilename } from '../utils';
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
      label={getInputLabel(TITLE, file.type)}
      onChange={handleInputChange}
      value={name}
      id={`${index}-title-${sanitizedFilename(file)}`}
      name={NAME}
    />
    <Input
      label={getInputLabel(CAPTION, file.type)}
      onChange={handleInputChange}
      value={data.caption}
      id={`${index}-caption-${sanitizedFilename(file)}`}
      name={`${CAPTION}-${index}-${sanitizedFilename(file)}`}
    />
    <span role='button' onClick={() => copyToOthers(CAPTION, index)}>Copy</span>
    <Input
      label={getInputLabel(CREDITS, file.type)}
      onChange={handleInputChange}
      value={data.credits}
      id={`${index}-credits-${sanitizedFilename(file)}`}
      name={`${CREDITS}-${index}-${sanitizedFilename(file)}`}
    />
    {file.type === IMAGE && (
      <>
        <Input
          label="Alternative text"
          onChange={handleInputChange}
          value={data.altText}
          id={`${index}-altText-${sanitizedFilename(file)}`}
          name={`${ALT_TEXT}-${index}-${sanitizedFilename(file)}`}
        />
        <Input
          label="Url"
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
    )}
  </>
);
export default FileInputs;