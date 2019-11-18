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

  return (
    <>
      <Modal actions={alertActions} onClose={closeImageAttributesModal} isAlert>
        <Input
          label="Modifier"
          onChange={(event: any) => handleChange(event, "modifier")}
          modifier="full-width"
          value={newImageAttributes.modifier}
        />
        <Input
          label="Alt Text"
          onChange={(event: any) => handleChange(event, "altText")}
          modifier="full-width"
          value={newImageAttributes.altText}
        />
        <Input
          label="Caption"
          onChange={(event: any) => handleChange(event, "caption")}
          modifier="full-width"
          value={newImageAttributes.caption}
        />
        <Input
          label="link"
          onChange={(event: any) => handleChange(event, "link")}
          modifier="full-width"
          value={newImageAttributes.link}
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
