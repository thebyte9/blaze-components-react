
# Description

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts may have a type, be dismissable, include a close button, and contain any sort of children components.

# Usage

* Simple

```js
<Alert>This is a simple alert.</Alert>
```

* With modifier

```js
<Alert type="info">This is a info alert.</Alert>
```
* Dismissable

```js
<Alert icon="error" type="warning">Warning alert with icon</Alert>
```

* With extra content

```js
<Alert>
  <p>Simple primary alert with content here</p>
  <hr />
  <p>Lorem ipsum dolor sit amet...</p>
</Alert>
```

# API

##### Alerts can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | OPTIONS |
| :---  | :---:  | :---: | ------- |
| type | string | ''      | primary, secondary, success, warning, dark, info, light|
| close | Boolean | false      | true/false |
| icon | string | ''      | material-icons |
| children | single/array of nodes | ''      | nodes |
