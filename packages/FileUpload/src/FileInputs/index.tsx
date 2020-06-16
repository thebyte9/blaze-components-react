import Input from "@blaze-react/input";
import Select from "@blaze-react/select";
import React from "react";
import { INPUT_TYPES, IMAGE, NAME } from "../constants";
import { getInputLabel, sanitizedFilename } from '../utils'

const { ALT_TEXT, CAPTION, TITLE, HREF_URL } = INPUT_TYPES;

const FileInputs = ({
  data,
  file,
  handleInputChange,
  handleSelectChange,
  index,
  name,
  selectOptions,
}: {
  data: any | null;
  file: any;
  handleInputChange: any;
  handleSelectChange: any;
  index: any;
  name: string;
  selectOptions: any[];
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
            options={selectOptions}
            onChange={(event: any) =>
              handleSelectChange(event, index)
            }
          />
        </>
      )}
    </>
  );

export default FileInputs;
