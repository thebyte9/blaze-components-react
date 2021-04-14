const toggleHoverOff = (isModalOpen: boolean, setHover: (value: boolean) => void) => {
  if (!isModalOpen) {
    setHover(false);
  }
};

export default toggleHoverOff;
