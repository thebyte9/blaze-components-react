## Description

Autocomplete component allows users to quickly find and select one from suggested options.

## Usage

```js
const data = {
  keyValue: "name",
  filterBy: ["name", "description"],
  data: [
    {
      id: 1,
      name: "Laravel",
      description: "Lorem ipsum dolor."
    },
    {
      id: 2,
      name: "React",
      description: "Aliquam tincidunt."
    },
    {
      id: 3,
      name: "Adonis",
      description: "Vestibulum auctor."
    }
  ]
};

<Multiselect data={data} selected={selected => {}} />;
```

## API

##### Autocomplete can receive a number of `props` as follow:

| NAME        |         TYPE          | DEFAULT  |
| :---------- | :-------------------: | :------: |
| data        |        Object         |    {}    |
| placeholder |        String         | 'Search' |
| selected    |       Function        | () => {} |
| children    | single/array of nodes |  empty   |
