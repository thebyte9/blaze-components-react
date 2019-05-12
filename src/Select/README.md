
## Description

The select component represents an input that provides a menu of options.

## Usage

* Array of options

```js
const options = ['London', 'Paris', 'Munich'];

<Select
    label="Select a city"
    options={options}
    onChange={() => {}}
    required
    />
```

* Multidimensional Array of options

```js
const options = [['08001', 'Barcelona'], ['17006', 'Madrid']];

<Select
    label="Select label"
    selected="08001"
    options={options}
    onChange={() => {}}
    />
```

* Array of objects

```js
const arrayOfObjects = [
  {
    id: 1,
    username: 'Oscar',
    age: 26
  },
  {
    id: 2,
    username: 'Ismael',
    age: 23
  }
];

<Select
    label="Select user"
    selected="1"
    options={options}
    keys={['id', 'username']}
    onChange={() => {}}
    />
```

* By default is disabled if none options

```js

<Select
    label="Disabled"
    onChange={() => {}}
    options={[]}
    />

```

## API

##### Select can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| label | String | '' | Does the select input have a label? |
| required | Boolean | false | Is this a mandatory field for the form? |
| options | Array | [] | A string/array of options |
| selected | String | '' | The currently selected option |
| keys | Array | [] | A set of values and text of each option |
| onChange | Function | () => {} | returns callback with **event** and **selected** |

