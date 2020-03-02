## Description

Set a number within a range with a slider.

## Usage

- With two moveable handlers and custom step value

```js
const value = {
  max: 20,
  min: 0,
  step: 1,
  minValue: 5,
  maxValue: 10
}

<RangeFilter
  label="Choose a range"
  value={value}
  onChange={({ event, value }) => {}}
/>;
```

## API

##### RangeFilter can receive a number of `props` as follow:

| NAME              |   TYPE   |               DEFAULT                |
| :---------------- | :------: | :----------------------------------: |
| label             |  String  |                empty                 |
| name              |  String  |               required               |
| value             |  object  | {min, max, step, minValue, maxValue} |
| validationMessage |  String  |        This field is required        |
| required          | Boolean  |                false                 |
| error             | Boolean  |                false                 |
| onChange          | Function |               () => {}               |
