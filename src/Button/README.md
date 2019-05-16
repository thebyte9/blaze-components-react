
## Description

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Usage

* Simple

```js
<Button>Button</Button>
```

* With modifier

```js
<Button modifiers="plain">Plain</Button>

<Button modifiers="small">Small</Button>
```

* Combining modifiers

```js
<Button modifiers="outline rounded">
  Rounded/Outline
</Button>
```

* Disabled

```js
<Button disabled>Alert</Button>
```

* Type submit

```js
<Button submit>Send</Button>
```

## API

##### Buttons can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | OPTIONS |
| :---  | :---:  | :---: | ------- |
| modifiers | String | empty | rounded, outline, alert, cta, light, dark, disabled, icon, small, full-width, back, link |
| submit | Boolean | false | 
| disabled | Boolean | false | 
| children | single/array of nodes | null | 
