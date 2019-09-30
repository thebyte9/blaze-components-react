## Description

Accordion component is a list of headers that hide or reveal additional content when selected.

## Usage

```js
<Accordion>
  <Accordion.Header>
    <p>Accordion text 1</p>
    <p>Accordion text 2</p>
  </Accordion.Header>
  <Accordion.Content>
    <Accordion.ContentDetails>
      <p>Content here. Components can be placed in here if needed</p>
      <p>Footer can be added below if needed</p>
    </Accordion.ContentDetails>
    <Accordion.ContentFooter>
      <Button name="button" modifiers="outline light rounded">
        Cancel
      </Button>
      <Button name="button" modifiers="rounded">
        Save
      </Button>
    </Accordion.ContentFooter>
  </Accordion.Content>
</Accordion>
```

## API

##### Accordion menu can receive a number of `props` as follow:

| NAME     |         TYPE          | DEFAULT |
| :------- | :-------------------: | :-----: |
| isOpen   |        Boolean        |  false  |
| children | single/array of nodes |  empty  |
