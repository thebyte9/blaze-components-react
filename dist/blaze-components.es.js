import React, { useState, Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import crypto from 'crypto';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      submit = _ref.submit,
      children = _ref.children,
      modifiers = _ref.modifiers,
      attrs = _objectWithoutProperties(_ref, ["disabled", "submit", "children", "modifiers"]);

  var _type = submit ? 'submit' : 'button';

  var _modifiers = modifiers.split(' ').map(function (modifier) {
    return "button--".concat(modifier);
  }).join(' ');

  return React.createElement("button", _extends({
    disabled: disabled,
    className: "button ".concat(_modifiers),
    type: _type
  }, attrs), children);
};

Button.propTypes = {
  modifiers: PropTypes.string,
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Button.defaultProps = {
  modifiers: '',
  disabled: false,
  submit: false,
  children: null
};

var RadioButton = function RadioButton(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      required = _ref.required,
      attrs = _objectWithoutProperties(_ref, ["onChange", "options", "required"]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleSelect = function handleSelect(_ref2) {
    var event = _ref2.event,
        item = _ref2.item;
    if (item.disabled) return;
    setSelected(item);
    onChange({
      event: event,
      selected: item
    });
  };

  return React.createElement(Fragment, null, required && React.createElement("span", {
    className: "required"
  }), options.map(function (item) {
    var value = item.value,
        disabled = item.disabled,
        label = item.label,
        id = item.id;
    return React.createElement("span", {
      key: label,
      className: "form-field form-field--radio",
      onClick: function onClick(event) {
        return handleSelect({
          event: event,
          item: item
        });
      },
      role: "button"
    }, React.createElement("input", _extends({
      readOnly: true,
      type: "radio",
      className: "form-radio",
      value: value,
      disabled: disabled,
      checked: value === selected.value,
      id: id
    }, attrs)), React.createElement("label", {
      htmlFor: id
    }, label));
  }));
};

RadioButton.propTypes = {
  options: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func
};
RadioButton.defaultProps = {
  options: [],
  required: false,
  onChange: function onChange() {}
};

var Checkboxes = function Checkboxes(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      withEffect = _ref.withEffect,
      _boolean = _ref["boolean"],
      attrs = _objectWithoutProperties(_ref, ["onChange", "options", "withEffect", "boolean"]);

  var _useState = useState(options),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    if (withEffect) setData(options);
  }, [options]);

  var toggle = function toggle(_ref2) {
    var event = _ref2.event,
        item = _ref2.item,
        key = _ref2.key;
    if (item.disabled) return;
    data[key].checked = !item.checked;
    setData(_toConsumableArray(data));
    var checked = data.filter(function (option) {
      return option.checked;
    });
    if (_boolean) checked = !!checked.length;
    onChange({
      event: event,
      checked: checked
    });
  };

  return React.createElement(Fragment, null, data.map(function (item, key) {
    var _item$checked = item.checked,
        checked = _item$checked === void 0 ? false : _item$checked,
        value = item.value,
        disabled = item.disabled,
        required = item.required,
        label = item.label,
        id = item.id;
    return React.createElement("span", {
      key: id,
      className: "form-field form-field--checkbox",
      onClick: function onClick(e) {
        return toggle({
          e: e,
          item: item,
          key: key
        });
      },
      role: "button"
    }, React.createElement("input", _extends({
      readOnly: true,
      type: "checkbox",
      className: "form-checkbox",
      value: value,
      disabled: disabled,
      checked: checked,
      required: required,
      id: id
    }, attrs)), "\xA0 \xA0", React.createElement("label", {
      htmlFor: id,
      className: required ? 'required' : ''
    }, label));
  }));
};

Checkboxes.propTypes = {
  options: PropTypes.array,
  withEffect: PropTypes.bool,
  "boolean": PropTypes.bool,
  onChange: PropTypes.func
};
Checkboxes.defaultProps = {
  options: [],
  withEffect: false,
  "boolean": false,
  onChange: function onChange() {}
};

