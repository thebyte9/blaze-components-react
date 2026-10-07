import { useCallback } from 'react';

const useTooltipStyles = (
  tooltipWrapperRef: React.RefObject<HTMLSpanElement>,
  position: string,
  availableTooltipPositions: { [key: string]: string },
  isDisplayTooltipIndicator: boolean,
  space: number,
  childrenWidth: number | undefined,
  childrenHeight: number | undefined,
  scrollUpdate: number,
): any => {
  const getStylesList = useCallback(() => {
    if (!tooltipWrapperRef.current) {
      return { top: 0, left: 0 };
    }

    // The message is portalled to <body> with position: absolute, so use document coordinates.
    // Viewport rect + window scroll stays correct inside any scrolling ancestor or fixed parent.
    const wrapperRect = tooltipWrapperRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const style: React.CSSProperties = { left: 0, top: 0 };
    const centeredHorizontalPosition = Math.max(space, wrapperRect.left + wrapperRect.width / 2) + scrollX;
    const centeredVerticalPosition = wrapperRect.top + wrapperRect.height / 2 + scrollY;

    const getNewPosition = (pos: string) => {
      if (typeof window === 'undefined') {
        return pos;
      }

      const positionChecks = {
        [availableTooltipPositions.top]: wrapperRect.top < (childrenHeight || 0) + space,
        [availableTooltipPositions.right]: wrapperRect.right + ((childrenWidth || 0) + space * 1.5) > window.innerWidth,
        [availableTooltipPositions.bottom]: wrapperRect.bottom + (childrenHeight || 0) + space > window.innerHeight,
        [availableTooltipPositions.left]: wrapperRect.left - ((childrenWidth || 0) + space * 1.5) < 0,
      };

      for (const [key, condition] of Object.entries(positionChecks)) {
        if (key === pos && condition) {
          return {
            [availableTooltipPositions.top]: availableTooltipPositions.bottom,
            [availableTooltipPositions.right]: availableTooltipPositions.left,
            [availableTooltipPositions.bottom]: availableTooltipPositions.top,
            [availableTooltipPositions.left]: availableTooltipPositions.right,
          }[key];
        }
      }

      return pos;
    };

    const pos = getNewPosition(position);

    const positionStyles = {
      [availableTooltipPositions.top]: () => {
        style.top = Math.max(
          space,
          wrapperRect.top -
            (childrenHeight || 0) -
            (isDisplayTooltipIndicator ? space : space / 2),
        ) + scrollY;
        style.left = centeredHorizontalPosition;
      },
      [availableTooltipPositions.right]: () => {
        style.top = centeredVerticalPosition;
        style.left = Math.max(space, wrapperRect.right + space) + scrollX;
      },
      [availableTooltipPositions.bottom]: () => {
        style.top =
          wrapperRect.bottom +
          (isDisplayTooltipIndicator ? space : space / 2) +
          scrollY;
        style.left = centeredHorizontalPosition;
      },
      [availableTooltipPositions.left]: () => {
        style.top = centeredVerticalPosition;
        style.left = Math.max(space, wrapperRect.left - ((childrenWidth || 0) + space)) + scrollX;
      },
    };

    positionStyles[pos] && positionStyles[pos]();

    return style;
    // scrollUpdate only forces a fresh callback (and so a re-measure) after a scroll or resize
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    tooltipWrapperRef,
    position,
    availableTooltipPositions,
    isDisplayTooltipIndicator,
    space,
    childrenWidth,
    childrenHeight,
    scrollUpdate,
  ]);

  return getStylesList;
};

export default useTooltipStyles;
