import { fireEvent, render } from "@testing-library/react";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Autocomplete from "../src";

const data = {
  data: [
    {
      id: 1,
      name: "Laravel",
      description: "PHP framework"
    },
    {
      id: 2,
      name: "React",
      description: "Javascript library"
    },
    {
      id: 3,
      name: "Adonis",
      description: "Javascript framework"
    }
  ],
  filterBy: ["name", "description"],
  keyValue: "name"
};

describe("Autocomplete component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<Autocomplete data={data} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  // test.only("should allow to filter", async () => {
  //   const { getByText, getByTestId, getByPlaceholderText } = render(
  //     <Autocomplete data={data} />
  //   );

  //   const input = getByPlaceholderText("Search");

  //   fireEvent.change(input, {
  //     target: {
  //       value: "php"
  //     }
  //   });

  //   const button = getByTestId("option-1");
  //   console.log("after button -->", button);
  //   fireEvent.click(button);

  //   getByText("Laravel");
  // });
});
