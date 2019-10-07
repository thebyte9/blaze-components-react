## Description

Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.

## Usage

- Simple

```js
<Badge type="primary">Badge</Badge>
```

- Link

```js
<Badge type="info" link>
    <a href="https://www.thebyte9.com/">Go to byte9</a>
</Badge>
```

- Icon

```js
<Badge type="pagebuilder" icon colour="deep-orange">
    Social follow            
  <i className="fas fa-share" />
</Badge>
```

## API

##### Badges can receive a number of `props` as follow:

|  NAME      |            TYPE            |   DEFAULT    |  Options                                                                                   |
| :--------- | :------------------------: | :----------: | ------------------------------------------------------------------------------------------ |
|  type      |           String           |    empty     |  default, primary, secondary, success, alert, info, light, dark, link, pagebuilder         |
|  link      |          Boolean           |    false     |
|  icon      |          Boolean           |    false     |
|  color     |           String           |    empty     |  blue, light-blue, deep-orange, orange, purple, deep-purple, pink, red, cyan, teal, green  |
|  children  |  Single or array of nodes  |  No content  |
