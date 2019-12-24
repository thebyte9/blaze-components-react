import expect from "expect";
import Timer from "../../src/Timer";

describe("Timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("should be defined", () => {
    expect(Timer).toBeDefined();
  });

  it("should return a new object instance", () => {
    const mockedCallbackImplementation = jest.fn();
    const mockedDelayImplementation = 1000;
    const timer = new Timer(
      mockedCallbackImplementation,
      mockedDelayImplementation
    );
    expect(typeof timer).toBe("object");
  });

  it("should call resume after delay has been passed", () => {
    const mockedCallbackImplementation = jest.fn();
    const mockedDelayImplementation = 1000;
    const timer = new Timer(
      mockedCallbackImplementation,
      mockedDelayImplementation
    );

    timer.resume();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      mockedDelayImplementation
    );
  });

  it("should call pause and resume after delay and plus time has been passed", () => {
    const mockedCallbackImplementation = jest.fn();
    const mockedDelayImplementation = 1000;
    const timer = new Timer(
      mockedCallbackImplementation,
      mockedDelayImplementation
    );

    timer.resume();
    timer.pause();
    timer.resume();

    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
