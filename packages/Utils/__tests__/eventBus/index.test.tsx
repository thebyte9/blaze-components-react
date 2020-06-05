import expect from "expect";
import eventBus from "../../src/eventBus";

describe("eventBus function", () => {
  it("should be defined", () => {
    expect(eventBus).toBeDefined();
  });

  it("should emit custom event with data and receive it", () => {
    const description = "Send events and listen to them in blaze components";

    eventBus.$on("event-description", (data) =>
      expect(data.description).toEqual(description)
    );

    (() => {
      eventBus.$emit("event-description", {
        description,
      });
    })();
  });
});
