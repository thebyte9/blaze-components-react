import { makeDecorator } from 'react-decorate';

const generateKey = (element: any) => {
  const key = unescape(encodeURIComponent(JSON.stringify(element)));

  try { 
      return btoa(key);
  } catch {
      return Buffer.from(key).toString('base64');
  }
}

const utils = (propName = 'utils') => {
  
  return {
    initialState() {
      
      const  uniqueId = (element: any) =>  {
        const keys = {};
        const key = `uid-${generateKey(element)}`;
        keys[key] = key;
        return key;
      };

      const printLog = (text: string) => text;

      return { uniqueId, printLog };

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