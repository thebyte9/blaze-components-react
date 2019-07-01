import { makeDecorator } from 'react-decorate';
import uniqueId from './uniqueId';

const utils = (propName = 'utils') => {
  
  return {
    initialState() {
      
      return { 
        uniqueId 
      };

    },

    propTypes(propTypes: object) {
      const nextPropTypes = {...propTypes};
      delete nextPropTypes[propName];
      return nextPropTypes;
    },

    displayName() {
      return propName;
    },

    nextProps(props: object, utils: object) {
      return {
        ...props,
        [propName]: utils,
      };
    },
  };
};

export default makeDecorator(utils);