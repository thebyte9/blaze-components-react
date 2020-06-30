import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import FileInputs from "../../src/FileInputs";

const mockedProps = {
  data: { altText: "", caption: "" },
  file: {
    base64: "test-image",
    id: "test-image-id",
    name: "test-image-name",
    type: "image"
  },
  handleInputChange: jest.fn(),
  handleSelectChange: jest.fn(),
  index: 0,
  name: 'test',
  selectOptions: [
    ["default", "Default"],
    ["test", "Test"]
  ]
}

describe("FileInputs component", () => {
  const component = mount(<FileInputs {...mockedProps} />);

  it("should be defined", () => {
    expect(FileInputs).toBeDefined();
  });

  it("should render without throwing error", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render childs based on type (4 inputs & 1 select if image)", () => {
    const { length: inputsNumber } = component.find('input');
    const { length: selectsNumber } = component.find('select')

    expect(inputsNumber).toBe(4);
    expect(selectsNumber).toBe(1)
  });

  it("should call mocked function handleInputChange & change the input value", () => {
    const mockedValue = 'typing first input'
    component.find('input').at(0).simulate("change", { target: { value: mockedValue } });

    expect(mockedProps.handleInputChange).toBeCalled()
    expect(component.find('input').at(0).props().value).toStrictEqual(mockedValue)
  });

  it("should call mocked function handleSelectChange & change the select value", () => {
    const mockedValue = 'Test'
    component.find('select').simulate("change", { target: { value: mockedValue } });

    expect(mockedProps.handleSelectChange).toBeCalled()
    expect(component.find('select').at(0).props().value).toStrictEqual(mockedValue)
  });

  it("should render childs based on type (2 inputs if doc)", () => {
    const updatedProps = { ...mockedProps }
    updatedProps.file.type = 'doc'

    const docComponent = mount(<FileInputs {...updatedProps} />);
    const { length: inputsNumber } = docComponent.find('input');

    expect(inputsNumber).toBe(2);
  });
});
