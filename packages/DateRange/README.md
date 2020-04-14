## Description

DateRange component allows you to select a data range among several options.

## Usage

```js
<DateRange onChange={({ startDate, endDate }) => {}} selected="custom" />
```

## API

##### DateRange can receive a number of `props` as follow:

| NAME     |       TYPE       |           DEFAULT            |
| :------- | :--------------: | :--------------------------: |
| selected | String or Number |            'any'             |
| onChange |     Function     | ({startDate, endDate}) => {} |
