import 'intersection-observer';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    IntersectionObserver: any;
  }
}

interface IUseInView {
  ref?: any;
  once?: boolean;
  /** IntersectionObserver's rootMargin, so the full CSS-margin syntax works. */
  offset?: string;
}

function useInView({ ref, once = true, offset = '0px' }: IUseInView) {
  const [isIntersecting, setIntersecting] = useState(false);
  const outerRef = useRef();

  useEffect(() => {
    const usableRef = ref || outerRef;
    const { current }: any = usableRef || {};
    if (!current) {
      return undefined;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]: any, self: any) => {
        setIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          once && self.unobserve(current);
        }
      },
      {
        rootMargin: offset,
      },
    );

    observer.observe(current);

    // Returned from the effect itself; it previously sat inside an `async` IIFE,
    // so React never received it and the observer was never disconnected.
    return () => observer.disconnect();
  }, [offset, once, ref]);

  return [isIntersecting, outerRef];
}

useInView.displayName = 'useInView';

export default useInView;
