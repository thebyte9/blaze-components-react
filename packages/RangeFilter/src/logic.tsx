// @ts-nocheck
// tslint:disable: no-console

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

function createFunction({ attributes, ctx, parent, type }) {
  const [callback, minValue, maxValue] = getAttributes(parent, attributes);

  if (callback) {
    const fn = new Function("min, max", callback);
    fn(minValue, maxValue);
  }

  if (ctx[type]) {
    ctx[type](minValue, maxValue);
  }
}

const RangeFilter = function(elementId: string) {
  let startX = 0;
  let xAxis = 0;

  const slider = document.getElementById(elementId);
  if (!slider) {
    return;
  }
  const { touchLeft, touchRight, lineSpan } = getElements(slider);

  const attributes = getAttributes(slider, [
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

  this.reset = () => {
    console.log(slider.offsetWidth, "slider.offsetWidth");
    console.log(touchLeft.offsetWidth, "touchLeft.offsetWidth");

    xAxis = 0;
    startX = 0;
    touchLeft.style.left = "0px";
    lineSpan.style.marginLeft = "0px";
    let sliderOffsetWidth = slider.offsetWidth;
    let touchLeftOffsetWidth = touchLeft.offsetWidth;
    let areNotZeroValues = !!sliderOffsetWidth && !!touchLeftOffsetWidth;

    while (areNotZeroValues && sliderOffsetWidth === touchLeftOffsetWidth) {
      areNotZeroValues = !!sliderOffsetWidth && !!touchLeftOffsetWidth;
      sliderOffsetWidth = slider.offsetWidth;
      touchLeftOffsetWidth = touchLeft.offsetWidth;
    }

    lineSpan.style.width = `${sliderOffsetWidth - touchLeftOffsetWidth}px`;
    touchRight.style.left = `${sliderOffsetWidth - touchLeftOffsetWidth}px`;
  };

  this.setValue = ({ typeValue, attribute, isRight }) => {
    const ratio = (typeValue - min) / (max - min);
    const handleDirection = isRight ? touchRight : touchLeft;
    handleDirection.style.left = getLeftStyle({
      handler: touchLeft,
      isRight,
      parent: slider,
      ratio
    });
    lineSpan.style.marginLeft = `${touchLeft.offsetLeft}px`;
    lineSpan.style.width = `${touchRight.offsetLeft - touchLeft.offsetLeft}px`;
    slider.setAttribute(attribute, typeValue);
  };

  this.setMinValue = (minValue: any) => {
    this.setValue({
      attribute: "min-value",
      typeValue: minValue
    });
  };

  this.setMaxValue = (maxValue: any) => {
    this.setValue({
      attribute: "max-value",
      isRight: true,
      typeValue: maxValue
    });
  };

  this.reset();

  const maxX = slider.offsetWidth - touchRight.offsetWidth;
  let selectedTouch = null;
  const initialValue = lineSpan.offsetWidth - SEPARATION_BETWEEN_HANDLERS;

  this.setMinValue(defaultMinValue);
  this.setMaxValue(defaultMaxValue);

  function onStart(event: any) {
    event.preventDefault();
    let eventTouch = event.touches ? ([eventTouch] = event.touches) : event;

    xAxis = this === touchLeft ? touchLeft.offsetLeft : touchRight.offsetLeft;

    startX = eventTouch.pageX - xAxis;
    selectedTouch = this;

    slider.addEventListener("mousemove", onMove);
    slider.addEventListener("mouseup", onStop);
    slider.addEventListener("touchmove", onMove);
    slider.addEventListener("touchend", onStop);
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

    slider.setAttribute("min-value", minValue);
    slider.setAttribute("max-value", maxValue);
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
    let eventTouch = event.touches ? ([eventTouch] = event.touches) : event;

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

    createFunction({
      attributes: ["on-change", "min-value", "max-value"],
      ctx: this,
      parent: slider,
      type: "onChange"
    });
  };

  const onStop = () => {
    document.removeEventListener("click", onStop);
    slider.removeEventListener("mousemove", onMove);
    slider.removeEventListener("mouseup", onStop);
    slider.removeEventListener("touchmove", onMove);
    slider.removeEventListener("touchend", onStop);

    selectedTouch = null;

    calculateValue();

    createFunction({
      attributes: ["did-changed", "min-value", "max-value"],
      ctx: this,
      parent: slider,
      type: "didChanged"
    });
  };

  touchLeft.addEventListener("mousedown", onStart);
  touchRight.addEventListener("mousedown", onStart);
  touchLeft.addEventListener("touchstart", onStart);
  touchRight.addEventListener("touchstart", onStart);
};

function initRangeFilter(elementId: string) {
  return new RangeFilter(elementId);
}

export default initRangeFilter;
