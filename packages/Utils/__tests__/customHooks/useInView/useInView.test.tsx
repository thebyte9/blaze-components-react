import { act, render, renderHook } from '@testing-library/react';
import React from 'react';
import expect from 'expect';
import { useInView } from '../../../src/customHooks';

class MockedIntersectionObserver {
  public static getInstance() {
    if (!MockedIntersectionObserver.instance) {
      MockedIntersectionObserver.instance = new MockedIntersectionObserver(null);
    }

    return MockedIntersectionObserver.instance;
  }
  private static instance: any;
  public observe: any;
  public unobserve: any;
  public disconnect: any;
  public cb: any;
  constructor(cb: any) {
    if (!!MockedIntersectionObserver.instance) {
      return MockedIntersectionObserver.instance;
    }

    MockedIntersectionObserver.instance = this;
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
    this.cb = cb;
    return this;
  }

  public triggerIsIntersecting() {
    this.cb([{ isIntersecting: true }], this);
  }
}
(global as any).window.IntersectionObserver = MockedIntersectionObserver;

const MockedComponent: any = jest.fn(() => <div>Lazy.Loaded.Component</div>);

const Component = () => {
  const [isIntersecting, outerRef]: any = useInView({ once: true });
  return <div ref={outerRef}>{isIntersecting && <MockedComponent />}</div>;
};

describe('Use in view', () => {
  it('should be defined', () => {
    expect(useInView).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof useInView).toBe('function');
  });

  it('should return isIntersecting to false when is not present in viewport', () => {
    const { result } = renderHook(() => useInView({ once: true }));

    const [isIntersecting, { current: outerRef }]: any = result.current;
    expect(isIntersecting).toBe(false);
    expect(outerRef).toBe(undefined);
  });

  it('should set isIntersecting to true when is present in viewport', () => {
    const { unmount } = render(<Component />);

    act(() => MockedIntersectionObserver.getInstance().triggerIsIntersecting());

    expect(MockedComponent).toBeCalled();

    unmount();
  });

  it('should observe the element while mounted', () => {
    const { unmount } = render(<Component />);

    expect(MockedIntersectionObserver.getInstance().observe).toHaveBeenCalled();

    unmount();
  });

  it('should disconnect the observer on unmount', () => {
    // The previous version of this test spied on React.useEffect and asserted it
    // had been called, which is true whether or not the effect returns a cleanup
    // — so it passed while the observer was in fact never disconnected. The
    // cleanup had been returned from an `async` IIFE rather than from the effect.
    // Assert the observable consequence instead.
    const { unmount } = render(<Component />);
    const observer = MockedIntersectionObserver.getInstance();
    (observer.disconnect as jest.Mock).mockClear();

    unmount();

    expect(observer.disconnect).toHaveBeenCalled();
  });
});
