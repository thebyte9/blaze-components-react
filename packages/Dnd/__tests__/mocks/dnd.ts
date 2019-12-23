import React from "react";

const dragLayerProps = {
  group: "group",
  dragItem: { id: "fakeId" },
  children: "<div>children</div>",
  dragLayerRef: React.createRef()
};

const fakeItem = {
  type: "row",
  settings: {},
  id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
  items: [
    {
      type: "socialshare",
      settings: {},
      id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
      name: "socialshare-1",
      items: null
    },
    {
      type: "textblock",
      settings: {},
      id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
      name: "textblock-1",
      items: null
    },
    {
      type: "socialfollow",
      settings: {},
      id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "column",
      settings: {},
      id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "image",
          settings: {},
          id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
          name: "image-1",
          items: null
        }
      ],
      name: "column-1"
    }
  ],
  name: "row-1"
};

const getItemByPathInput = {
  path: [0],
  items: [
    {
      type: "row",
      settings: {},
      id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "socialshare",
          settings: {},
          id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
          name: "socialshare-1",
          items: null
        },
        {
          type: "textblock",
          settings: {},
          id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
          name: "textblock-1",
          items: null
        },
        {
          type: "socialfollow",
          settings: {},
          id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
          name: "socialfollow-1",
          items: null
        },
        {
          type: "column",
          settings: {},
          id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
          items: [
            {
              type: "image",
              settings: {},
              id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
              name: "image-1",
              items: null
            }
          ],
          name: "column-1"
        }
      ],
      name: "row-1"
    }
  ],
  childrenProp: "items"
};

const getItemByPathOutput = {
  type: "row",
  settings: {},
  id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
  items: [
    {
      type: "socialshare",
      settings: {},
      id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
      name: "socialshare-1",
      items: null
    },
    {
      type: "textblock",
      settings: {},
      id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
      name: "textblock-1",
      items: null
    },
    {
      type: "socialfollow",
      settings: {},
      id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "column",
      settings: {},
      id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "image",
          settings: {},
          id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
          name: "image-1",
          items: null
        }
      ],
      name: "column-1"
    }
  ],
  name: "row-1"
};

const getPathByIdInput = {
  id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
  items: [
    {
      type: "socialshare",
      settings: {},
      id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
      name: "socialshare-1",
      items: null
    },
    {
      type: "textblock",
      settings: {},
      id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
      name: "textblock-1",
      items: null
    },
    {
      type: "socialfollow",
      settings: {},
      id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "column",
      settings: {},
      id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "image",
          settings: {},
          id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
          name: "image-1",
          items: null
        }
      ],
      name: "column-1"
    }
  ],
  childrenProp: "items"
};

const getPathByIdOutput = [3, 0];

const getRealNextPathInput = {
  prevPath: [0, 3, 0],
  nextPath: [0, 4],
  items: [
    {
      type: "row",
      settings: {},
      id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "socialshare",
          settings: {},
          id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
          name: "socialshare-1",
          items: null
        },
        {
          type: "textblock",
          settings: {},
          id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
          name: "textblock-1",
          items: null
        },
        {
          type: "socialfollow",
          settings: {},
          id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
          name: "socialfollow-1",
          items: null
        },
        {
          type: "column",
          settings: {},
          id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
          items: [
            {
              type: "image",
              settings: {},
              id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
              name: "image-1",
              items: null
            }
          ],
          name: "column-1"
        }
      ],
      name: "row-1"
    }
  ],
  childrenProp: "items"
};

const getRealNextPathInput2 = {
  prevPath: [0, 3],
  nextPath: [0, 4],
  items: [
    {
      type: "row",
      settings: {},
      id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "socialshare",
          settings: {},
          id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
          name: "socialshare-1",
          items: null
        },
        {
          type: "textblock",
          settings: {},
          id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
          name: "textblock-1",
          items: null
        },
        {
          type: "socialfollow",
          settings: {},
          id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
          name: "socialfollow-1",
          items: null
        },
        {
          type: "image",
          settings: {},
          id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
          name: "image-1",
          items: null
        },
        {
          type: "column",
          settings: {},
          id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
          items: [],
          name: "column-1"
        }
      ],
      name: "row-1"
    }
  ],
  childrenProp: "items"
};

const getRealNextPathInput3 = {
  prevPath: [0],
  nextPath: [1, 1],
  items: [
    {
      type: "socialfollow",
      settings: {},
      id: "788ac040-0f79-11ea-8d2a-2bd884659b73",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "row",
      settings: {},
      id: "7a004940-0f79-11ea-8d2a-2bd884659b73",
      items: [
        {
          type: "textblock",
          settings: {},
          id: "78fd3120-0f79-11ea-8d2a-2bd884659b73",
          name: "textblock-1",
          items: null
        },
        {
          type: "column",
          settings: {},
          id: "79cb5690-0f79-11ea-8d2a-2bd884659b73",
          items: [
            {
              type: "socialshare",
              settings: {},
              id: "78c88c90-0f79-11ea-8d2a-2bd884659b73",
              name: "socialshare-1",
              items: null
            },
            {
              type: "image",
              settings: {},
              id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
              name: "image-1",
              items: null
            }
          ],
          name: "column-1"
        }
      ],
      name: "row-1"
    }
  ],
  childrenProp: "items"
};

const getRealNextPathOutput = [0, 4];
const getRealNextPathOutput3 = [0, 2];

const getSplicePathInput = {
  path: [1],
  options: {
    numToRemove: 0,
    itemsToInsert: [
      {
        type: "image",
        settings: {},
        id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
        name: "image-1",
        items: null
      }
    ],
    childrenProp: "items"
  }
};

