
## Description

The Social Icons Widget displays small graphics linked to your social media accounts,
and can be displayed on your site in different ways.

## Usage

* Share

```js
const media = {
    facebook: 'https://www.thebyte9.com',
    twitter: 'https://www.thebyte9.com',
    pinterest: 'https://www.thebyte9.com',
    linkedIn: 'https://www.thebyte9.com',
    youtube: 'https://www.thebyte9.com',
    instagram: 'https://www.thebyte9.com'
};

<SocialFollow media={media} vertical/> 
```

* Follow

```js
<SocialFollow media={media} type="follow"/> 
```

## API

##### SocialFollow can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: | 
| title | String | empty | 
| type | String | share | 
| media | Object | {} |
| vertical | Boolean | false |




