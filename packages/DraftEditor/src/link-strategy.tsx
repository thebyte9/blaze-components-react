// @ts-nocheck

const matchesEntityType = (type) => type === "LINK";

const linkStrategy = (contentBlock, cb, contentState, onClick) => {
  if (!contentState) {
    return;
  }
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      matchesEntityType(contentState.getEntity(entityKey).getType())
    );
  }, cb);
};

export default linkStrategy;
