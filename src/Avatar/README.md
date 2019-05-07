
## Description

Avatar is the graphical representation of the user or the user's alter ego or character.

## Usage

* Image

```js
const url = 'http://lorempixel.com/400/400/people/';

<Avatar url={url} modifier="med"/>
<Avatar url={url} username="Ismael Haytam" modifier="small"/>
```

* User Initials

``` js
<Avatar username="Blaz 2"/>
<Avatar username="Kongan Page" modifier="x-small"/>
```

## API

##### Avatar can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| url | string | '' |   Image Url |
| modifier | String | '' | To control image size: med, small, x-small |
| username | String | ! | If the image does not load, the initials of the username will be shown |

