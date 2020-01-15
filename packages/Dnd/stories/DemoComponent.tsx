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

    items: [
      {
        type: "video",
        settings: {
          name: "video 1",
          modifier: null,
          elementTitle: "video",
          url: "https://youtu.be/ZY3J3Y_OU0w",
          autoplay: false,
          gtmClassName: null
        },
        id: "video 1",
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
    name: "row 1"
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
          <div
            style={{
              padding: "20px",
              border: "1px solid #F0F0F0",
              backgroundColor: "#FFFFFF",
              display: "flex"
            }}
          >
            <DragHandler />
            <p>{item.name}</p>
            {children}
          </div>
        )}
      />
    </div>
  );
};

export default DemoComponent;
