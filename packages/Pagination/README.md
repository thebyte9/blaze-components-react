## Description

The Pagination component enables the user to select a specific page from a range of pages.

## Usage

- Required

```js
<Pagination
  totalPages={100}
  currentPage={1}
  visiblePages={10}
  onPageChange={(page: Number) => {
    console.log(page);
  }}
/>
```

## API

##### Pagination can receive a number of `props` as follow:

| NAME         |   TYPE   |   DEFAULT    |
| :----------- | :------: | :----------: |
| totalPages   |  Number  |   required   |
| visiblePages |  Number  |      10      |
| onPageChange | Function | (page) => {} |
| currentPage  |  Number  |      1       |
| itemsPerPage |  Number  |      10      |
