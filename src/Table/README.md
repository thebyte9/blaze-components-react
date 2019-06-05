
## Description

The HTML table element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

## Usage

* With Checkboxes

```js
const data =  {
  identification: 'id',
  columns: ['name', 'age'], 
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

##### Table can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| placeholder | string| No records available | 
| data | Object | {}      | 
| onSelect | Function | () => {}  | 
| checkboxes | Boolean | false | 


