
## Description

Tabs organize a static or dynamic content across different screens.

## Usage

```js
<Tab selected={1}>
    <TabItem title="Basic">Basic content here</TabItem>
    <TabItem title="Advanced" action={() => {}}>
        {dynamicData}
    </TabItem>
    <TabItem title="Other">Other content here</TabItem>
</Tab>
```

## API

##### Tab can receive a number of `props` as follow:

| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| label | String | 'Unnamed tab' | Tab name |
| selected | Number | 0 | Selected Tab |
| action | Function | () => {} | Function to execute to load dynamic content |
| children | Single or array of nodes | No content | Any children components within the badge |

