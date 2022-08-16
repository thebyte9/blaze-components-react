
## Description

The progress bar, despite providing a good user experience, also helps users avoid frustration and successfully complete all the steps.

## Usage

* Progress dot indicators

```js
const steps = [
  'Cart', 'Billing', 'Delivery', 'Review & pay'
];

<Progress 
  progress={2} 
  onChange={({event, step}) => {}}
  steps={steps}/>
```

* Progress dot indicators + steps counter

```js
<Progress
   progress={3} 
   type="count" 
   onChange={({event, step}) => {}} 
   steps={steps}/>
```

* Progress text

```js
<Progress 
    progress={1} 
    type="text" 
    onChange={({event, step}) => {}}
    steps={steps}/>
```

* Progress + text + completed icon

```js
<Progress 
    progress={4} 
    type="text icon" 
    onChange={({event, step}) => {}} 
    steps={steps}/>
```

## API

##### Progress can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| steps | Array | [] | 
| progress | Number | 0 | 
| type | Text | dots  | 
| onChange | Function | () => {} |


