import { useCallback } from 'react';
import { tooltipDOMUtils } from '../utils';

const useTooltipStyles = (
  tooltipWrapperRef: React.RefObject<HTMLSpanElement>,
  position: string,
  availableTooltipPositions: { [key: string]: string },
  isDisplayTooltipIndicator: boolean,
  space: number,
  childrenWidth: number | undefined,
  childrenHeight: number | undefined,
  isParentFixed: boolean | undefined,
  wrapperParentUpdated: { top: number; left: number }
): any => {
  const getStylesList = useCallback(() => {
    if (!tooltipWrapperRef.current) {
      return { top: 0, left: 0 };
    }

    const wrapperRect = tooltipWrapperRef.current.getBoundingClientRect();
    const scrollableParent = tooltipDOMUtils.getScrollParent(tooltipWrapperRef.current);
    const style: React.CSSProperties = { left: 0, top: 0 };
    const centeredHorizontalPosition = Math.max(space, wrapperRect.left + wrapperRect.width / 2);
    const centeredVerticalPosition =
      tooltipDOMUtils.getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;

    const getNewPosition = (pos: string) => {
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
          tooltipDOMUtils.getElementOffset(tooltipWrapperRef.current).top -
            (childrenHeight || 0) -
            (isDisplayTooltipIndicator ? space : space / 2)
        );
        style.left = centeredHorizontalPosition;
      },
      [availableTooltipPositions.right]: () => {
        style.top = centeredVerticalPosition;
        style.left = Math.max(space, wrapperRect.right + space);
      },
      [availableTooltipPositions.bottom]: () => {
        style.top =
          tooltipDOMUtils.getElementOffset(tooltipWrapperRef.current).top +
          wrapperRect.height +
          (isDisplayTooltipIndicator ? space : space / 2);
        style.left = centeredHorizontalPosition;
      },
      [availableTooltipPositions.left]: () => {
        style.top = centeredVerticalPosition;
        style.left = Math.max(space, wrapperRect.left - ((childrenWidth || 0) + space));
      },
    };

    positionStyles[pos] && positionStyles[pos]();

    if (!isParentFixed && scrollableParent && wrapperParentUpdated) {
      style.top -= scrollableParent.scrollTop;
    }

    return style;
  }, [
    tooltipWrapperRef,
    position,
    availableTooltipPositions,
    isDisplayTooltipIndicator,
    space,
    childrenWidth,
    childrenHeight,
    isParentFixed,
    wrapperParentUpdated,
  ]);

  return getStylesList;
};

export default useTooltipStyles;
