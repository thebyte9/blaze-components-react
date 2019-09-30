## Description

Avatar is the graphical representation of the user or the user's alter ego or character.

## Usage

- Image

```js
const url = 'http://lorempixel.com/400/400/people/';

<Avatar url={url} modifier={Avatar.availableModifiers.med} />

<Avatar
  url={url}
  username="Ismael Haytam"
  modifier={Avatar.availableModifiers.small}
/>
```

- User Initials

```js
<Avatar username="Blaz 2" modifier={Avatar.availableModifiers.med} />

<Avatar
  username="Lorem Ipsum"
  modifier={Avatar.availableModifiers.xSmall}
/>
```

## API

##### Avatar can receive a number of `props` as follow:

| NAME     |  TYPE  | DEFAULT | Options             |
| :------- | :----: | :-----: | ------------------- |
| modifier | String |  empty  | med, small, x-small |
| url      | string |  empty  |
| username | String |    !    |
