## Description

The ButtonSelect component extends the button to show a list of actions.

## Usage

```js
<ButtonSelect text="Actions">
  <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
    Settings
  </Button>
  <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
    Sign out
  </Button>
  <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
    Help
  </Button>
</ButtonSelect>
```

## API

##### ButtonSelect can receive a number of `props` as follow:

| NAME     |           TYPE           |  DEFAULT   |
| :------- | :----------------------: | :--------: |
| text     |          String          |  Actions   |
| children | Single or array of nodes | No content |
