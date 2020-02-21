// @ts-nocheck
import ReactDOM from "react-dom";

const MARGIN = 10;
const SEPARATION_BETWEEN_HANDLERS = 26;

function getElements(parent: any) {
  const touchLeft: any = parent.querySelector(".filter-left-handler");
  const touchRight: any = parent.querySelector(".filter-right-handler");
  const lineSpan: any = parent.querySelector(".filter-line span");
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

const RangeFilter = function(currentElement) {
  let startX = 0;
  let x = 0;

  const slider = ReactDOM.findDOMNode(currentElement);
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

  const normalizeFact = 26;

  this.reset = () => {
    x = 0;
    startX = 0;
    touchLeft.style.left = "0px";
    lineSpan.style.marginLeft = "0px";
    lineSpan.style.width = `${slider.offsetWidth - touchLeft.offsetWidth}px`;
    touchRight.style.left = `${slider.offsetWidth - touchLeft.offsetWidth}px`;
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
  const initialValue = lineSpan.offsetWidth - normalizeFact;

  this.setMinValue(defaultMinValue);
  this.setMaxValue(defaultMaxValue);

  function onStart(event: any) {
    event.preventDefault();
    let eventTouch = event;

    if (event.touches) {
      [eventTouch] = event.touches;
    }

    x = this === touchLeft ? touchLeft.offsetLeft : touchRight.offsetLeft;

    startX = eventTouch.pageX - x;
    selectedTouch = this;

    slider.addEventListener("mousemove", onMove);
    slider.addEventListener("mouseup", onStop);
    slider.addEventListener("touchmove", onMove);
    slider.addEventListener("touchend", onStop);
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

  const onMove = (event: any) => {
    let eventTouch = event;

    if (event.touches) {
      [eventTouch] = event.touches;
    }

    x = eventTouch.pageX - startX;

    if (selectedTouch === touchLeft) {
      if (x > touchRight.offsetLeft - selectedTouch.offsetWidth + MARGIN) {
        x = touchRight.offsetLeft - selectedTouch.offsetWidth + MARGIN;
      } else if (x < 0) {
        x = 0;
      }

      selectedTouch.style.left = `${x}px`;
    } else if (selectedTouch === touchRight) {
      if (x < touchLeft.offsetLeft + touchLeft.offsetWidth - MARGIN) {
        x = touchLeft.offsetLeft + touchLeft.offsetWidth - MARGIN;
      } else if (x > maxX) {
        x = maxX;
      }
      selectedTouch.style.left = `${x}px`;
    }

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

  const onStop = (event: any) => {
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

function init(currentElement) {
  if (!currentElement) {
    return {};
  }
  return new RangeFilter(currentElement);
}

export default init;