var Select = function Select(_ref) {
  var label = _ref.label,
      required = _ref.required,
      onChange = _ref.onChange,
      options = _ref.options,
      selected = _ref.selected,
      keys = _ref.keys,
      attrs = _objectWithoutProperties(_ref, ["label", "required", "onChange", "options", "selected", "keys"]);

  var _useState = useState(selected),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var handleChange = function handleChange(event) {
    setSelectedOption(event.target.value);
    onChange({
      event: event,
      selected: event.target.value
    });
  };

  var isRequired = required ? 'required' : '';

  var setOption = function setOption(value, text) {
    return React.createElement("option", {
      key: value,
      value: value
    }, text || value);
  };

  var renderOptions = function renderOptions() {
    var _options = _slicedToArray(options, 1),
        first = _options[0];

    if (typeof first === 'string') return options.map(function (option) {
      return setOption(option);
    });
    if (first instanceof Array) return options.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[0],
          text = _ref3[1];

      return setOption(value, text);
    });
    return options.map(function (option) {
      var _keys = _slicedToArray(keys, 2),
          value = _keys[0],
          text = _keys[1];

      return setOption(option[value], option[text]);
    });
  };

  return React.createElement(Fragment, null, label && React.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React.createElement("select", _extends({
    onChange: handleChange,
    defaultValue: selectedOption,
    disabled: !options.length
  }, attrs), React.createElement("option", {
    value: null
  }, "Please Choose..."), renderOptions()));
};

Select.propTypes = {
  label: PropTypes.string,
  keys: PropTypes.array,
  options: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.any
};
Select.defaultProps = {
  label: '',
  keys: [],
  options: [],
  required: false,
  onChange: function onChange() {},
  selected: ''
};

var Textarea = function Textarea(_ref) {
  var value = _ref.value,
      label = _ref.label,
      limit = _ref.limit,
      onChange = _ref.onChange,
      required = _ref.required,
      attrs = _objectWithoutProperties(_ref, ["value", "label", "limit", "onChange", "required"]);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  var handleChange = function handleChange(event) {
    var _content = event.target.value;
    if (limit && _content.length > limit) _content = _content.slice(0, limit);
    setContent(_content);
    onChange({
      event: event,
      value: _content
    });
  };

  var isRequired = required ? 'required' : '';
  var total = limit && limit - content.length;
  return React.createElement(Fragment, null, label && React.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React.createElement("textarea", _extends({
    value: content,
    rows: attrs.rows,
    cols: attrs.cols,
    onChange: handleChange,
    required: required
  }, attrs)), !!limit && React.createElement("span", null, total));
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  limit: PropTypes.number,
  onChange: PropTypes.func
};
Textarea.defaultProps = {
  label: '',
  value: '',
  required: false,
  limit: 0,
  onChange: function onChange() {}
};

