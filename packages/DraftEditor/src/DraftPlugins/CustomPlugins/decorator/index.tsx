import {
  CharacterMetadata,
  CompositeDecorator,
  ContentBlock,
  ContentState
} from "draft-js";
import { Anchor } from "..";
import { LINK } from "../../../constants";

const linkDecorator = {
  component: Anchor,
  strategy: (
    contentBlock: ContentBlock,
    callback: (start: number, end: number) => void,
    availableContentState: ContentState
  ) => {
    contentBlock.findEntityRanges((character: CharacterMetadata): boolean => {
      const entityKey = character.getEntity();

      if (
        entityKey &&
        availableContentState.getEntity(entityKey).getType() === LINK
      ) {
        return true;
      }

      return false;
    }, callback);
  }
};

const decorator = new CompositeDecorator([linkDecorator]);

export default decorator;
