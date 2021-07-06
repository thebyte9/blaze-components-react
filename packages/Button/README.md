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

| NAME      |         TYPE          | DEFAULT | OPTIONS                                                                                         |
| :-------- | :-------------------: | :-----: | ----------------------------------------------------------------------------------------------- |
| modifiers |         Array         |  empty  | rounded, outline, alert, cta, light, dark, disabled, icon, small, full-width, plain, back, link |
| type      |        String         | button  | button, submit, reset                                                                           |
| disabled  |        Boolean        |  false  |                                                                                                 |
| children  | single/array of nodes |  null   |                                                                                                 |
| utilities | CSS utilities classes |  empty  |                                                                                                 |
