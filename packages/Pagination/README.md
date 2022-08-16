## Description

The Pagination component enables the user to select a specific page from a range of pages.

## Usage

- Required

```js
<Pagination
    totalPages={100}
    currentPage={1}
    paginationPagesPerSide={5}
    handleOnPageChange={({ currentPage, rowsPerPage }) => {
    // ...
    }}
  />
```

## API

##### Pagination can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| totalPages | Number | 100 | 
| handleOnPageChange | Function | (obj) => {}  | 
| activePage | Number | 1  | 
| paginationPagesPerSide | Number | 5 |
| defaultRowsPerPage | Number | 10 |