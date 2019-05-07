
## Description

The HTML table element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

## Usage

* With Checkboxes

```js
const data =  {
  identification: 'id',
  columns: ['name', 'age'], // Columns to show
  rows: [{
    id: 1,
    name: 'Oscar Leon',
    age: 26,
  }, {
    id: 2,
    name: 'Ismael Haytam',
    age: 23,
  }, {
    id: 3,
    name: 'Lorem Ipsum',
    age: 45
  }]
}

// onSelect returns Array of selected ids

<Table 
  checkboxes 
  data={data} 
  onSelect={(selected) => {}} />
```

* Static table

```js
<Table data={data} />
```

## API

##### Checkboxes can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| data | Object | {}      | An object containing table data |
| onSelect | Function | () => {}  | Callback function after selecting |
| checkboxes | Boolean | false      | true/false |


