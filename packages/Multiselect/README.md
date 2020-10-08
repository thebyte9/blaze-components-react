## Description

MultiSelect is a component that allows you to select multiple items with check boxes.
It is useful for labeling, contact lists, country selectors, etc.

## Usage

```js
const data = {
  identification: "id",
  keyValue: "name",
  filterBy: ["name", "description"],
  data: [
    {
      show: true,
      checked: true,
      id: 1,
      name: "Blaze",
      description: "Lorem ipsum dolor."
    },
    {
      show: true,
      checked: false,
      id: 2,
      name: "KP",
      description: "Aliquam tincidunt."
    },
    {
      show: true,
      checked: true,
      id: 3,
      name: "Pulser",
      description: "Vestibulum auctor."
    }
  ]
};

<Multiselect data={data} />;
```

### onItemsRendered

When the select options are scrolled if the onItemsRendered prop and isDynamic is false is set then this component will call it passing in the current start and stop indexes of the option items on display e.g.
```js
const onItemsRendered = ({ startIndex: 0, stopIndex: 20 }) => ...;
```

## API

##### Multiselect can receive a number of `props` as follow:

| NAME              |         TYPE          | DEFAULT  |
| :---------------: | :-------------------: | :------: |
| data              |        Object         |    {}    |
| limit             |        Number         |    0     |
| placeholder       |        String         | 'Search' |
| toggleButton      |        String         |  empty   |
| selected          |       Function        | () => {} |
| getSelected       |       Function        | () => {} |
| onItemsRendered   |       Function        | () => {} |
| isDynamic         |       Boolean         |  true    |
| children          | single/array of nodes |  empty   |
