import { ContentBlock, ContentState } from "draft-js";

const matchesEntityType = (type: string) => type === 'LINK';

const linkStrategy = (contentBlock: ContentBlock, cb: any, contentState: ContentState) => {
  if (!contentState) return;
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && matchesEntityType(contentState.getEntity(entityKey).getType());
  }, cb);
};

export default linkStrategy;
