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
  offset?: string;
}

function useInView({ ref, once = true, offset = '0px' }: IUseInView) {
  const [isIntersecting, setIntersecting] = useState(false);
  const outerRef = useRef();

  useEffect(() => {
    (async () => {
      const usableRef = ref || outerRef;
      const { current }: any = usableRef || {};
      if (!current) {
        return;
      }

      const newObserver: IntersectionObserver = new IntersectionObserver(
        ([entry]: any, observer: any) => {
          setIntersecting(entry.isIntersecting);

          if (entry.isIntersecting) {
            once && observer.unobserve(current);
          }
        },
        {
          rootMargin: offset,
        },
      );

      current && newObserver.observe(current);

      return () => {
        newObserver.unobserve(current);
      };
    })();
  }, [offset, once, ref]);

  return [isIntersecting, outerRef];
}

useInView.displayName = 'useInView';

export default useInView;