var Input = function Input(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      required = _ref.required,
      type = _ref.type,
      hideTypeToggle = _ref.hideTypeToggle,
      attrs = _objectWithoutProperties(_ref, ["label", "disabled", "value", "onChange", "required", "type", "hideTypeToggle"]);

  var passwordDefaultState = {
    className: 'active',
    text: 'Show',
    icon: 'visibility_off'
  };

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      newValue = _useState2[0],
      setNewValue = _useState2[1];

  var _useState3 = useState(type),
      _useState4 = _slicedToArray(_useState3, 2),
      newType = _useState4[0],
      setType = _useState4[1];

  var _useState5 = useState(passwordDefaultState),
      _useState6 = _slicedToArray(_useState5, 2),
      passwordState = _useState6[0],
      setPasswordState = _useState6[1];

  var handleChange = function handleChange(event) {
    setNewValue(event.target.value);
    onChange({
      event: event,
      value: event.target.value
    });
  };

  var togglepasswordClassName = function togglepasswordClassName() {
    if (passwordState.className === 'active') {
      setPasswordState({
        className: 'hide',
        text: 'Hide',
        icon: 'visibility'
      });
      setType('text');
    } else {
      setPasswordState(passwordDefaultState);
      setType('password');
    }
  };

  var isRequired = required ? 'required' : '';
  return React.createElement(Fragment, null, label && React.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React.createElement("input", _extends({
    onChange: handleChange,
    value: newValue,
    disabled: disabled,
    type: newType,
    required: required
  }, attrs)), !hideTypeToggle && type === 'password' && React.createElement("span", {
    onClick: togglepasswordClassName,
    className: "show-hide-password ".concat(passwordState.className),
    role: "button"
  }, passwordState.text, React.createElement("i", {
    className: "material-icons"
  }, passwordState.icon)));
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  hideTypeToggle: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func
};
Input.defaultProps = {
  label: '',
  value: '',
  type: 'text',
  disabled: false,
  required: false,
  hideTypeToggle: false,
  onChange: function onChange() {}
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      close = _ref.close,
      icon = _ref.icon,
      type = _ref.type,
      attrs = _objectWithoutProperties(_ref, ["children", "close", "icon", "type"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      offModal = _useState2[0],
      setModalOff = _useState2[1];

  var assignType = type && "alert--".concat(type);
  var isDismissable = close && 'alert--dismissable';
  var withIcon = icon && 'alert--icon';
  var renderAlert = React.createElement("div", _extends({
    className: "alert ".concat(assignType, " ").concat(isDismissable, " ").concat(withIcon)
  }, attrs), icon && React.createElement("i", {
    className: "material-icons"
  }, icon), children, close && React.createElement(Button, {
    onClick: function onClick() {
      return setModalOff(true);
    },
    className: "icon-button icon-button--close"
  }, React.createElement("i", {
    className: "material-icons"
  }, "close")));
  return React.createElement(Fragment, null, !offModal && renderAlert);
};

Alert.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  close: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Alert.defaultProps = {
  icon: '',
  type: '',
  close: false,
  children: 'No content'
};

var Progress = function Progress(_ref) {
  var progress = _ref.progress,
      steps = _ref.steps,
      type = _ref.type,
      onChange = _ref.onChange;

  var _useState = useState(progress),
      _useState2 = _slicedToArray(_useState, 2),
      _progress = _useState2[0],
      setProgress = _useState2[1];

  var handleClick = function handleClick(_ref2) {
    var e = _ref2.e,
        step = _ref2.step;
    setProgress(step);
    onChange({
      e: e,
      step: step
    });
  };

  var checkStep = function checkStep(step) {
    if (step === steps.length && step === _progress) return 'final current';
    if (step === _progress) return 'current';
    if (step === steps.length) return 'final';
    if (step <= _progress) return 'visited';
    return '';
  };

  var isTypeCount = type === 'count' ? 'progress-bar__list-item--dots' : '';
  return React.createElement("nav", {
    className: "progress-bar"
  }, React.createElement("ol", {
    className: "progress-bar__list"
  }, steps.map(function (text, index) {
    return React.createElement("li", {
      key: text,
      className: "progress-bar__list-item progress-bar__list-item--".concat(type, " ").concat(isTypeCount, " ").concat(checkStep(index + 1))
    }, React.createElement("span", {
      onClick: function onClick(e) {
        return handleClick({
          e: e,
          step: index + 1
        });
      },
      role: "button"
    }, text));
  })));
};

Progress.propTypes = {
  progress: PropTypes.number,
  type: PropTypes.string,
  steps: PropTypes.array,
  onChange: PropTypes.func
};
Progress.defaultProps = {
  progress: 0,
  type: 'dots',
  steps: [],
  onChange: function onChange() {}
};

var Badge = function Badge(_ref) {
  var children = _ref.children,
      type = _ref.type,
      pill = _ref.pill,
      icon = _ref.icon,
      round = _ref.round,
      to = _ref.to,
      link = _ref.link,
      attrs = _objectWithoutProperties(_ref, ["children", "type", "pill", "icon", "round", "to", "link"]);

  var assignType = type ? "badge--".concat(type) : '';
  var isPill = pill ? 'badge--pill' : '';
  var isRound = round ? 'badge--round' : '';
  var withIcon = icon ? 'badge--icon-text' : '';
  var classes = "badge ".concat(assignType, " ").concat(isRound, " ").concat(isPill, " ").concat(withIcon);
  return link ? React.createElement("a", _extends({
    href: to,
    className: classes
  }, attrs), children) : React.createElement("span", _extends({
    className: classes
  }, attrs), children);
};

Badge.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  round: PropTypes.bool,
  link: PropTypes.bool,
  pill: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Badge.defaultProps = {
  type: '',
  to: '#',
  round: false,
  pill: false,
  link: false,
  icon: false,
  children: 'No content'
};

var TabItem = function TabItem(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "tabs__content current"
  }, children);
};
TabItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TabItem.defaultProps = {
  children: 'No content'
};
var Tab = function Tab(_ref2) {
  var selected = _ref2.selected,
      children = _ref2.children;

  var _useState = useState(selected),
      _useState2 = _slicedToArray(_useState, 2),
      _selected = _useState2[0],
      setSelected = _useState2[1];

  var handleChange = function handleChange(_ref3) {
    var step = _ref3.step,
        _ref3$action = _ref3.action,
        action = _ref3$action === void 0 ? function () {} : _ref3$action;
    setSelected(step);
    action();
  };

  return React.createElement("div", {
    className: "tabs"
  }, React.createElement("div", {
    className: "tabs__list"
  }, children.map(function (_ref4, step) {
    var _ref4$props = _ref4.props,
        _ref4$props$title = _ref4$props.title,
        title = _ref4$props$title === void 0 ? 'Unnamed tab' : _ref4$props$title,
        action = _ref4$props.action;
    return React.createElement(Button, {
      className: "tabs__list-item ".concat(step === _selected ? 'current' : ''),
      onClick: function onClick() {
        return handleChange({
          step: step,
          action: action
        });
      },
      key: title
    }, title);
  })), children[_selected]);
};
Tab.propTypes = {
  selected: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Tab.defaultProps = {
  selected: 0,
  children: 'No content'
};

var index = {
  Tab: Tab,
  TabItem: TabItem
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      simple = _ref.simple,
      alert = _ref.alert,
      title = _ref.title,
      actions = _ref.actions;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      offModal = _useState2[0],
      setModalOff = _useState2[1];

  var type = function type() {
    if (simple) return '--simple';
    if (alert) return '--alert';
    return '';
  };

  var renderModal = React.createElement(Fragment, null, React.createElement("div", {
    className: "overlay"
  }), React.createElement("div", {
    className: "modal modal".concat(type(), " modal--show")
  }, React.createElement("div", {
    className: "modal__header modal__header".concat(type())
  }, !alert && React.createElement("div", {
    className: "modal__title"
  }, title), !alert && React.createElement("div", {
    className: "modal__close",
    role: "button",
    onClick: function onClick() {
      return setModalOff(true);
    }
  }, React.createElement("i", {
    className: "material-icons"
  }, "close"))), React.createElement("div", {
    className: "modal__content modal__content".concat(type())
  }, children), React.createElement("div", {
    className: "modal__footer modal__footer".concat(type())
  }, React.createElement("div", {
    className: "modal__button"
  }, alert && React.createElement(Button, {
    className: "button button--link",
    onClick: function onClick() {
      return setModalOff(true);
    }
  }, "Cancel"), actions.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        text = _ref3[0],
        func = _ref3[1];

    return React.createElement(Button, {
      key: text,
      className: "button button--link",
      onClick: func
    }, text);
  })))));
  return React.createElement(Fragment, null, !offModal && renderModal);
};

