## Description

DateRange component allows you to select a date range among several options.

## custom range

```js
<DateRange onChange={({ selectedDate: { from, to } }) => {}} custom />
```

## select option

```js
<DateRange onChange={({ selectedDate }) => {}} />
```

## API

##### DateRange can receive a number of `props` as follow:

| NAME     |   TYPE   |        DEFAULT         |
| :------- | :------: | :--------------------: |
| custom   | boolean  |         false          |
| onChange | Function | ({selectedDate}) => {} |
