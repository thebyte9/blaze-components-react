const DATA_ATTRIBUTS = {
  altText: "",
  caption: "",
  hrefUrl: ""
};

const INPUT_TYPES = {
  ALT_TEXT: "altText",
  CAPTION: "caption",
  TITLE: 'title',
  CREDITS: 'credits',
  HREF_URL: 'hrefUrl',
  STORE_KEY: 'storeKey',
};

const IMAGE = "image";

const DOC = "doc";

const NAME = "name";

const VIDEO = 'video'

export const STORE_TYPES = {
  MAPS: 'maps',
  DEFAULT: 'default'
} as const;

export const STORE_TYPE_CONFIG = {
  [STORE_TYPES.MAPS]: {
    allowedExtensions: ['.geojson'],
    acceptAttribute: '.geojson'
  },
  [STORE_TYPES.DEFAULT]: {
    allowedExtensions: [],
    acceptAttribute: ''
  }
} as const;

export { DATA_ATTRIBUTS, DOC, IMAGE, INPUT_TYPES, NAME, VIDEO };
