import { act, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import expect from 'expect';
import React from 'react';
import useInView from '../../../src/customHooks/useInView';

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

  it('should return unobserve', () => {
    const { result } = renderHook(() => useInView({ once: false }));

    console.log(result.current);
  });

  it('should renturn isIntersecting to true when is present in viewport', async () => {
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
        this.observe = () => {};
        this.unobserve = () => {};
        this.disconnect = () => {};
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

    await render(<Component />);

    act(() => MockedIntersectionObserver.getInstance().triggerIsIntersecting());

    expect(MockedComponent).toBeCalled();
  });
});
