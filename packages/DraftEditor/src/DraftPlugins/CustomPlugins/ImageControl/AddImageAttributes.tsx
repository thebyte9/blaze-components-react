import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import React, { useState, useEffect } from "react";

const AddImageAttributes = ({
  imageAttributesData,
  saveImageAttributes,
  closeImageAttributesModal
}: any): JSX.Element => {
  const [imageAttributes, setImageAttributes] = useState<any>(
    imageAttributesData
  );

  useEffect(() => {
    setImageAttributes(imageAttributesData);
  }, [imageAttributesData]);

  const saveAttributes = (): void => {
    saveImageAttributes(imageAttributes);
    closeImageAttributesModal();
  };

  const alertActions = [
    {
      callback: saveAttributes,
      modifiers: ["small"],
      textButton: "Save"
    }
  ];

  const handleChange = (
    {
      value
    }: {
      value: string;
    },
    name: string
  ): void => {
    setImageAttributes({
      ...imageAttributes,
      [name]: value
    });
  };

  return (
    <>
      <Modal actions={alertActions} onClose={closeImageAttributesModal} isAlert>
        <Input
          placeholder="Modifier"
          onChange={(event: any) => handleChange(event, "modifier")}
          modifier="full-width"
          value={imageAttributes.modifier}
        />
        <Input
          placeholder="Alt Text"
          onChange={(event: any) => handleChange(event, "altText")}
          modifier="full-width"
          value={imageAttributes.altText}
        />
        <Input
          placeholder="Caption"
          onChange={(event: any) => handleChange(event, "caption")}
          modifier="full-width"
          value={imageAttributes.caption}
        />
      </Modal>
    </>
  );
};

AddImageAttributes.defaultProps = {
  error: false,
  name: "editor"
};

export default AddImageAttributes;
