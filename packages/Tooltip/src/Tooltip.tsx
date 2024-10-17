import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

function createWrapperAndAppendToBody(wrapper, wrapperElementId) {
  const wrapperElement = document.createElement(wrapper);
  wrapperElement.setAttribute('id', wrapperElementId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function getElementOffset(el) {
  let _x = 0,
    _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

const regex = /(auto|scroll)/;

const style = (node, prop) => getComputedStyle(node, null).getPropertyValue(prop);

const scroll = (node) =>
  regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));

// get the first scrollable parent
const getScrollParent = (node) =>
  !node || node === document.body
    ? document.body
    : scroll(node)
      ? node
      : getScrollParent(node.parentNode);

const useTouchScreenDetect = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    setIsTouchScreen('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchScreen;
};

const Portal = ({ children, wrapperElement, wrapperElementId }) => {
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    let element = document.getElementById(wrapperElementId);
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperElement, wrapperElementId);
    }
    setWrapper(element);
  }, [wrapperElementId, wrapperElement]);

  if (wrapper === null) return null;

  return ReactDOM.createPortal(children, wrapper);
};

const Tooltip = ({
  tooltipContent,
  position = 'top',
  color,
  backgroundColor,
  disabled,
  trigger = 'hover',
  className = '',
  children,
}) => {
  const isHasTouch = useTouchScreenDetect(),
    [show, setShow] = useState(false),
    [styles, setStyles] = useState({}),
    tooltipWrapperRef = useRef(null),
    tooltipMessage = useRef(null),
    newPosition = useRef(position),
    space = 15,
    [childrenWidth, setChildrenWidth] = useState(undefined),
    [childrenHeight, setChildrenHeight] = useState(undefined),
    [isTooltipVisible, setIsTooltipVisible] = useState(false),
    isHoverTrigger = useMemo(() => trigger === 'hover', [trigger]),
    isClickTrigger = useMemo(() => trigger === 'click', [trigger]);

  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };

  const showTooltip = () => {
    if (!show) {
      setShow(true);
      setStyles(getStylesList());
    }
  };

  const hideTooltip = () => {
    setShow(false);
  };

  const toggleTooltip = () => {
    setShow((prevShow) => !prevShow);
    if (!show) {
      setStyles(getStylesList());
    }
  };

  const getStylesList = useCallback(() => {
    if (tooltipWrapperRef.current) {
      const wrapperRect = tooltipWrapperRef.current.getBoundingClientRect(),
        centeredHorizontalPosition = Math.max(space, wrapperRect.left + wrapperRect.width / 2),
        centeredVerticalPosition = getElementOffset(tooltipWrapperRef.current).top + wrapperRect.height / 2;

      let pos = position;
      if (position === 'top' && wrapperRect.top < (childrenHeight || 0) + space) {
        pos = 'bottom';
      } else if (position === 'right' && wrapperRect.right + (childrenWidth || 0) + space * 1.5 > window.innerWidth) {
        pos = 'left';
      } else if (position === 'bottom' && wrapperRect.bottom + (childrenHeight || 0) + space > window.innerHeight) {
        pos = 'top';
      } else if (position === 'left' && wrapperRect.left - (childrenWidth || 0) + space * 1.5 < 0) {
        pos = 'right';
      }

      newPosition.current = pos;

      return pos === 'top'
        ? { top: wrapperRect.top - (childrenHeight || 0) - space, left: centeredHorizontalPosition }
        : pos === 'right'
          ? { top: centeredVerticalPosition, left: wrapperRect.right + space }
          : pos === 'bottom'
            ? { top: wrapperRect.bottom + space, left: centeredHorizontalPosition }
            : { top: centeredVerticalPosition, left: wrapperRect.left - (childrenWidth || 0) - space };
    }
    return { top: 0, left: 0 };
  }, [position, childrenWidth, childrenHeight]);

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

  useEffect(() => {
    if (getStylesList().top !== styles.top || getStylesList().left !== styles.left) {
      setStyles(getStylesList());
    }
  }, [getStylesList, styles.left, styles.top]);

  return (
    <span
      className={`tooltip ${disabled ? 'is-disabled' : ''}`}
      onMouseEnter={isHoverTrigger && !disabled ? showTooltip : undefined}
      onMouseLeave={isHoverTrigger && !disabled ? hideTooltip : undefined}
      onClick={isClickTrigger && !disabled ? toggleTooltip : undefined}
      ref={tooltipWrapperRef}
    >
      <Portal wrapperElement="span" wrapperElementId="tooltip">
        {show && tooltipContent && (
          <span
            ref={tooltipMessage}
            className={`tooltip-message on-${newPosition.current} ${className}`}
            style={{ ...styles, color: color || '#fff', backgroundColor: backgroundColor || 'rgba(97, 97, 97, 0.92)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{tooltipContent}</span>
            {isClickTrigger && (
              <button
                onClick={handleClose}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            )}
          </span>
        )}
      </Portal>
      {children}
    </span>
  );
};

export default Tooltip;
