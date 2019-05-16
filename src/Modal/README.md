
## Description

A modal dialog is a dialog that appears at the top of the main content. 
Use a modal for dialog boxes, forms, confirmation messages or other content that can be accessed.

## Usage

* Simple 

```js
const actions = [
    ['Action 1', () => {}],
    ['Action 2', () => {}]
];

<Modal
  isActive
  buttonText="Simple modal"
  title="Simple Modal"
  actions={actions}
  simple>
  <p>lorem ipsum dolor...</p>
</Modal>
```

* Alert 

```js
<Modal
  actions={[['delete', () => {}, 'alert small']]}
  buttonText="Alert modal"
  buttonModifiers="rounded alert"
  alert>
  <p>Delete item?</p>
</Modal>
```

* Scrollable 

```js
<Modal
    title="Scrollable Modal"
    buttonText="Scrollable modal"
    buttonModifiers="outline dark rounded"
    actions={actions}
    >
    <p>
    Content here that may need to be scrolled,
    can be text/forms/etc.
    Default modal with scrollable content:
    </p>
    <ol>
      <li>Lorem</li>
      <li>Ipsum</li>
      <li>Dolor</li>
    </ol>
    ...etc
</Modal>
```

## API

##### Modal can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| title | String | empty | 
| toggleButton | String | empty | 
| actions | Array | [] |
| alert | Boolean | false | 
| isActive | Boolean | false  | 



