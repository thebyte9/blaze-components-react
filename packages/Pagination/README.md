## Description

The Pagination component enables the user to select a specific page from a range of pages.

## Usage

- Required

```js
<Input
  label="Text input required"
  placeholder="Placeholder text"
  onChange={({ event, value }) => {}}
  modifier="full-width"
  validationMessage="Email address is required"
  error
  required
/>
```

- Disabled

```js
<Input
  label="Text input disabled"
  placeholder="Placeholder text"
  onChange={({ event, value }) => {}}
  type="password"
  hideTypeToggle
  disabled
/>
```

- Password toggle type

```js
<Input
  label="Password - show hide"
  placeholder="******"
  onChange={({ event, value }) => {}}
  type="password"
  value="Lorem ipsum"
/>
```

## API

##### Pagination can receive a number of `props` as follow:

| NAME              |   TYPE   |        DEFAULT         |
| :---------------- | :------: | :--------------------: |
| label             |  String  |         empty          |
| type              |  String  |          text          |
| value             |  String  |         empty          |
| validationMessage |  String  | This field is required |
| disabled          | Boolean  |         false          |
| required          | Boolean  |         false          |
| hideTypeToggle    | Boolean  |         false          |
| error             | Boolean  |         false          |
| onChange          | Function |        () => {}        |
