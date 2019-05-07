
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
<Badge type="info" link to="https://www.thebyte9.com/">Link to byte9</Badge>
```

* Rounded

```js
<Badge type="alert" round>10</Badge>
```

## API

##### Badges can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| round | Boolean | false | Is the badge round? |
| link | Boolean | false | is the badge a link? |
| pill | Boolean | false | Is is styled as a pill? |
| icon | Boolean | false | Does the badge contain an icon? |
| type | String | '' | primary, secondary, success, warning, dark, info, light, cta |
| to | String | '' | If badge is a link, where to link to |
| children | Single or array of nodes | No content | Any children components within the badge |

