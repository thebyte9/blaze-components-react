'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var crypto = _interopDefault(require('crypto'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

  return React__default.createElement("button", _extends({
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

  var _useState = React.useState({}),
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

  return React__default.createElement(React.Fragment, null, required && React__default.createElement("span", {
    className: "required"
  }), options.map(function (item) {
    var value = item.value,
        disabled = item.disabled,
        label = item.label,
        id = item.id;
    return React__default.createElement("div", {
      key: label,
      className: "form-field form-field--radio",
      onClick: function onClick(event) {
        return handleSelect({
          event: event,
          item: item
        });
      },
      role: "button"
    }, React__default.createElement("input", _extends({
      readOnly: true,
      type: "radio",
      className: "form-radio",
      value: value,
      disabled: disabled,
      checked: value === selected.value,
      id: id
    }, attrs)), React__default.createElement("label", {
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

var Checkboxes = function Checkboxes(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      withEffect = _ref.withEffect,
      _boolean = _ref["boolean"],
      attrs = _objectWithoutProperties(_ref, ["onChange", "options", "withEffect", "boolean"]);

  var _useState = React.useState(Array.isArray(options) ? options : [options]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  React.useEffect(function () {
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
      checked: checked,
      data: data
    });
  };

  return React__default.createElement(React.Fragment, null, data.map(function (item, key) {
    var _item$checked = item.checked,
        checked = _item$checked === void 0 ? false : _item$checked,
        value = item.value,
        disabled = item.disabled,
        required = item.required,
        label = item.label,
        _item$show = item.show,
        show = _item$show === void 0 ? true : _item$show,
        _item$id = item.id,
        id = _item$id === void 0 ? v1_1() : _item$id;
    if (!show) return React__default.createElement(React.Fragment, {
      key: id
    });
    return React__default.createElement("div", {
      key: id,
      className: "form-field form-field--checkbox ".concat(required ? 'required' : ''),
      onClick: function onClick(event) {
        return toggle({
          event: event,
          item: item,
          key: key
        });
      },
      role: "button"
    }, React__default.createElement("input", _extends({
      readOnly: true,
      type: "checkbox",
      className: "form-checkbox",
      value: value,
      disabled: disabled,
      checked: checked,
      required: required,
      id: id
    }, attrs)), React__default.createElement("label", {
      htmlFor: id
    }, label));
  }));
};

Checkboxes.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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

  var _useState = React.useState(selected),
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
    return React__default.createElement("option", {
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

  return React__default.createElement(React.Fragment, null, label && React__default.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React__default.createElement("select", _extends({
    onChange: handleChange,
    defaultValue: selectedOption,
    disabled: !options.length
  }, attrs), React__default.createElement("option", {
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

  var _useState = React.useState(value),
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
  return React__default.createElement(React.Fragment, null, label && React__default.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React__default.createElement("textarea", _extends({
    value: content,
    rows: attrs.rows,
    cols: attrs.cols,
    onChange: handleChange,
    required: required
  }, attrs)), !!limit && React__default.createElement("span", null, total));
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
      modifier = _ref.modifier,
      attrs = _objectWithoutProperties(_ref, ["label", "disabled", "value", "onChange", "required", "type", "hideTypeToggle", "modifier"]);

  var passwordDefaultState = {
    className: 'active',
    text: 'Show',
    icon: 'visibility_off'
  };

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      newValue = _useState2[0],
      setNewValue = _useState2[1];

  var _useState3 = React.useState(type),
      _useState4 = _slicedToArray(_useState3, 2),
      newType = _useState4[0],
      setType = _useState4[1];

  var _useState5 = React.useState(passwordDefaultState),
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
  var isPassword = type === 'password';

  var setModifier = function setModifier() {
    if (modifier) return "form-field--".concat(modifier);
    if (isPassword) return 'form-field--password';
    return '';
  };

  return React__default.createElement("div", {
    className: "form-field form-field--input ".concat(setModifier())
  }, label && React__default.createElement("label", {
    htmlFor: attrs.id,
    className: isRequired
  }, label), React__default.createElement("input", _extends({
    onChange: handleChange,
    value: newValue,
    disabled: disabled,
    type: newType,
    required: required
  }, attrs)), !hideTypeToggle && isPassword && React__default.createElement("span", {
    onClick: togglepasswordClassName,
    className: "show-hide-password ".concat(passwordState.className),
    role: "button"
  }, passwordState.text, React__default.createElement("i", {
    className: "material-icons"
  }, passwordState.icon)));
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  modifier: PropTypes.string,
  disabled: PropTypes.bool,
  hideTypeToggle: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func
};
Input.defaultProps = {
  label: '',
  value: '',
  modifier: '',
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

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      offModal = _useState2[0],
      setModalOff = _useState2[1];

  var assignType = type && "alert--".concat(type);
  var isDismissable = close && 'alert--dismissable';
  var withIcon = icon && 'alert--icon';
  var renderAlert = React__default.createElement("div", _extends({
    className: "alert ".concat(assignType, " ").concat(isDismissable, " ").concat(withIcon)
  }, attrs), icon && React__default.createElement("i", {
    className: "material-icons"
  }, icon), children, close && React__default.createElement(Button, {
    onClick: function onClick() {
      return setModalOff(true);
    },
    className: "icon-button icon-button--close"
  }, React__default.createElement("i", {
    className: "material-icons"
  }, "close")));
  return React__default.createElement(React.Fragment, null, !offModal && renderAlert);
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

  var _useState = React.useState(progress),
      _useState2 = _slicedToArray(_useState, 2),
      _progress = _useState2[0],
      setProgress = _useState2[1];

  var handleClick = function handleClick(_ref2) {
    var event = _ref2.event,
        step = _ref2.step;
    setProgress(step);
    onChange({
      event: event,
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

  var modifiers = function modifiers() {
    var _modifiers = type.split(' ');

    var blockElement = 'progress-bar__list-item--';
    if (!_modifiers.length) return "".concat(blockElement).concat(type);
    return _modifiers.map(function (modifier) {
      return "".concat(blockElement).concat(modifier);
    }).join(' ');
  };

  return React__default.createElement("nav", {
    className: "progress-bar"
  }, React__default.createElement("ol", {
    className: "progress-bar__list"
  }, steps.map(function (text, index) {
    return React__default.createElement("li", {
      key: text,
      className: "progress-bar__list-item ".concat(modifiers(), " ").concat(isTypeCount, " ").concat(checkStep(index + 1))
    }, React__default.createElement("span", {
      onClick: function onClick(event) {
        return handleClick({
          event: event,
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
  return link ? React__default.createElement("a", _extends({
    href: to,
    className: classes
  }, attrs), children) : React__default.createElement("span", _extends({
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
  var action = _ref.action,
      children = _ref.children;
  action();
  return React__default.createElement("div", {
    className: "tabs__content current"
  }, children);
};
TabItem.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
TabItem.defaultProps = {
  action: function action() {},
  children: 'No content'
};
var Tab = function Tab(_ref2) {
  var selected = _ref2.selected,
      children = _ref2.children;

  var _useState = React.useState(selected),
      _useState2 = _slicedToArray(_useState, 2),
      _selected = _useState2[0],
      setSelected = _useState2[1];

  return React__default.createElement("div", {
    className: "tabs"
  }, React__default.createElement("div", {
    className: "tabs__list"
  }, children.map(function (_ref3, step) {
    var _ref3$props$title = _ref3.props.title,
        title = _ref3$props$title === void 0 ? 'Unnamed tab' : _ref3$props$title;
    return React__default.createElement(Button, {
      className: "tabs__list-item ".concat(step === _selected ? 'current' : ''),
      onClick: function onClick() {
        return setSelected(step);
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
      upload = _ref.upload,
      actions = _ref.actions,
      isActive = _ref.isActive,
      buttonText = _ref.buttonText,
      buttonModifiers = _ref.buttonModifiers;

  var _useState = React.useState(isActive),
      _useState2 = _slicedToArray(_useState, 2),
      modalStatus = _useState2[0],
      setModalStatus = _useState2[1];

  var type = function type() {
    if (simple) return '--simple';
    if (alert) return '--alert';
    if (upload) return '--upload';
    return '';
  };

  var renderModal = React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: "overlay"
  }), React__default.createElement("div", {
    className: "modal modal".concat(type(), " modal--show")
  }, React__default.createElement("div", {
    className: "modal__header modal__header".concat(type())
  }, !alert && React__default.createElement("div", {
    className: "modal__title"
  }, title), !alert && React__default.createElement("div", {
    className: "modal__close",
    role: "button",
    onClick: function onClick() {
      return setModalStatus(false);
    }
  }, React__default.createElement("i", {
    className: "material-icons"
  }, "close"))), React__default.createElement("div", {
    className: "modal__content modal__content".concat(type())
  }, children), React__default.createElement("div", {
    className: "modal__footer modal__footer".concat(type())
  }, React__default.createElement("div", {
    className: "modal__button"
  }, alert && React__default.createElement(Button, {
    modifiers: "link",
    onClick: function onClick() {
      return setModalStatus(false);
    }
  }, "Cancel"), actions.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        text = _ref3[0],
        func = _ref3[1],
        _ref3$ = _ref3[2],
        modifiers = _ref3$ === void 0 ? 'link' : _ref3$;

    return React__default.createElement(Button, {
      key: text,
      modifiers: modifiers,
      onClick: func
    }, text);
  })))));
  return React__default.createElement(React.Fragment, null, modalStatus && renderModal, buttonText && React__default.createElement(Button, {
    modifiers: buttonModifiers,
    onClick: function onClick() {
      return setModalStatus(!modalStatus);
    }
  }, buttonText));
};

Modal.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonModifiers: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string, PropTypes.func)),
  simple: PropTypes.bool,
  upload: PropTypes.bool,
  alert: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Modal.defaultProps = {
  title: '',
  buttonText: '',
  buttonModifiers: 'outline',
  actions: [],
  simple: false,
  upload: false,
  alert: false,
  isActive: false,
  children: 'No content'
};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      position = _ref.position,
      text = _ref.text;
  return React__default.createElement("div", {
    className: "tooltip-here"
  }, children, React__default.createElement("span", {
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
  return React__default.createElement("ul", {
    className: "breadcrumb"
  }, children.length ? children.map(function (child) {
    return React__default.createElement("li", {
      key: Math.random(),
      className: "breadcrumb__item"
    }, child);
  }) : React__default.createElement("li", {
    className: "breadcrumb__item"
  }, children));
};

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Breadcrumb.defaultProps = {
  children: 'Missing breadcrumb content'
};

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      children = _ref.children;

  var _useState = React.useState('close'),
      _useState2 = _slicedToArray(_useState, 2),
      toggled = _useState2[0],
      setToggled = _useState2[1];

  var toggleMenu = function toggleMenu() {
    var menuStatus = toggled === 'close' ? 'open' : 'close';
    setToggled(menuStatus);
  };

  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: "more-menu__wrapper"
  }, React__default.createElement("button", {
    onClick: toggleMenu,
    type: "button",
    className: "icon-button toggle"
  }, label, React__default.createElement("i", {
    className: "material-icons"
  }, "more_vert")), React__default.createElement("div", {
    className: "more-menu ".concat(toggled)
  }, React__default.createElement("ul", {
    className: "more-menu__list"
  }, children.map(function (child) {
    return React__default.createElement("li", {
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
    return React__default.createElement("li", {
      key: key,
      className: "social__list-item social__list-item--".concat(type)
    }, React__default.createElement("a", {
      href: media[key],
      rel: "noopener noreferrer",
      target: "_blank",
      className: socialConf[key]["class"]
    }, React__default.createElement("i", {
      className: socialConf[key].icon
    }), React__default.createElement("span", {
      className: "hidden"
    }, socialConf[key].name)));
  });
  return React__default.createElement("div", {
    className: "social social--".concat(type, " ").concat(vertical ? 'social--vertical' : '')
  }, title && React__default.createElement("p", null, title), React__default.createElement("ul", {
    className: "social__list social__list--".concat(type, " ").concat(vertical ? 'social__list--vertical' : '')
  }, renderSocial));
};

SocialFollow.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  vertical: PropTypes.bool,
  media: PropTypes.object.isRequired
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

  return React__default.createElement("div", {
    className: "media-container media-container--video"
  }, React__default.createElement("iframe", _extends({
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

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      avatarUrl = _useState2[0],
      setAvatar = _useState2[1];

  var _modifier = modifier ? "avatar--".concat(modifier) : '';

  var initials = username && username.split(' ').map(function (subName) {
    return subName[0].toUpperCase();
  }).join('').substring(0, 2);
  var imageData = new Image();
  imageData.src = url;

  imageData.onload = function () {
    return setAvatar(url);
  };

  return React__default.createElement("div", {
    className: "avatar ".concat(_modifier)
  }, avatarUrl && React__default.createElement("img", _extends({
    src: avatarUrl,
    alt: "avatar"
  }, attr)), !avatarUrl && React__default.createElement("span", null, initials));
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

var FileUpload = function FileUpload(_ref) {
  var children = _ref.children,
      handleDropProp = _ref.handleDrop,
      attr = _objectWithoutProperties(_ref, ["children", "handleDrop"]);

  var area = React.useRef(null);
  var selectFile = React.useRef(null);

  var handleDragover = function handleDragover(event) {
    event.stopPropagation();
    event.preventDefault();
  };

  var getPreview = function getPreview(files) {
    return Promise.all(files.map(function (file) {
      return new Promise(function (resolve, reject) {
        if (file.type.includes('image')) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (e) {
            return resolve({
              id: v1_1(),
              name: file.name,
              base64: e.target.result,
              type: 'image'
            });
          };

          reader.onerror = function () {
            return reject(new DOMException('Error parsing input file.'));
          };
        } else {
          resolve({
            id: v1_1(),
            name: file.name,
            type: 'file'
          });
        }
      });
    }));
  };

  var processFiles =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee(event, files) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!files || !files.length)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              getPreview(files).then(function (previewFiles) {
                return handleDropProp({
                  event: event,
                  files: files,
                  previewFiles: previewFiles
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function processFiles(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDrop = function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    var _event$dataTransfer = event.dataTransfer;
    _event$dataTransfer = _event$dataTransfer === void 0 ? {} : _event$dataTransfer;
    var files = _event$dataTransfer.files;
    files = Object.values(files);
    processFiles(event, files);
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();
    var _event$target = event.target;
    _event$target = _event$target === void 0 ? {} : _event$target;
    var files = _event$target.files;
    files = Object.values(files);
    processFiles(event, files);
  };

  React.useEffect(function () {
    var currentArea = area.current;
    currentArea.addEventListener('dragover', handleDragover);
    currentArea.addEventListener('drop', handleDrop);
  }, []);

  var handleBrowse = function handleBrowse() {
    var currentSelectFile = selectFile.current;
    currentSelectFile.click();
  };

  var handleCancel = function handleCancel(event) {
    handleDropProp({
      event: event,
      canceled: true
    });
  };

  return React__default.createElement("div", _extends({
    ref: area,
    className: "upload"
  }, attr), React__default.createElement("i", {
    className: "material-icons"
  }, "arrow_upward"), React__default.createElement("p", null, "Drag & drop file to upload"), React__default.createElement("div", {
    className: "upload__browse"
  }, React__default.createElement(Button, {
    onClick: handleBrowse
  }, "Browse"), React__default.createElement("input", {
    type: "file",
    onChange: handleChange,
    ref: selectFile,
    style: {
      display: 'none'
    }
  })), React__default.createElement("div", {
    className: "upload__text"
  }, "or"), React__default.createElement(Button, {
    onClick: handleCancel,
    modifiers: "dark outline"
  }, "Cancel"), children);
};

FileUpload.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  handleDrop: PropTypes.func
};
FileUpload.defaultProps = {
  handleDrop: function handleDrop() {},
  children: 'No content'
};

var MultiSelect = function MultiSelect(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data.data,
      keys = _ref$data.filterBy,
      keyValue = _ref$data.keyValue,
      getSelected = _ref.selected,
      placeholder = _ref.placeholder,
      children = _ref.children;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = React.useState(data),
      _useState4 = _slicedToArray(_useState3, 2),
      dataCopy = _useState4[0],
      setDataCopy = _useState4[1];

  var setStatus = function setStatus(obj, status) {
    return _extends({}, obj, {
      show: status
    });
  };

  var handleKeyUp = function handleKeyUp(event) {
    var value = event.target.value;

    var _dataCopy = dataCopy.map(function (copy) {
      var _copy = setStatus(copy, false);

      keys.forEach(function (_key) {
        var match = copy[_key].toLowerCase().includes(value.toLowerCase());

        if (match) _copy = setStatus(copy, true);
      });
      return _copy;
    });

    setDataCopy(_dataCopy);
  };

  var handleChange = function handleChange(_ref2) {
    var checked = _ref2.checked,
        _data = _ref2.data;
    setSelected(checked);
    setDataCopy(_data);
    getSelected(_data);
  };

  return React__default.createElement(React.Fragment, null, selected.map(function (_selected) {
    return React__default.createElement("div", {
      key: v1_1()
    }, _selected[keyValue]);
  }), children, React__default.createElement(Input, {
    placeholder: placeholder,
    onKeyUp: handleKeyUp
  }), React__default.createElement(Checkboxes, {
    options: dataCopy.map(function (_dataCopy) {
      return _extends({}, _dataCopy, {
        label: _dataCopy[keyValue]
      });
    }),
    onChange: handleChange,
    withEffect: true
  }));
};

MultiSelect.propTypes = {
  data: PropTypes.shape({
    keyValue: PropTypes.string,
    filterBy: PropTypes.array,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  selected: PropTypes.func,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
MultiSelect.defaultProps = {
  selected: function selected() {},
  placeholder: 'Search',
  children: ''
};

var Table = function Table(_ref) {
  var _ref$data = _ref.data,
      columns = _ref$data.columns,
      rows = _ref$data.rows,
      identification = _ref$data.identification,
      onSelect = _ref.onSelect,
      checkboxes = _ref.checkboxes,
      placeholder = _ref.placeholder;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleSelected = function handleSelected(_ref2, value) {
    var _ref3 = _slicedToArray(_ref2, 1),
        checked = _ref3[0];

    var multiselect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (multiselect) {
      if (checked) setSelected(_toConsumableArray(checked.value));else setSelected([]);
      return;
    }

    if (checked && !selected.includes(checked.value)) setSelected([].concat(_toConsumableArray(selected), [checked.value]));else setSelected(selected.filter(function (_value) {
      return _value !== value;
    }));
  };

  React.useEffect(function () {
    return onSelect(selected);
  });
  var colSpan = checkboxes ? columns.length + 1 : columns.length;
  var thead = React__default.createElement("thead", null, React__default.createElement("tr", null, checkboxes && React__default.createElement("th", null, React__default.createElement(Checkboxes, {
    withEffect: true,
    options: [_extends({}, {
      value: rows.map(function (row) {
        return row[identification];
      }),
      id: 'Select_all',
      checked: selected.length === rows.length
    })],
    onChange: function onChange(_ref4) {
      var checked = _ref4.checked;
      return handleSelected(checked, checked, true);
    }
  })), columns.map(function (column) {
    return React__default.createElement("th", {
      key: v1_1()
    }, column);
  })));
  var tbody = React__default.createElement("tbody", null, rows.map(function (row) {
    return React__default.createElement("tr", {
      key: v1_1()
    }, checkboxes && React__default.createElement("td", null, React__default.createElement(Checkboxes, {
      withEffect: true,
      options: [{
        value: row[identification],
        id: row[identification],
        checked: selected.includes(row[identification])
      }],
      onChange: function onChange(_ref5) {
        var checked = _ref5.checked;
        return handleSelected(checked, row[identification]);
      }
    })), columns.map(function (column) {
      return React__default.createElement("td", {
        key: v1_1()
      }, row[column]);
    }));
  }), !rows.length && React__default.createElement("tr", null, React__default.createElement("td", {
    colSpan: colSpan,
    align: "center"
  }, placeholder)));
  return React__default.createElement("div", {
    className: "table-scroll__wrapper"
  }, React__default.createElement("div", {
    className: "table-scroll"
  }, React__default.createElement("table", null, thead, tbody)));
};

Table.propTypes = {
  placeholder: PropTypes.string,
  checkboxes: PropTypes.bool,
  data: PropTypes.shape({
    identification: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.array
  }),
  onSelect: PropTypes.func
};
Table.defaultProps = {
  placeholder: 'No records available',
  checkboxes: false,
  data: {},
  onSelect: function onSelect() {}
};

var menuStyles = {
  width: '100%',
  top: '100%'
};

var ButtonSelect = function ButtonSelect(_ref) {
  var text = _ref.text,
      children = _ref.children,
      Attr = _objectWithoutProperties(_ref, ["text", "children"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggled = _useState2[0],
      setToggled = _useState2[1];

  return React__default.createElement("div", {
    className: "more-menu__wrapper"
  }, React__default.createElement(Button, _extends({
    onClick: function onClick() {
      return setToggled(!toggled);
    }
  }, Attr), React__default.createElement("i", {
    className: "material-icons"
  }, "keyboard_arrow_".concat(toggled ? 'up' : 'down')), text), toggled && React__default.createElement("div", {
    className: "more-menu open",
    style: menuStyles
  }, children));
};

ButtonSelect.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
ButtonSelect.defaultProps = {
  text: 'Actions',
  children: 'No content'
};

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var MoreAvatar = function MoreAvatar(_ref) {
  var children = _ref.children,
      handleToggle = _ref.handleToggle,
      label = _ref.label,
      isHeader = _ref.isHeader,
      className = _ref.className,
      isMoreMenu = _ref.isMoreMenu;
  var buttonClassName = classnames(_defineProperty({
    dropdown__button: isHeader,
    'icon-button icon-button--round': isMoreMenu
  }, className, Boolean(className)));
  return React__default.createElement(Button, {
    onClick: handleToggle,
    className: buttonClassName
  }, isHeader ? React__default.createElement(React.Fragment, null, React__default.createElement("span", {
    className: "dropdown__name"
  }, label), children) : React__default.createElement(React.Fragment, null, React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child);
  })));
};

MoreAvatar.propTypes = {
  children: PropTypes.object,
  handleToggle: PropTypes.func,
  label: PropTypes.string,
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  className: PropTypes.string
};
MoreAvatar.defaultProps = {
  children: null,
  handleToggle: function handleToggle() {},
  label: '',
  className: '',
  isHeader: false,
  isMoreMenu: false
};

var MoreContent = function MoreContent(_ref) {
  var children = _ref.children,
      toggled = _ref.toggled,
      isHeader = _ref.isHeader,
      isMoreMenu = _ref.isMoreMenu,
      isDropdown = _ref.isDropdown;
  var ulClassName = classnames({
    dropdown__submenu: isDropdown,
    'dropdown__submenu dropdown__submenu--header': isHeader,
    'dropdown__submenu--displayed dropdown__list-item--displayed': toggled && isHeader,
    'more-menu more-menu__list': isMoreMenu,
    open: toggled && isMoreMenu
  });
  var liClassName = classnames({
    'dropdown__list-item dropdown__list-item--submenu': isDropdown,
    'dropdown__list-item--header': isHeader,
    'more-menu__list-item': isMoreMenu
  });
  var childClassname = classnames({
    'dropdown__list-item-link--header': isHeader
  });
  return React__default.createElement("ul", {
    className: ulClassName
  }, React__default.Children.map(children, function (child) {
    return child && React__default.createElement("li", {
      key: child.symbol,
      className: liClassName
    }, React__default.cloneElement(child, {
      className: "".concat(child.props.className, " ").concat(childClassname)
    }));
  }));
};

MoreContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  toggled: PropTypes.bool,
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  isDropdown: PropTypes.bool
};
MoreContent.defaultProps = {
  toggled: false,
  isHeader: false,
  isMoreMenu: false,
  isDropdown: false
};

var More = function More(_ref) {
  var children = _ref.children,
      isHeader = _ref.isHeader,
      isMoreMenu = _ref.isMoreMenu;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggled = _useState2[0],
      setToggle = _useState2[1];

  var handleToggle = function handleToggle() {
    return setToggle(!toggled);
  };

  var ulClassName = classnames('dropdown', {
    'dropdown__list dropdown__list--header dropdown--header': isHeader,
    'dropdown dropdown__list': !isHeader,
    'more-menu__list': isMoreMenu
  });
  var liClassName = classnames({
    'dropdown__list-item dropdown__list-item--header': isHeader,
    'dropdown__list-item': !isHeader,
    'more-menu__list-item': isMoreMenu
  });
  return React__default.createElement("div", {
    className: "more-menu__wrapper"
  }, React__default.createElement("ul", {
    className: ulClassName
  }, React__default.createElement("li", {
    className: liClassName
  }, React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, {
      toggled: toggled,
      handleToggle: handleToggle
    });
  }))));
};

More.propTypes = {
  isHeader: PropTypes.bool,
  isMoreMenu: PropTypes.bool,
  children: PropTypes.array.isRequired
};
More.defaultProps = {
  isHeader: false,
  isMoreMenu: false
};
More.Avatar = MoreAvatar;
More.Content = MoreContent;

exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.ButtonSelect = ButtonSelect;
exports.CheckBoxes = Checkboxes;
exports.Dropdown = Dropdown;
exports.FileUpload = FileUpload;
exports.Input = Input;
exports.Modal = Modal;
exports.More = More;
exports.Multiselect = MultiSelect;
exports.Progress = Progress;
exports.RadioButton = RadioButton;
exports.Select = Select;
exports.SocialFollow = SocialFollow;
exports.TabComponent = index;
exports.Table = Table;
exports.Textarea = Textarea;
exports.Tooltip = Tooltip;
exports.VideoContainer = VideoContainer;
//# sourceMappingURL=blaze-components.js.map
