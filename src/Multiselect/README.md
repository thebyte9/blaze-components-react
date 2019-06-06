
## Description

MultiSelect is a component that allows you to select multiple items with check boxes. 
It is useful for labeling, contact lists, country selectors, etc.

## Usage

```js
const data = {
  keyValue: 'name',
  filterBy: ['name', 'description'],
  data: [
    {
        id: 1,
        name: 'Blaze',
        description: 'Lorem ipsum dolor.'
    },
    {
        id: 2,
        name: 'KP',
        description: 'Aliquam tincidunt.'
    },
    {
        id: 3,
        name: 'Pulser',
        description: 'Vestibulum auctor.'
    }
  ]
};

<Multiselect data={data} selected={(result) => {}}/>
```

## API

##### Multiselect can receive a number of `props` as follow:
clea
| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| data | Object | {} |
| placeholder | String | 'Search' |
| toggleButton | String | empty | 
| selected | Function | () => {} | 
| children | single/array of nodes | empty | 





