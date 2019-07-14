## Description

React chips are small blocks of information. They are most commonly used for contacts, tags, selecting an option, filtering content, etc.

## Usage

```js
<Chips modifiers={["deletable", "small"]}>
  <Chips.Avatar>
    <i className="material-icons">face</i>
  </Chips.Avatar>
  <Chips.Label>Primary deletable chip</Chips.Label>
  <Chips.Icon modifier="delete">
    <i className="material-icons">delete</i>
  </Chips.Icon>
</Chips>
```

## API

##### Chips can receive a number of `props` as follow:

| NAME      |         TYPE          | DEFAULT  |                    OPTIONS                     |
| :-------- | :-------------------: | :------: | :--------------------------------------------: |
| modifiers |    Array of string    | primary  | deletable, outlined, secondary, small, primary |
| action    |       Function        | () => {} |
| children  | single/array of nodes |  empty   |
