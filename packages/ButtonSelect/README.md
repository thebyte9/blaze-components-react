## Description

The ButtonSelect component extends the button to show a list of actions.

## Usage

```js
<ButtonSelect text="Actions">
  <Button
    modifiers={[
      Button.availableModifiers.plain,
      Button.availableModifiers.fullWidth
    ]}
    style={buttonStyles}
  >
    Settings
  </Button>
  <Button
    modifiers={[
      Button.availableModifiers.plain,
      Button.availableModifiers.fullWidth
    ]}
    style={buttonStyles}
  >
    Sign out
  </Button>
  <Button
    modifiers={[
      Button.availableModifiers.plain,
      Button.availableModifiers.fullWidth
    ]}
    style={buttonStyles}
  >
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
