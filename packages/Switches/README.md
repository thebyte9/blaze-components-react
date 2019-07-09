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

<Switches options={multiple} onChange={({ event, checked }) => {}} />;
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
  onChange={({ event, checked }) => {}}
```

## API

##### Switches can receive a number of `props` as follow:

| NAME          |      TYPE       | DEFAULT  | OPTIONS                                                           |
| :------------ | :-------------: | :------: | ----------------------------------------------------------------- |
| modifier      |     String      |  empty   | primary, secondary, default, unchecked disabled, checked disabled |
| labelPosition |     String      |  right   | right, left, top, base                                            |
| options       | Array or Object |    []    |
| disabled      |     Boolean     |  false   |
| required      |     Boolean     |  false   |
| returnBoolean |     Boolean     |  false   |
| onChange      |    Function     | () => {} |
