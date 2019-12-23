import React from "react";
import Nestable from "../src";

const fakeData = [
  {
    type: "row",
    settings: {
      name: "row-1",
      modifier: null,
      width: "full-width",
      backgroundImage: null,
      desktop: true,
      tablet: true,
      mobile: true,
      gtmClassName: null
    },
    id: "5ee5aac0-20e9-11ea-9905-f1f9d0456f2f",
    items: [
      {
        type: "video",
        settings: {
          name: "video-1",
          modifier: null,
          elementTitle: "video",
          url: "https://youtu.be/ZY3J3Y_OU0w",
          autoplay: false,
          gtmClassName: null
        },
        id: "7baed110-20e7-11ea-a1ad-975b528f9c64",
        name: "video-1",
        items: null
      },
      {
        type: "card",
        settings: {
          name: "card-1",
          modifier: "",
          elementTitle: "Card",
          entity: "page",
          limit: 1,
          itemsPerRow: 1,
          sortby: "name",
          sort: "ASC",
          filterByProperty: "",
          filterByFeatured: false,
          style: "portrait",
          propsToDisplay: [],
          hasBanner: false,
          gtmClassName: ""
        },
        id: "244446a0-20c2-11ea-8323-dffe12b3279d",
        name: "card-1",
        items: null
      }
    ],
    name: "row-1"
  }
];

const DemoComponent = () => {
  const handleOrder = (params: any) => {
    console.log("new order", params);
  };
  return (
    <div className="component-wrapper">
      <h1>Dnd</h1>
      <Nestable
        items={fakeData}
        childrenProp="items"
        onChange={handleOrder}
        renderItem={({ item, DragHandler, children }) => (
          <div>
            <p>{item.name}</p>
            <DragHandler />
            {children}
          </div>
        )}
      />
    </div>
  );
};

export default DemoComponent;
