import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import React, { useEffect, useState } from "react";

const AddImageAttributes = ({
  imageAttributesData,
  saveImageAttributes,
  closeImageAttributesModal
}: any): JSX.Element => {
  const [imageAttributes, setImageAttributes] = useState<any>(
    imageAttributesData
  );

  const [newImageAttributes, setNewImageAttributes] = useState<any>(
    imageAttributesData.images.find(
      ({ url }: { url: string }) => url === imageAttributes.focusedImageURL
    ) || {}
  );

  useEffect(() => {
    setNewImageAttributes(
      imageAttributesData.images.find(
        ({ url }: { url: string }) =>
          url === imageAttributesData.focusedImageURL
      ) || {}
    );
    setImageAttributes(imageAttributesData);
  }, [imageAttributesData]);

  const saveAttributes = (): void => {
    const removeDuplicatesImages = imageAttributes.images.filter(
      ({ url }: { url: string }) => url !== imageAttributes.focusedImageURL
    );

    saveImageAttributes({
      ...imageAttributes,
      images: [...removeDuplicatesImages, newImageAttributes]
    });

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
    setNewImageAttributes({
      ...newImageAttributes,
      url: imageAttributes.focusedImageURL,
      [name]: value
    });
  };

  const imageOptions = [
    {
      name: "modifier",
      type: "string",
      label: "Modifier"
    },
    {
      name: "altText",
      type: "string",
      label: "Alt text"
    },
    {
      name: "caption",
      type: "string",
      label: "Caption"
    },
    {
      name: "marginTop",
      type: "number",
      label: "Margin top (px)"
    },
    {
      name: "marginLeft",
      type: "number",
      label: "Margin left (px)"
    },
    {
      name: "marginRight",
      type: "number",
      label: "Margin right (px)"
    },
    {
      name: "marginBottom",
      type: "number",
      label: "Margin bottom (px)"
    }
  ];

  return (
    <>
      <Modal actions={alertActions} onClose={closeImageAttributesModal} isAlert>
        {imageOptions.map((option: any) => (
          <Input
            label={option.label}
            onChange={(event: any) => handleChange(event, option.name)}
            modifier="full-width"
            value={newImageAttributes[option.name]}
            key={option.name}
            type={option.type}
          />
        ))}
      </Modal>
    </>
  );
};

AddImageAttributes.defaultProps = {
  error: false,
  name: "editor"
};

export default AddImageAttributes;
