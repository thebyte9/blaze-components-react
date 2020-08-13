// @ts-nocheck

const MARGIN = 10;
const SEPARATION_BETWEEN_HANDLERS = 26;

function getElements(parent: any) {
  const touchLeft: any = parent.querySelector(".range__filter--left");
  const touchRight: any = parent.querySelector(".range__filter--right");
  const lineSpan: any = parent.querySelector(".range__filter--line span");
  return { touchLeft, touchRight, lineSpan };
}

function getAttributes(parent: any, attributes: string[]) {
  return attributes.map((attribute: string) =>
    parseFloat(parent.getAttribute(attribute))
  );
}

function getLeftStyle({ ratio, parent, handler, isRight }) {
  const factor = isRight ? SEPARATION_BETWEEN_HANDLERS : 0;
  return `${Math.ceil(
    ratio *
    (parent.offsetWidth -
      (handler.offsetWidth + SEPARATION_BETWEEN_HANDLERS)) +
    factor
  )}px`;
}

function $(selector: string) {
  return document.querySelector(`.${selector}`);
}

const checkPassiveCompatibility = () => {
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        return false
      }
    });
    window.addEventListener("checkPassive", null, opts);
    window.removeEventListener("checkPassive", null, opts);
    return true;
  } catch (e) {
    return false;
  }
}

const RangeFilter = (selector: string, getMinMax: any) => {
  let startX = 0;
  let xAxis = 0;

  if (!$(selector)) {
    return;
  }

  const isPassiveSupported = checkPassiveCompatibility();

  const { touchLeft, touchRight, lineSpan } = getElements($(selector));

  const attributes = getAttributes($(selector), [
    "min",
    "max",
    "min-value",
    "max-value",
    "step"
  ]);

  const [min, max, ...defaultAttributes] = attributes;

  let [
    defaultMinValue = min,
    defaultMaxValue = max,
    step = 0.0
  ] = defaultAttributes;

  step = Math.abs(step);

  if (defaultMinValue < min) {
    defaultMinValue = min;
  }

  if (defaultMaxValue > max) {
    defaultMaxValue = max;
  }

  if (defaultMinValue > defaultMaxValue) {
    defaultMinValue = defaultMaxValue;
  }

  const reset = () => {
    xAxis = 0;
    startX = 0;
    touchLeft.style.left = "0px";
    lineSpan.style.marginLeft = "0px";
    lineSpan.style.width = `${$(selector).offsetWidth -
      touchLeft.offsetWidth}px`;
    touchRight.style.left = `${$(selector).offsetWidth -
      touchLeft.offsetWidth}px`;
  };

  const setValue = ({ typeValue, attribute, isRight }) => {
    const ratio = (typeValue - min) / (max - min);
    const handleDirection = isRight ? touchRight : touchLeft;
    handleDirection.style.left = getLeftStyle({
      handler: touchLeft,
      isRight,
      parent: $(selector),
      ratio
    });
    lineSpan.style.marginLeft = `${touchLeft.offsetLeft}px`;
    lineSpan.style.width = `${touchRight.offsetLeft - touchLeft.offsetLeft}px`;
    $(selector).setAttribute(attribute, typeValue);
  };

  const setMinValue = (minValue: any) => {
    setValue({
      attribute: "min-value",
      typeValue: minValue
    });
  };

  const setMaxValue = (maxValue: any) => {
    setValue({
      attribute: "max-value",
      isRight: true,
      typeValue: maxValue
    });
  };

  reset();

  const maxX = $(selector).offsetWidth - touchRight.offsetWidth;
  let selectedTouch = null;
  const initialValue = lineSpan.offsetWidth - SEPARATION_BETWEEN_HANDLERS;

  setMinValue(defaultMinValue);
  setMaxValue(defaultMaxValue);



  function onStart(event: any) {
    if (event.defaultPrevented) {
      event.preventDefault()
    };
    const eventTouch = event.touches ? event.touches[0] : event;

    xAxis = this === touchLeft ? touchLeft.offsetLeft : touchRight.offsetLeft;

    startX = eventTouch.pageX - xAxis;
    selectedTouch = this;

    $(selector).addEventListener("mousemove", onMove);
    $(selector).addEventListener("mouseup", onStop);
    $(selector).addEventListener("touchmove", onMove, isPassiveSupported ? { passive: true } : false)
    $(selector).addEventListener("touchend", onStop);
    document.addEventListener("click", onStop);
  }

  const calculateValue = () => {
    const newValue =
      (lineSpan.offsetWidth - SEPARATION_BETWEEN_HANDLERS) / initialValue;
    let minValue = lineSpan.offsetLeft / initialValue;
    let maxValue = minValue + newValue;

    minValue = minValue * (max - min) + min;
    maxValue = maxValue * (max - min) + min;

    if (step) {
      let multi = Math.floor(minValue / step);
      minValue = step * multi;

      multi = Math.floor(maxValue / step);
      maxValue = step * multi;
    }

    if (!(minValue > maxValue)) $(selector).setAttribute("min-value", minValue);
    if (!(maxValue < minValue)) $(selector).setAttribute("max-value", maxValue);
  };

  const setxAxisLeftPosition = () => {
    if (xAxis > touchRight.offsetLeft - selectedTouch.offsetWidth + MARGIN) {
      xAxis = touchRight.offsetLeft - selectedTouch.offsetWidth + MARGIN;
    }

    if (xAxis < 0) {
      xAxis = 0;
    }
  };

  const setxAxisRightPosition = () => {
    if (xAxis < touchLeft.offsetLeft + touchLeft.offsetWidth - MARGIN) {
      xAxis = touchLeft.offsetLeft + touchLeft.offsetWidth - MARGIN;
    }
    if (xAxis > maxX) {
      xAxis = maxX;
    }
  };

  const onMove = (event: any) => {
    const eventTouch = event.touches ? event.touches[0] : event;

    xAxis = eventTouch.pageX - startX;

    if (selectedTouch === touchLeft) {
      setxAxisLeftPosition();
    }

    if (selectedTouch === touchRight) {
      setxAxisRightPosition();
    }

    selectedTouch.style.left = `${xAxis}px`;
    lineSpan.style.marginLeft = `${touchLeft.offsetLeft}px`;
    lineSpan.style.width = `${touchRight.offsetLeft - touchLeft.offsetLeft}px`;

    calculateValue();

    const [minValue, maxValue] = getAttributes($(selector), [
      "min-value",
      "max-value"
    ]);

    getMinMax(minValue, maxValue);
  };

  const onStop = () => {
    document.removeEventListener("click", onStop);
    $(selector).removeEventListener("mousemove", onMove);
    $(selector).removeEventListener("mouseup", onStop);
    $(selector).removeEventListener("touchmove", onMove);
    $(selector).removeEventListener("touchend", onStop);

    selectedTouch = null;

    calculateValue();

    const [minValue, maxValue] = getAttributes($(selector), [
      "min-value",
      "max-value"
    ]);

    getMinMax(minValue, maxValue);
  };

  touchLeft.addEventListener("mousedown", onStart);
  touchRight.addEventListener("mousedown", onStart);
  touchLeft.addEventListener("touchstart", onStart, isPassiveSupported ? { passive: true } : false)
  touchRight.addEventListener("touchstart", onStart, isPassiveSupported ? { passive: true } : false)
};

export default RangeFilter;
