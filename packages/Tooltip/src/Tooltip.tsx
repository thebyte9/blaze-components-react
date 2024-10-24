import React, { useEffect, useState, useMemo, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '@blaze-react/utils';
import { useTooltipStyles, useTouchScreenDetect } from './hooks';
import { tooltipDOMUtils } from './utils';

interface TooltipProps {
  tooltipContent?: JSX.Element | string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  isParentFixed?: boolean;
  customPosition?: React.CSSProperties;
  isDisplayTooltipIndicator?: boolean;
  trigger?: 'hover' | 'click';
  className?: string;
  children?: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltipContent,
  position = 'top',
  color,
  backgroundColor = "#FFF",
  disabled,
  isParentFixed,
  customPosition,
  isDisplayTooltipIndicator = true,
  trigger = 'hover',
  className = 'default',
  children,
}) => {
  const isHasTouch = useTouchScreenDetect();
  const [show, setShow] = useState<boolean>(false);
  const [styles, setStyles] = useState<React.CSSProperties>({});
  const tooltipWrapperRef = useRef<HTMLSpanElement | null>(null);
  const tooltipMessage = useRef<HTMLSpanElement | null>(null);
  const newPosition = useRef<string>(position);
  const space = 15;
  const [childrenWidth, setChildrenWidth] = useState<number | undefined>(undefined);
  const [childrenHeight, setChildrenHeight] = useState<number | undefined>(undefined);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [wrapperParentUpdated, setWrapperParentUpdated] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const availableTooltipPositions = useMemo(() => ({
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  }), []);

  const isHoverTrigger = useMemo(() => trigger === 'hover', [trigger]);
  const isClickTrigger = useMemo(() => trigger === 'click', [trigger]);
  const target = usePortal({ id: 'tooltip' });

  const getStylesList = useTooltipStyles(
    tooltipWrapperRef,
    position,
    availableTooltipPositions,
    isDisplayTooltipIndicator,
    space,
    childrenWidth,
    childrenHeight,
    isParentFixed,
    wrapperParentUpdated
  );

  useEffect(() => {
    if (show && childrenWidth === undefined && childrenHeight === undefined) {
      setChildrenHeight(tooltipMessage.current?.offsetHeight);
      setChildrenWidth(tooltipMessage.current?.offsetWidth);
    }
  }, [show, childrenWidth, childrenHeight]);

  useEffect(() => {
    if (show && !isTooltipVisible && childrenWidth !== undefined && childrenHeight !== undefined) {
      setIsTooltipVisible(true);
    }
  }, [show, isTooltipVisible, childrenWidth, childrenHeight]);

  const showTooltip = () => {
    if (!show) {
      setShow(true);
      setStyles(getStylesList());
    }
  };

  const hideTooltip = () => {
    setShow(false);
  };

  useEffect(() => {
    if (getStylesList().top !== styles.top || getStylesList().left !== styles.left) {
      setStyles(getStylesList());
    }
  }, [getStylesList, styles.left, styles.top]);

  const updateScrollableParentScroll = ({ target: { scrollTop, scrollLeft } }: Event) => {
    setWrapperParentUpdated({
      top: scrollTop as number,
      left: scrollLeft as number,
    });
  };

  useEffect(() => {
    if (tooltipWrapperRef.current) {
      const wrapperRef = tooltipWrapperRef.current;
      const scrollableParent = tooltipDOMUtils.getScrollParent(wrapperRef);

      window.addEventListener('resize', updateScrollableParentScroll);
      scrollableParent.addEventListener('scroll', updateScrollableParentScroll);

      return () => {
        window.removeEventListener('resize', updateScrollableParentScroll);
        scrollableParent.removeEventListener('scroll', updateScrollableParentScroll);
      };
    }
  }, []);

  if (!children && !tooltipContent) {
    return null;
  }

  return (
    <span
      className={`tooltip ${disabled ? 'is-disabled' : ''}`}
      onMouseEnter={isHoverTrigger && !disabled && !isHasTouch ? showTooltip : undefined}
      onMouseLeave={isHoverTrigger && !disabled && !isHasTouch ? hideTooltip : undefined}
      onTouchStart={isHoverTrigger && !disabled && isHasTouch ? showTooltip : undefined}
      onTouchEnd={isHoverTrigger && !disabled && isHasTouch ? hideTooltip : undefined}
      onClick={isClickTrigger && !disabled ? showTooltip : undefined}
      ref={tooltipWrapperRef}
    >
      {ReactDOM.createPortal(
        show && tooltipContent ? (
          <span
            ref={tooltipMessage}
            className={`tooltip-message ${className} on-${newPosition.current} ${isDisplayTooltipIndicator ? 'is-indicator' : ''}`}
            style={{
              color,
              '--background-color': backgroundColor,
              ...customPosition,
              visibility: (newPosition.current === availableTooltipPositions.left ||
                newPosition.current === availableTooltipPositions.top) && !isTooltipVisible
                ? 'hidden'
                : 'visible',
              ...styles,
            }}
          >
            {isClickTrigger && (
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={hideTooltip}
              ></i>
            )}
            {tooltipContent}
          </span>
        ) : null,
        target
      )}
      {children ? children : <i className="fa fa-info-circle" />}
    </span>
  );
};

export default Tooltip;
