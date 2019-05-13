
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

<Checkboxes 
  options={single} 
  boolean
  onChange={({ event, checked }) => {}}
```

## API

##### Checkboxes can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| options | Array | []      | 
| disabled | Boolean | false | 
| required | Boolean | false | 
| boolean | Boolean | false  | 
| onChange | Function | () => {} | 


