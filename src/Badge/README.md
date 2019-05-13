
## Description

Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.

## Usage

* Simple

```js
<Badge type="primary">Badge</Badge>
```

* Pill

```js
<Badge type="success" pill>Badge</Badge>
```

* Link

```js
<Badge 
    type="info" 
    link 
    to="https://www.thebyte9.com/">
    Go to byte9
</Badge>
```

* Rounded

```js
<Badge type="alert" round>10</Badge>
```

## API

##### Badges can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Options |
| :---  | :---:  | :---: | ------- |
| type | String | empty | primary, secondary, success, warning, dark, info, light, cta |
| to | String | # |
| round | Boolean | false | 
| link | Boolean | false | 
| pill | Boolean | false | 
| icon | Boolean | false | 
| children | Single or array of nodes | No content | 

