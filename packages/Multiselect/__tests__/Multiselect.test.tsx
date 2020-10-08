import { render, act, fireEvent } from "@testing-library/react";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Multiselect from "../src";
import { props } from './mocks'

const defaultProps = (override: object = {}) => ({
  ...props,
  ...override
});

describe("Multiselect component", () => {
  it("should be defined and renders correctly (snapshot)", () => {
    const { container } = render(<Multiselect name="test" {...defaultProps()} />);

    expect(container).toMatchSnapshot();
  });

  it("should be defined and renders correctly when is opened (snapshot)", () => {
    const { container, getByTestId } = render(<Multiselect name="test" {...defaultProps()} />);

    act(() => {
      getByTestId('input').focus()
    })

    expect(container).toMatchSnapshot();
  });

  it("should select first option", () => {
    const wrapper = mount(<Multiselect name="test" {...defaultProps()} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find(".form-field--checkbox")
      .at(0)
      .simulate("click");

    expect(
      wrapper
        .find("div")
        .at(0)
        .text()
    ).toContain("Blaze 1");
  });

  it("should allow to filter", () => {
    const wrapper = mount(<Multiselect name="test" {...defaultProps()} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Blaze 2" } });
    expect(
      wrapper
        .find(".form-field--checkbox")
        .at(0)
        .text()
    ).toContain("Blaze 2");
  });

  it("should render without available data", () => {
    const override = {
      data: [],
      error: true,
      onChange: null
    };
    const wrapper = mount(<Multiselect name="test" {...defaultProps(override)} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Not found" } });

    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toContain("No records available");
  });

  it("should rerender on receive props", () => {
    const { rerender } = render(<Multiselect name="test" {...defaultProps()} />);

    const override = {
      data: {
        filterBy: ["name", "id"],
        identification: "id",
        keyValue: "name",
        data: [
          {
            checked: false,
            show: true,
            id: 1,
            name: "Blaze 11",
            description: "Lorem ipsum dolor."
          }
        ]
      }
    };

    rerender(<Multiselect name="test" {...defaultProps(override)} />);
  });

  it("should be removed by clicking on the chip", () => {
    const wrapper = mount(<Multiselect name="test" {...defaultProps()} />);

    expect(
      wrapper
        .find(".multiselect__input__container__chips")
        .at(0)
        .text()
    ).toContain("Blaze 1");

    wrapper
      .find(".chip__wrapper__clear")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".chip__label").length).toBe(0);
  });

  it("should display chip labels based on props", () => {
    const wrapper = mount(<Multiselect name="test" {...defaultProps()} />);
    const firstChipLabel = wrapper.find(".chip__label").at(0).text();
    const secondChipLabel = wrapper.find(".chip__label").at(1).text();

    const [firstChip, secondChip] = defaultProps().data.data
    const [main] = secondChip.name
    const expectedValueSecondChip = `${main[0]}, ${main[1]}`

    expect(firstChipLabel).toBe(firstChip.name);
    expect(secondChipLabel).toBe(expectedValueSecondChip);
  });

  it('should handle delete', () => {
    const mockedGetSelected = jest.fn();
    const { getByTestId, container } = render(<Multiselect name="test" {...defaultProps({ getSelected: mockedGetSelected })} />);
    act(() => {
      getByTestId('input').focus()
    })
    act(() => {
      const [element] = container.querySelectorAll('.chip__icon--delete')
      fireEvent(element, new MouseEvent('click', { bubbles: true, cancelable: false }))

    })
    expect(mockedGetSelected).toHaveBeenCalledWith({
      event: {
        target: {
          name: "test",
          value: [
            2,
          ],
        },
      },
    })
  });

  it("should use onItemsRendered hook", async () => {
    const onItemsRendered = jest.fn();
    const length = 100;
    const data = Array.from({ length }).map((_, index) => ({ id: index, name: `Name ${index}`, show: true }));
    const override = {
      data: {
        data,
        filterBy: ["name"],
        identification: "id",
        keyValue: "name",
      },
      isDynamic: true,
      onItemsRendered
    }

    const { getByTestId, container } = render(<Multiselect name="test" {...override} />);
    const input = getByTestId('input');
    fireEvent.focus(input);
    const [element] = container.querySelectorAll('.multiselect__dropdown')
    fireEvent.scroll(element);
    expect(onItemsRendered).toHaveBeenCalledWith({ startIndex: 0, stopIndex: 20 });
  });
});
