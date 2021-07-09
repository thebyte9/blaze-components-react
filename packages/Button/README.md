## Description

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Usage

- Simple

```js
<Button>Button</Button>
```

- Themed and tailwind class utilities

```js
<Button utilities={`text-bold`}>Bold</Button>
```

## API

##### Buttons can receive a number of `props` as follow:

|   NAME    |         TYPE          | DEFAULT |               OPTIONS               |
| :-------: | :-------------------: | :-----: | :---------------------------------: |
| utilities |        String         |  empty  |      tailwind class utilities       |
|   rest    |        Unknown        |  null   | event handler and custom properties |
| children  | single/array of nodes |  null   |             react node              |
