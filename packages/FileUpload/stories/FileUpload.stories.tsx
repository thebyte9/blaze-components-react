import '@blaze-react/blaze-components-theme';

import React from 'react';
import { storiesOf } from '@storybook/react';
import FileUpload from '../src/FileUpload';
import FileUploadReadme from '../README.md';

import Input from '@blaze-react/input';
import Select from '@blaze-react/select';
import { MdOutlineCopyAll } from 'react-icons/md';

import { getInputLabel } from '../src/utils';
import { IMAGE, INPUT_TYPES } from '../src/constants';

const { ALT_TEXT, CAPTION, TITLE, STORE_KEY } = INPUT_TYPES;

const CustomFileInputs = ({
  data,
  file,
  index,
  name,
  storeKey,
  selectOptions,
  handleInputChange,
  handleSelectChange,
  copyToOthers,
}: {
  data: Record<string, any>;
  file: { id: string; name: string; type: string; base64?: string };
  index: number;
  name: string;
  storeKey?: string;
  selectOptions: any[];
  handleInputChange: (args: { event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> }) => void;
  handleSelectChange: (args: { event: React.ChangeEvent<HTMLSelectElement> }, idx: number) => void;
  copyToOthers: (field: string, idx: number) => void;
}) => {
  const buildLabel = (labelKey: string, labelValue?: string) => (
    <span className="input-label">
      {labelValue || getInputLabel(labelKey, file.type)}
      <MdOutlineCopyAll
        style={{ marginLeft: 6, cursor: 'pointer' }}
        title="Copy this value to all"
        onClick={() => copyToOthers(labelKey, index)}
      />
    </span>
  );

  return (
    <div className="custom-file-inputs">
      <div className="form-group">
        <Input
          id={`${index}-name`}
          name="name"
          value={name || ''}
          onChange={(event: any) => handleInputChange({ event })}
          placeholder="Enter title"
          label={buildLabel(TITLE)}
        />
      </div>

      <div className="form-group">
        <Select
          id={`${index}-storeKey`}
          name="storeKey"
          options={selectOptions}
          selected={storeKey}
          showDefaultOption={!storeKey}
          required={!!storeKey}
          onChange={(event: any) => handleSelectChange({ event }, index)}
          label={buildLabel(STORE_KEY, 'Store')}
        />
      </div>

      {file?.type === IMAGE && (
        <div className="form-group">
          <Input
            id={`${index}-alt`}
            name="alt-text"
            value={data?.['alt-text'] || ''}
            onChange={(event: any) => handleInputChange({ event })}
            placeholder="Alternative text"
            label={buildLabel(ALT_TEXT, 'Alt')}
          />
        </div>
      )}

      {/* Caption */}
      <div className="form-group">
        <Input
          id={`${index}-caption`}
          name="caption"
          value={data?.caption || ''}
          onChange={(event: any) => handleInputChange({ event })}
          placeholder="Short caption"
          label={buildLabel(CAPTION, 'Caption')}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${index}-relationId`}>Related entity</label>
        <Input
          id={`${index}-relationId`}
          name="relationId"
          value={data?.relationId || ''}
          onChange={(event: any) => handleInputChange({ event })}
          placeholder="Relation ID (post/category id)"
        />
      </div>
    </div>
  );
};

storiesOf('FileUpload', module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme,
    },
  })
  .add('Introduction', (): any => {
    const FileUploadModal = () => {
      const onChange = (...args: any[]) => {
        console.log('onChange:', args);
      };
      return (
        <FileUpload
          onChange={onChange}
          selectOptions={[
            ['default', 'Default'],
            ['maps', 'Maps store'],
          ]}
        />
      );
    };

    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop'
          it there using a mouse or similar device.
        </p>
        <FileUploadModal />
      </div>
    );
  })
  .add('With custom FileInputs', (): any => {
    const FileUploadModal = () => {
      const onChange = (...args: any[]) => {
        console.log('onChange (custom):', args);
      };
      return (
        <FileUpload
          onChange={onChange}
          selectOptions={[
            ['default', 'Default'],
            ['maps', 'Maps store'],
            ['assets', 'Assets'],
          ]}
          FileInputsComponent={CustomFileInputs}
        />
      );
    };

    return (
      <div className="component-wrapper">
        <h1>FileUpload — Custom FileInputs</h1>
        <p>
          This story demonstrates a <code>FileInputsComponent</code> where labels include a copy-to-all icon instead of
          a separate button, for a cleaner inline UI.
        </p>
        <FileUploadModal />
      </div>
    );
  });
