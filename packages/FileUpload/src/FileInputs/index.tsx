import Input from '@blaze-react/input';
import Select from '@blaze-react/select';
import React from 'react';
import { IMAGE, INPUT_TYPES, NAME } from '../constants';
import { getInputLabel, sanitizedFilename } from '../utils';
import { MdOutlineCopyAll } from 'react-icons/md';
import { IFileUploadCustomField, IFileUploadCustomFieldContext } from '../types';

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
  customFields,
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
  customFields?: IFileUploadCustomField[];
}): JSX.Element => {
  const fileName = sanitizedFilename(file);
  const fieldContext: IFileUploadCustomFieldContext = {
    data,
    file,
    index,
    name,
    selectOptions,
    storeKey,
  };

  const buildLabel = (labelKey: string, labelValue?: React.ReactNode, withCopy = true) => (
    <span className="input-label">
      {labelValue || getInputLabel(labelKey, file.type)}
      {withCopy && <MdOutlineCopyAll data-testid={`copy-to-${labelKey}`} role="button" onClick={() => copyToOthers(labelKey, index)} />}{' '}
    </span>
  );

  const renderCustomFields = () => {
    if (!customFields || !customFields.length) {
      return null;
    }

    return customFields.map((customField: IFileUploadCustomField) => {
      const {
        buildProps,
        component: Component,
        copyEnabled = true,
        copyKey,
        id,
        isVisible,
        label,
        name: fieldName,
        props,
      } = customField;
      if (isVisible && !isVisible(fieldContext)) {
        return null;
      }
      const fieldId = id || `${index}-${fieldName}-${fileName}`;
      const builtProps = buildProps ? buildProps(fieldContext) : {};

      return (
        <Component
          key={fieldId}
          id={fieldId}
          label={buildLabel(copyKey || fieldName, label, copyEnabled)}
          name={`${fieldName}-${index}-${fileName}`}
          onChange={handleInputChange}
          value={data?.[fieldName] || ''}
          {...props}
          {...builtProps}
        />
      );
    });
  };

  return (
    <>
      <Input label={buildLabel(TITLE)} onChange={handleInputChange} value={name} id={`${index}-title-${fileName}`} name={NAME} />
      <Input
        label={buildLabel(CAPTION)}
        onChange={handleInputChange}
        value={data.caption}
        id={`${index}-caption-${fileName}`}
        name={`${CAPTION}-${index}-${fileName}`}
      />
      <Input
        label={buildLabel(CREDITS)}
        onChange={handleInputChange}
        value={data.credits}
        id={`${index}-credits-${fileName}`}
        name={`${CREDITS}-${index}-${fileName}`}
      />
      {file.type === IMAGE && (
        <>
          <Input
            label={buildLabel(ALT_TEXT, 'Alternative text')}
            onChange={handleInputChange}
            value={data.altText}
            id={`${index}-altText-${fileName}`}
            name={`${ALT_TEXT}-${index}-${fileName}`}
          />
          <Input
            label={buildLabel(HREF_URL, 'Url')}
            onChange={handleInputChange}
            value={data.hrefUrl}
            id={`${index}-hrefUrl-${fileName}`}
            name={`${HREF_URL}-${index}-${fileName}`}
          />
        </>
      )}
      {renderCustomFields()}
      <Select
        label={buildLabel(STORE_KEY, 'Store type')}
        data-testid="store-type"
        options={selectOptions}
        selected={storeKey}
        showDefaultOption={!storeKey}
        required={!!storeKey}
        onChange={(event: any) => handleSelectChange(event, index)}
      />
    </>
  );
};

export default FileInputs;
