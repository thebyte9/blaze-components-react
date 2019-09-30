## Description

React chips are small blocks of information. They are most commonly used for contacts, tags, selecting an option, filtering content, etc.

## Usage

```js
<Chips
  modifiers={[
    Chips.availableModifiers.parent.deletable,
    Chips.availableModifiers.parent.small
  ]}
>
  <Chips.Avatar>
    <Avatar username="Lorem Ipsum" modifier="x-small" />
  </Chips.Avatar>
  <Chips.Label>Primary deletable chip</Chips.Label>
  <Chips.Icon modifier={Chips.availableModifiers.icon.delete}>
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
