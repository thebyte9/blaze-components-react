## Description

The select component represents an input that provides a menu of options.

## Usage

- Array of options

```js
const options = ["London", "Paris", "Munich"];

<Select
  label="Select a city"
  options={options}
  onChange={({ event, value }) => {}}
  required
/>;
```

- Multidimensional Array of options

```js
const options = [["08001", "Barcelona"], ["17006", "Madrid"]];

<Select
  label="Select label"
  selected="08001"
  options={options}
  onChange={({ event, value }) => {}}
/>;
```

- Array of objects

```js
const arrayOfObjects = [
  {
    id: 1,
    username: "Oscar",
    age: 26
  },
  {
    id: 2,
    username: "Ismael",
    age: 23
  }
];

<Select
  label="Select user"
  selected="1"
  options={options}
  keys={["id", "username"]}
  onChange={({ event, value }) => {}}
/>;
```

- Disabling some options

```js
const disabled = ["17006"]


<Select label="Disabled option" onChange={({ event, value }) => {}} options={options} disabled={disabled} />
```

- By default is disabled if none options

```js
<Select label="Disabled" onChange={({ event, value }) => {}} options={[]} />
```

## API

##### Select can receive a number of `props` as follow:

| NAME     |   TYPE   | DEFAULT  |
| :------- | :------: | :------: |
| label    |  String  |    ''    |
| required | Boolean  |  false   |
| options  |  Array   |    []    |
| selected |  String  |    ''    |
| keys     |  Array   |    []    |
| onChange | Function | () => {} |
| disabled |  Array   |    []    |
