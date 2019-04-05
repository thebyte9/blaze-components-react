import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

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
      isSubmit = _ref.isSubmit,
      children = _ref.children,
      attrs = _objectWithoutProperties(_ref, ["disabled", "isSubmit", "children"]);

  var type = isSubmit ? 'submit' : 'button';
  return React.createElement("button", _extends({
    disabled: disabled,
    type: type
  }, attrs), children);
};

Button.propTypes = {
  disabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Button.defaultProps = {
  children: null,
  disabled: false,
  isSubmit: false
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
    var e = _ref2.e,
        item = _ref2.item;
    if (item.disabled) return;
    setSelected(item);
    onChange({
      e: e,
      selected: item
    });
  };

  return React.createElement(Fragment, null, options.map(function (item) {
    var value = item.value,
        disabled = item.disabled,
        label = item.label;
    return React.createElement("span", {
      key: label,
      className: "form-field form-field--radio",
      onClick: function onClick(e) {
        return handleSelect({
          e: e,
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
      checked: value === selected.value
    }, attrs)), React.createElement("label", {
      htmlFor: attrs.id
    }, label));
  }));
};

RadioButton.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  required: PropTypes.bool
};
RadioButton.defaultProps = {
  options: [],
  required: false,
  onChange: function onChange() {}
};

var Checkboxes = function Checkboxes(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      attrs = _objectWithoutProperties(_ref, ["onChange", "options"]);

  var _useState = useState(options),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var toggle = function toggle(_ref2) {
    var e = _ref2.e,
        item = _ref2.item,
        key = _ref2.key;
    if (item.disabled) return;
    data[key].checked = !item.checked;
    setData(_toConsumableArray(data));
    var checked = data.filter(function (option) {
      return option.checked;
    });
    onChange({
      e: e,
      checked: checked
    });
  };

  return React.createElement(Fragment, null, data.map(function (item, key) {
    var value = item.value,
        disabled = item.disabled,
        checked = item.checked,
        required = item.required,
        label = item.label;
    return React.createElement("span", {
      key: label,
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
      checked: checked || false,
      required: required
    }, attrs)), React.createElement("label", {
      htmlFor: attrs.id,
      className: required ? 'required' : ''
    }, label));
  }));
};

Checkboxes.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func
};
Checkboxes.defaultProps = {
  options: [],
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

  var handleChange = function handleChange(e) {
    setSelectedOption(e.target.value);
    onChange({
      e: e,
      selected: e.target.value
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
  required: PropTypes.bool,
  options: PropTypes.array,
  selected: PropTypes.any,
  keys: PropTypes.array,
  onChange: PropTypes.func
};
Select.defaultProps = {
  label: '',
  options: [],
  required: false,
  selected: null,
  keys: [],
  onChange: function onChange() {}
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

  var handleChange = function handleChange(e) {
    var _content = e.target.value;
    if (limit && _content.length > limit) _content = _content.slice(0, limit);
    setContent(_content);
    onChange({
      e: e,
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
      attrs = _objectWithoutProperties(_ref, ["label", "disabled", "value", "onChange", "required", "type"]);

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

  var handleChange = function handleChange(e) {
    setNewValue(e.target.value);
    onChange({
      e: e,
      value: e.target.value
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
  }, attrs)), type === 'password' && React.createElement("span", {
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
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func
};
Input.defaultProps = {
  label: '',
  value: '',
  disabled: false,
  required: false,
  type: 'text',
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
  close: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Alert.defaultProps = {
  close: false,
  icon: '',
  type: '',
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
  round: PropTypes.bool,
  link: PropTypes.bool,
  pill: PropTypes.bool,
  icon: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Badge.defaultProps = {
  type: '',
  round: false,
  pill: false,
  link: false,
  icon: false,
  to: '#',
  children: 'No content'
};

var TabItem = function TabItem(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "tabs__content"
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
        title = _ref4$props.title,
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
var Tab$1 = {
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
  children: 'No content'
};

export { Alert, Badge, Breadcrumb, Button, Checkboxes as CheckBoxes, Input, Modal, Progress, RadioButton, Select, Tab$1 as TabComponent, Textarea, Tooltip };
//# sourceMappingURL=blaze-components.es.js.map
