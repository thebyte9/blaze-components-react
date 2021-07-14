## Description

Tabs organize a static or dynamic content across different screens.

## Usage

```js
<Tab selected={0}>
  <TabItem title="Basic">Basic content here</TabItem>
  <TabItem title="Advanced" action={() => {}}>
    {dynamicData}
  </TabItem>
  <TabItem title="Other">Other content here</TabItem>
</Tab>
```

## API

##### Tab can receive a number of `props` as follow:

| NAME     |   TYPE   |   DEFAULT   |
| :------- | :------: | :---------: |
| label    |  string  | Unnamed tab |
| selected |  number  |      0      |
| action   | function |  () => {}   |
| children | unknown  | No content  |