Modal.propTypes = {
  simple: PropTypes.bool,
  alert: PropTypes.bool,
  title: PropTypes.string,
  actions: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Modal.defaultProps = {
  simple: false,
  alert: false,
  title: '',
  actions: [],
  children: 'No content'
};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      position = _ref.position,
      text = _ref.text;
  return React.createElement("div", {
    className: "tooltip-here"
  }, children, React.createElement("span", {
    className: "tooltip tooltip--".concat(position)
  }, text));
};

Tooltip.propTypes = {
  position: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Tooltip.defaultProps = {
  position: 'top',
  text: 'No content',
  children: 'No content'
};

var Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children;
  return React.createElement("ul", {
    className: "breadcrumb"
  }, children.length ? children.map(function (child) {
    return React.createElement("li", {
      key: Math.random(),
      className: "breadcrumb__item"
    }, child);
  }) : React.createElement("li", {
    className: "breadcrumb__item"
  }, children));
};

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Breadcrumb.defaultProps = {
  children: 'Missing breadcrumb content'
};

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid_1(b);
}

var v1_1 = v1;

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      children = _ref.children;

  var _useState = useState('close'),
      _useState2 = _slicedToArray(_useState, 2),
      toggled = _useState2[0],
      setToggled = _useState2[1];

  var toggleMenu = function toggleMenu() {
    var menuStatus = toggled === 'close' ? 'open' : 'close';
    setToggled(menuStatus);
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "more-menu__wrapper"
  }, React.createElement("button", {
    onClick: toggleMenu,
    type: "button",
    className: "icon-button toggle"
  }, label, React.createElement("i", {
    className: "material-icons"
  }, "more_vert")), React.createElement("div", {
    className: "more-menu ".concat(toggled)
  }, React.createElement("ul", {
    className: "more-menu__list"
  }, children.map(function (child) {
    return React.createElement("li", {
      key: v1_1(),
      className: "more-menu__list-item"
    }, child);
  })))));
};

Dropdown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Dropdown.defaultProps = {
  label: 'Menu',
  children: []
};

