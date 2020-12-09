## Description

Datepicker tools that wraps [react-datepicker](https://www.npmjs.com/package/react-datepicker).


## Note about importing

This component requires its consumers to manually import the third-party library's CSS

```typescript
import "react-datepicker/dist/react-datepicker.css";
```


## Usage

- Required

```js
<DateTimeInput
  label="Date Time input required"
  onChange={({ event, value }) => {}}
  type="dateTime"
  modifier="full-width"
  validationMessage="Date Time is required"
  error
  required
/>
```

- Disabled

```js
<DateTimeInput
  label="Date Time input disabled"
  onChange={({ event, value }) => {}}
  type="dateTime"
  modifier="full-width"
  validationMessage="Date Time is disabled"
  error
  disabled
/>
```

- Pick only date

```js
<DateTimeInput
  label="Date input"
  onChange={({ event, value }) => {}}
  type="date"
  modifier="full-width"
/>
```

- Pick only time

```js
<DateTimeInput
  label="Date input"
  onChange={({ event, value }) => {}}
  type="time"
  modifier="full-width"
/>
```

## API

##### DateTimeInput can receive a number of `props` as follow:

| NAME              |   TYPE                        |   DEFAULT              |
| :---------------- | :---------------------------: | :--------------------: |
| label             |            String             |       empty            |
| type              | ['dateTime', 'date', 'time']  |      dateTime          |
| value             |            String             |         empty          |
| validationMessage |            String             | This field is required |
| disabled          |           Boolean             |         false          |
| required          |           Boolean             |         false          |
| error             |           Boolean             |         false          |
| onChange          |           Function            |        () => {}        |
