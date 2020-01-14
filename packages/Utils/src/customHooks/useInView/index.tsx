import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

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

function useInView({ ref, once = true, offset = "0px" }: IUseInView) {
  const [isIntersecting, setIntersecting] = useState(false);
  const outerRef = useRef();

  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") {
        return;
      }
      const usableRef = ref || outerRef;
      const { current }: any = usableRef || {};
      if (!current) {
        return;
      }

      (await window.IntersectionObserver)
        ? Promise.resolve()
        : import("intersection-observer");

      const newObserver: IntersectionObserver = new IntersectionObserver(
        ([entry]: any, observer: any) => {
          setIntersecting(entry.isIntersecting);

          if (entry.isIntersecting) {
            once && observer?.unobserve(current);
          }
        },
        {
          rootMargin: offset
        }
      );

      current && newObserver.observe(current);

      return () => {
        newObserver?.unobserve(current);
      };
    })();
  }, [offset, once, ref]);

  return [isIntersecting, outerRef];
}

useInView.displayName = "useInView";
useInView.propTypes = {
  ref: PropTypes.element,
  rootMargin: PropTypes.string
};

export default useInView;