var SocialFollow = function SocialFollow(_ref) {
  var media = _ref.media,
      title = _ref.title,
      vertical = _ref.vertical,
      type = _ref.type;
  var socialConf = {
    facebook: {
      name: 'Facebook',
      "class": 'facebook',
      icon: 'fab fa-facebook-f'
    },
    twitter: {
      name: 'Twitter',
      "class": 'twitter',
      icon: 'fab fa-twitter'
    },
    pinterest: {
      name: 'Pinterest',
      "class": 'pinterest',
      icon: 'fab fa-pinterest-p'
    },
    linkedIn: {
      name: 'Linkedin',
      "class": 'linkedin',
      icon: 'fab fa-linkedin-in'
    },
    youtube: {
      name: 'Youtube',
      "class": 'youtube',
      icon: 'fab fa-youtube',
      isFollowing: true
    },
    instagram: {
      name: 'Instagram',
      "class": 'instagram',
      icon: 'fab fa-instagram',
      isFollowing: true
    }
  };
  var renderSocial = Object.keys(media).map(function (key) {
    if (type !== 'follow' && socialConf[key].isFollowing) return null;
    return React.createElement("li", {
      key: key,
      className: "social__list-item social__list-item--".concat(type)
    }, React.createElement("a", {
      href: media[key],
      rel: "noopener noreferrer",
      target: "_blank",
      className: socialConf[key]["class"]
    }, React.createElement("i", {
      className: socialConf[key].icon
    }), React.createElement("span", {
      className: "hidden"
    }, socialConf[key].name)));
  });
  return React.createElement("div", {
    className: "social social--".concat(type, " ").concat(vertical ? 'social--vertical' : '')
  }, title && React.createElement("p", null, title), React.createElement("ul", {
    className: "social__list social__list--".concat(type, " ").concat(vertical ? 'social__list--vertical' : '')
  }, renderSocial));
};

SocialFollow.propTypes = {
  media: PropTypes.object.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  vertical: PropTypes.bool
};
SocialFollow.defaultProps = {
  type: 'share',
  title: '',
  vertical: false
};

var VideoContainer = function VideoContainer(_ref) {
  var src = _ref.src,
      title = _ref.title,
      attrs = _objectWithoutProperties(_ref, ["src", "title"]);

  return React.createElement("div", {
    className: "media-container media-container--video"
  }, React.createElement("iframe", _extends({
    src: src,
    title: title
  }, attrs)));
};

VideoContainer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
};
VideoContainer.defaultProps = {
  src: '',
  title: ''
};

var Avatar = function Avatar(_ref) {
  var modifier = _ref.modifier,
      url = _ref.url,
      username = _ref.username,
      attr = _objectWithoutProperties(_ref, ["modifier", "url", "username"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      avatarUrl = _useState4[0],
      setAvatar = _useState4[1];

  var _modifier = modifier ? "avatar--".concat(modifier) : '';

  var ref = useRef(null);
  useEffect(function () {
    return setSize(ref.current.clientHeight / 2);
  });
  var initials = username && username.split(' ').map(function (subName) {
    return subName[0].toUpperCase();
  }).join('').substring(0, 2);
  var imageData = new Image();
  imageData.src = url;

  imageData.onload = function () {
    return setAvatar(url);
  };

  return React.createElement(Fragment, null, React.createElement("div", {
    className: "avatar ".concat(_modifier),
    ref: ref
  }, avatarUrl && React.createElement("img", _extends({
    src: avatarUrl,
    alt: "avatar",
    className: "avatar__icon"
  }, attr)), React.createElement("div", {
    className: "avatar__image"
  }, avatarUrl && React.createElement("img", _extends({
    src: avatarUrl,
    alt: "alt text here"
  }, attr))), !avatarUrl && React.createElement("span", {
    style: {
      fontSize: "".concat(size, "px")
    }
  }, initials)));
};

Avatar.propTypes = {
  modifier: PropTypes.string,
  url: PropTypes.string,
  username: PropTypes.string
};
Avatar.defaultProps = {
  modifier: '',
  url: '',
  username: '!'
};

export { Alert, Avatar, Badge, Breadcrumb, Button, Checkboxes as CheckBoxes, Dropdown, Input, Modal, Progress, RadioButton, Select, SocialFollow, index as TabComponent, Textarea, Tooltip, VideoContainer };
//# sourceMappingURL=blaze-components.es.js.map
