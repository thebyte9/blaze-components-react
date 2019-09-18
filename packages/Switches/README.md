## Description

Switches component is a digital on/off switch used for activating one of two predefined options.

## Usage

- Group

```js
const multiple = [
  {
    id: 1,
    label: "Switch text"
  },
  {
    id: 2,
    label: "Switch text"
  },
  {
    disabled: true,
    id: 4,
    label: "Disabled"
  }
];

<Switches
  options={multiple}
  modifier={Switches.availableModifiers.secondary}
  onChange={({ event, value }) => {}}
/>;
```

- Single

```js
const single = {
  label: "Switch text",
  required: true
};

<Switches
  options={single}
  returnBoolean
  onChange={({ event, value }) => {}}
```

## API

##### Switches can receive a number of `props` as follow:

| NAME              |      TYPE       |        DEFAULT         | OPTIONS                                                  |
| :---------------- | :-------------: | :--------------------: | -------------------------------------------------------- |
| modifier          |     String      |         empty          | primary, secondary, default, unchecked, checked disabled |
| labelPosition     |     String      |         right          | right, left, top, base                                   |
| validationMessage |     String      | This field is required |
| options           | Array or Object |           []           |
| disabled          |     Boolean     |         false          |
| required          |     Boolean     |         false          |
| returnBoolean     |     Boolean     |         false          |
| error             |     Boolean     |         false          |
| onChange          |    Function     |        () => {}        |
