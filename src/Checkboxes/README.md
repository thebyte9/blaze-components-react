
## Description

Boxes that are checked (ticked) when activated. They allow you to select single values for submission in a form (or not).

## Usage

* Multiselect

```js
const multiple = [
  { 
    label: 'First', 
    value: 1, 
    id: 'one'
  },
  {
    label: 'Second', 
    value: 2, 
    id: 'two'
  },
  {
    label: 'Third', 
    value: 3, 
    id: 'three'
  },
  {
    label: 'Disabled', 
    value: 4, 
    id: 'fourth',
    disabled: true
  }
];

// checked returns Array of checked objects or empty Array

<Checkboxes 
  options={multiple} 
  onChange={({ event, checked }) => {}} 
/>
```

* Single & required

```js
const single = [{
  label: 'Do you agree?',
  value: false,
  id: 'four',
  required: true
}];

// checked returns true or false 

<Checkboxes 
  options={single} 
  boolean
  onChange={({ event, checked }) => {}}
```

## API

##### Checkboxes can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | OPTIONS |
| :---  | :---:  | :---: | ------- |
| options | Array | []      | Array of Objects |
| onChange | Function | () => {}  | returns callback with **event** and **checked** options |
| disabled | Boolean | false      | true/false |
| required | Boolean | false      | true/false |
| boolean | Boolean | false      | true/false |


