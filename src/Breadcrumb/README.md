
## Description

Breadcrumbs allow users to make selections from a range of values.

## Usage

* Simple

```js
<Breadcrumb>
  <a href="/">First</a>
  <a href="/">Second</a>
  <a href="/">Third - long text will be truncated for a better user experience</a>
</Breadcrumb>
```

## API

##### Textarea can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | 
| :---  | :---:  | :---: |
| label | String | '' | 
| value | String | ''  | 
| required | Boolean | false | 
| limit | Number | 0      |
| children | A single or array of nodes| Missing breadcrumb content |

