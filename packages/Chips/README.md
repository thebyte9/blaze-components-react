## Description

Accordion component is a list of headers that hide or reveal additional content when selected.

## Usage

```js
<Chips modifiers={["deletable", "outlined", "secondary", "small", "primary"]}>
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

##### Accordion menu can receive a number of `props` as follow:

| NAME     |         TYPE          | DEFAULT |
| :------- | :-------------------: | :-----: |
| isOpen   |        Boolean        |  false  |
| children | single/array of nodes |  empty  |
