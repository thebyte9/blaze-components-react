import React, { useEffect, useState, useMemo, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import parseHTML from 'html-react-parser';
import { usePortal } from '@blaze-react/utils';
import ClickAwayWrapper, { ConditionalWrapper } from './ConditionalWrapper';
import { useTooltipStyles, useTouchScreenDetect } from './hooks';

interface TooltipProps {
  tooltipContent?: JSX.Element | string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  /** @deprecated no longer needed, positioning handles fixed parents */
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
  const [scrollUpdate, setScrollUpdate] = useState<number>(0);
  const availableTooltipPositions = useMemo(() => ({
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  }), []);

  const isHoverTrigger = useMemo(() => trigger === 'hover', [trigger]);
  const isClickTrigger = useMemo(() => trigger === 'click', [trigger]);
  const target = usePortal({ id: 'tooltip', condition: show });

  const getStylesList = useTooltipStyles(
    tooltipWrapperRef,
    position,
    availableTooltipPositions,
    isDisplayTooltipIndicator,
    space,
    childrenWidth,
    childrenHeight,
    scrollUpdate,
    newPosition
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

  useEffect(() => {
    if (!show) return;

    // Capture phase catches scrolls on any ancestor, not just the window
    const handleScroll = (event: Event) => {
      const scrolled = event.target;
      if (scrolled instanceof Node && !scrolled.contains(tooltipWrapperRef.current)) return;

      if (isClickTrigger) {
        setShow(false);
      } else {
        setScrollUpdate((count) => count + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleScroll);
    };
  }, [show, isClickTrigger]);

  if (!children && !tooltipContent) {
    return null;
  }

  return (
    <ConditionalWrapper
      condition={isClickTrigger}
      initialWrapper={(children) => <>{children}</>}
      wrapper={(children) => (
        <ClickAwayWrapper onClickAwayCallback={hideTooltip}>{children}</ClickAwayWrapper>
      )}
    >
      <span
        className={`tooltip ${disabled ? 'is-disabled' : ''}`}
        onMouseEnter={isHoverTrigger && !disabled ? showTooltip : undefined}
        onTouchStart={isHoverTrigger && !disabled && isHasTouch ? showTooltip : undefined}
        onTouchEnd={isHoverTrigger && !disabled && isHasTouch ? hideTooltip : undefined}
        onMouseLeave={isHoverTrigger && !disabled ? hideTooltip : undefined}
        onClick={isClickTrigger && !disabled ? showTooltip : undefined}
        ref={tooltipWrapperRef}
      >
        {show && tooltipContent
          ? ReactDOM.createPortal(
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
              onMouseEnter={showTooltip}
              onMouseLeave={isHoverTrigger && !disabled ? hideTooltip : undefined}
            >
              <span className={`tooltip-buffer  tooltip-buffer--${newPosition.current}`} onMouseEnter={showTooltip} />
              {isClickTrigger && (
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={hideTooltip}
                ></i>
              )}
              {typeof tooltipContent === 'string' ? parseHTML(tooltipContent) : tooltipContent}
            </span>,
            target
          )
          : null}
        {children ? children : <i className="material-icons">info_outline</i>}
      </span>
    </ConditionalWrapper>
  );
};

export default Tooltip;