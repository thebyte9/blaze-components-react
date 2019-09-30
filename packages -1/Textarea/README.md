
## Description

The HTML textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## Usage

* Simple

```js
<Textarea
    label="Simple textarea"
    placeholder="Content..."
    onChange={({event, value}) => {}}
    required />
```

* Limited

```js
<Textarea
  label="Textarea with limit"
  placeholder="Content..."
  onChange={({event, value}) => {}}
  value="lorem ipsum"
  limit={40} />
```

## API

##### Textarea can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| label | String | empty | 
| value | String | empty | 
| required | Boolean | false | 
| limit | Number | 0 | 
| onChange | Function | () => {} | 

