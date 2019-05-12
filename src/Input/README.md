
## Description

Create basic single-line text fields.

## Usage

* simple

```js
<Input
  label="Text input required"
  placeholder="Placeholder text"
  onChange={() => {}}
  required
  />
```

* Disabled

```js
<Input
  label="Text input disabled"
  placeholder="Placeholder text"
  onChange={() => {}}
  type="password"
  hideTypeToggle
  disabled
  />
```

* Password toggle type

```js
<Input
  label="Password - show hide"
  placeholder="******"
  onChange={() => {}}
  type="password"
  value="Lorem ipsum"
  />
```

## API

##### Input can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| label | String | empty | 
| type | String | text | 
| value | String | empty | 
| disabled | Boolean | false | 
| required | Boolean | false | 
| hideTypeToggle | Boolean | false |
| onChange | Function | () => {} |