const getSplicePathOutput = {
  $splice: [
    [
      1,
      0,
      {
        type: "image",
        settings: {},
        id: "7859c530-0f79-11ea-8d2a-2bd884659b73",
        name: "image-1",
        items: null
      }
    ]
  ]
};

const listWithChildrenInput = [
  {
    type: "image",
    settings: {},
    id: "73ed15e0-0f71-11ea-b1bb-1158c538d74f",
    name: "image-1",
    items: null
  },
  {
    type: "socialfollow",
    settings: {},
    id: "7420d010-0f71-11ea-b1bb-1158c538d74f",
    name: "socialfollow-1",
    items: null
  },
  {
    type: "row",
    settings: {},
    id: "751da6a0-0f71-11ea-b1bb-1158c538d74f",
    items: [],
    name: "row-1"
  },
  {
    type: "column",
    settings: {},
    id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
    items: [
      {
        type: "socialshare",
        settings: {},
        id: "74729990-0f71-11ea-b1bb-1158c538d74f",
        name: "socialshare-1",
        items: null
      }
    ],
    name: "column-1"
  }
];

const listWithChildrenOutput = [
  {
    id: "73ed15e0-0f71-11ea-b1bb-1158c538d74f",
    items: null,
    name: "image-1",
    settings: {},
    type: "image"
  },
  {
    id: "7420d010-0f71-11ea-b1bb-1158c538d74f",
    items: null,
    name: "socialfollow-1",
    settings: {},
    type: "socialfollow"
  },
  {
    id: "751da6a0-0f71-11ea-b1bb-1158c538d74f",
    items: [],
    name: "row-1",
    settings: {},
    type: "row"
  },
  {
    id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
    items: [
      {
        id: "74729990-0f71-11ea-b1bb-1158c538d74f",
        items: null,
        name: "socialshare-1",
        settings: {},
        type: "socialshare"
      }
    ],
    name: "column-1",
    settings: {},
    type: "column"
  }
];

const tryDecreaseDepthInput = {
  dragItem: {
    type: "socialshare",
    settings: {},
    id: "74729990-0f71-11ea-b1bb-1158c538d74f",
    name: "socialshare-1",
    items: null
  },
  items: [
    {
      type: "image",
      settings: {},
      id: "73ed15e0-0f71-11ea-b1bb-1158c538d74f",
      name: "image-1",
      items: null
    },
    {
      type: "socialfollow",
      settings: {},
      id: "7420d010-0f71-11ea-b1bb-1158c538d74f",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "row",
      settings: {},
      id: "751da6a0-0f71-11ea-b1bb-1158c538d74f",
      items: [],
      name: "row-1"
    },
    {
      type: "column",
      settings: {},
      id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
      items: [
        {
          type: "socialshare",
          settings: {},
          id: "74729990-0f71-11ea-b1bb-1158c538d74f",
          name: "socialshare-1",
          items: null
        }
      ],
      name: "column-1"
    }
  ],
  childrenProp: "items"
};

const tryDecreaseDepthOutput = {
  dragItem: {
    type: "socialshare",
    settings: {},
    id: "74729990-0f71-11ea-b1bb-1158c538d74f",
    name: "socialshare-1",
    items: null
  },
  pathFrom: [3, 0],
  pathTo: [4]
};

const tryIncreaseDepthInput = {
  dragItem: {
    type: "column",
    settings: {},
    id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
    items: [
      {
        type: "socialshare",
        settings: {},
        id: "74729990-0f71-11ea-b1bb-1158c538d74f",
        name: "socialshare-1",
        items: null
      }
    ],
    name: "column-1"
  },
  items: [
    {
      type: "image",
      settings: {},
      id: "73ed15e0-0f71-11ea-b1bb-1158c538d74f",
      name: "image-1",
      items: null
    },
    {
      type: "socialfollow",
      settings: {},
      id: "7420d010-0f71-11ea-b1bb-1158c538d74f",
      name: "socialfollow-1",
      items: null
    },
    {
      type: "row",
      settings: {},
      id: "751da6a0-0f71-11ea-b1bb-1158c538d74f",
      items: [],
      name: "row-1"
    },
    {
      type: "column",
      settings: {},
      id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
      items: [
        {
          type: "socialshare",
          settings: {},
          id: "74729990-0f71-11ea-b1bb-1158c538d74f",
          name: "socialshare-1",
          items: null
        }
      ],
      name: "column-1"
    }
  ],
  childrenProp: "items"
};

const tryIncreaseDepthOutput = {
  dragItem: {
    type: "column",
    settings: {},
    id: "755b4be0-0f71-11ea-b1bb-1158c538d74f",
    items: [
      {
        type: "socialshare",
        settings: {},
        id: "74729990-0f71-11ea-b1bb-1158c538d74f",
        name: "socialshare-1",
        items: null
      }
    ],
    name: "column-1"
  },
  pathFrom: [3],
  pathTo: [2, 0]
};

export {
  dragLayerProps,
  fakeItem,
  getItemByPathInput,
  getItemByPathOutput,
  getPathByIdInput,
  getPathByIdOutput,
  getRealNextPathInput,
  getRealNextPathOutput,
  getRealNextPathInput2,
  getRealNextPathInput3,
  getRealNextPathOutput3,
  getSplicePathInput,
  getSplicePathOutput,
  listWithChildrenInput,
  listWithChildrenOutput,
  tryDecreaseDepthInput,
  tryDecreaseDepthOutput,
  tryIncreaseDepthInput,
  tryIncreaseDepthOutput
};
