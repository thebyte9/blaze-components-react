import Input from '@blaze-react/input';
import Select from '@blaze-react/select';
import React from 'react';
import { IMAGE, INPUT_TYPES, NAME } from '../constants';
import { getInputLabel, sanitizedFilename } from '../utils';
import { MdOutlineCopyAll } from 'react-icons/md';
const { ALT_TEXT, CAPTION, HREF_URL, TITLE, CREDITS, STORE_KEY } = INPUT_TYPES;

const FileInputs = ({
  data,
  file,
  handleInputChange,
  handleSelectChange,
  index,
  name,
  storeKey,
  selectOptions,
  copyToOthers,
}: {
  data: any | null;
  file: any;
  handleInputChange: any;
  handleSelectChange: any;
  index: any;
  name: string;
  storeKey: string;
  selectOptions: any[];
  copyToOthers: (name: string, index: number) => void;
}) => {
  const buildLabel = (labelKey: string, labelValue: string) => {
    return (
      <span className="input-label">
        {labelValue || getInputLabel(labelKey, file.type)}
        <MdOutlineCopyAll data-testid={`copy-to-${labelKey}`} role="button" onClick={() => copyToOthers(labelKey, index)} />{' '}
      </span>
    );
  };

  return (
    <>
      <Input
        label={buildLabel(TITLE)}
        onChange={handleInputChange}
        value={name}
        id={`${index}-title-${sanitizedFilename(file)}`}
        name={NAME}
      />
      <Input
        label={buildLabel(CAPTION)}
        onChange={handleInputChange}
        value={data.caption}
        id={`${index}-caption-${sanitizedFilename(file)}`}
        name={`${CAPTION}-${index}-${sanitizedFilename(file)}`}
      />
      <Input
        label={buildLabel(CREDITS)}
        onChange={handleInputChange}
        value={data.credits}
        id={`${index}-credits-${sanitizedFilename(file)}`}
        name={`${CREDITS}-${index}-${sanitizedFilename(file)}`}
      />
      {file.type === IMAGE && (
        <>
          <Input
            label={buildLabel(ALT_TEXT, 'Alternative text')}
            onChange={handleInputChange}
            value={data.altText}
            id={`${index}-altText-${sanitizedFilename(file)}`}
            name={`${ALT_TEXT}-${index}-${sanitizedFilename(file)}`}
          />
          <Input
            label={buildLabel(HREF_URL, 'Url')}
            onChange={handleInputChange}
            value={data.hrefUrl}
            id={`${index}-hrefUrl-${sanitizedFilename(file)}`}
            name={`${HREF_URL}-${index}-${sanitizedFilename(file)}`}
          />

        </>
      )}
      <Select
        label={buildLabel(STORE_KEY, 'Store type')}
        data-testid="store-type"
        options={selectOptions}
        selected={storeKey}
        onChange={(event: any) => handleSelectChange(event, index)}
      />
    </>
  );
};
export default FileInputs;
