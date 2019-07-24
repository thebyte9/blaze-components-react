## Description

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Usage

- Simple

```js
<Button>Button</Button>
```

- With modifiers

```js
<Button
  modifiers={[
    Button.availableModifiers.outline,
    Button.availableModifiers.dark
  ]}
>
  Rounded/Outline
</Button>
```

- Type submit

```js
<Button type="submit">Send</Button>
```

## API

##### Buttons can receive a number of `props` as follow:

| NAME      |         TYPE          | DEFAULT | OPTIONS                                                                                  |
| :-------- | :-------------------: | :-----: | ---------------------------------------------------------------------------------------- |
| modifiers |        String         |  empty  | rounded, outline, alert, cta, light, dark, disabled, icon, small, full-width, back, link |
| type      |        String         | button  | button, submit, reset                                                                    |
| disabled  |        Boolean        |  false  |
| children  | single/array of nodes |  null   |
