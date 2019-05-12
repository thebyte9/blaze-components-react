
## Description

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts may have a type, be dismissable, include a close button, and contain any sort of children components.

## Usage

* Simple

```js
<Alert>This is a simple alert.</Alert>
```

* With modifier

```js
<Alert type="info">This is a info alert.</Alert>
```
* With icon

```js
<Alert icon="error" 
  type="warning">
  Warning alert with icon
</Alert>
```

* Dismissable

```js
<Alert close 
  type="success">
  This is a success alert that is closable.
</Alert>
```

* With extra content

```js
<Alert type="primary">
  <p>Primary alert with content.</p>
  <ol>
    <li>lorem</li>
    <li>ipsum</li>
  </ol>
</Alert>
```

## API

##### Alert can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | OPTIONS |
| :---  | :---:  | :---: | ------- |
| type | string | empty      | primary, secondary, success, warning, dark, info, light|
| icon | string | empty      | Material icons |
| close | Boolean | false      | 
| children | single/array of nodes | 'No content' |
