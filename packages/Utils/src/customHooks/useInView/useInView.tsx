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
  /**
   * Passed straight to IntersectionObserver as `rootMargin`, so it accepts the
   * full CSS-margin syntax — '200px', or '200px 0px -200px 0px' to grow the top
   * of the trigger area while shrinking the bottom. There is no separate
   * `bottomOffset` option: a caller wanting one expresses it here.
   */
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

    // Returned from the effect itself. It previously sat inside an `async` IIFE,
    // so React received the IIFE's promise instead of a cleanup function and the
    // observer was never disconnected — on unmount, or when the deps changed.
    // Nothing here awaits anything, so the IIFE has been removed rather than
    // worked around.
    return () => observer.disconnect();
  }, [offset, once, ref]);

  return [isIntersecting, outerRef];
}

useInView.displayName = 'useInView';

export default useInView;
