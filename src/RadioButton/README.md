
## Description

Radio button allows user to choose only one of the pre-defined options. Each radio button must be accompanied by a label describing the choice it represent.

## Usage


```js
const options = [
  { 
    label: 'A', 
    value: 1, 
    id: 'one' 
  },
  {
    label: 'B', 
    value: 2, 
    required: true, 
    id: 'two'
  },
  {
    label: 'C', 
    value: 3, 
    id: 'three'
  },
  {
    label: 'Disabled', 
    value: '', 
    disabled: true, 
    id: 'four'
  }
];

<RadioButton 
    required
    options={options} 
    onChange={({event, selected}) => {}} />
```

## API

##### RadioButton can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| options | Array | [] | Array of objects |
| required | Boolean | false | Is a selection required? |
| onChange | Function | () => {} | returns callback with event and selecte option |

