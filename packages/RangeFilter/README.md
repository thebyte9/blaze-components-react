## Description

Set a number within a range with a slider.

## Usage

- Simple

```js
const value = {
  range: {
    max: 10,
    value: 0,
    ...otherValueProps
  }
};

<RangeFilter value={value} onChange={({ event, value }) => {}} />;
```

- With two moveable handlers and custom step value

```js
const value = {
  firstHandler: {
    max: 10,
    min: 0,
    step: 0,
    value: 0,
    ...otherValueProps
  },
  secondHandler: {
    max: 10,
    min: 0,
    step: 0,
    value: 0,
    ...otherValueProps
  }
};

<RangeFilter
  label="Choose a range"
  value={value}
  onChange={({ event, value }) => {}}
/>;
```

## API

##### RangeFilter can receive a number of `props` as follow:

| NAME              |   TYPE   |         DEFAULT         |
| :---------------- | :------: | :---------------------: |
| label             |  String  |          empty          |
| value             |  object  | {min, max, step, value} |
| validationMessage |  String  | This field is required  |
| required          | Boolean  |          false          |
| error             | Boolean  |          false          |
| onChange          | Function |        () => {}         |
