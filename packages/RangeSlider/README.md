
## Description

Range slider allows the input of numeric values within a specific range. It can accept a single value, or a range of values (min/max).

## Usage

- With one moveable hander
```js
<RangeSlider
    name="oneValue"
    maxValue={20}
    minValue={0}
    onChange={() => { }}
    value={15} />
```

- With one moveable handler and custom step value
```js
<RangeSlider
    name="step"
    maxValue={20}
    minValue={0}
    onChange={() => { }}
    step={5}
    value={15} />
```

- With two moveable handlers
```js
<RangeSlider
    name="twoValue"
    maxValue={20}
    minValue={0}
    onChange={() => { }}
    value={{ min: 3, max: 7 }} />
```

- With two moveable handlers and draggable track

```js
<RangeSlider
    draggableTrack
    name="draggableTrack"
    maxValue={20}
    minValue={0}
    onChange={() => { }}
    value={{ min: 3, max: 7 }} />
```

## API

##### RangeSlider can receive a number of `props` as follow:


| NAME            | TYPE          | DEFAULT   | 
| :---            | :---:         | :---:     |
| allowSameValues | Boolean       |   false   | 
| disabled        | Boolean       |   false   | 
| draggableTrack  | Boolean       |   false   |  
| maxValue        | Number        |    10     |  
| minValue        | Number        |     0     |  
| name            | String        |     ''    |  
| onChange        | Function      | () => {}  |  
| step            | Number        |     1     |  
| value           | Number/Object |     0     |  
