
## Description

Tooltips display informative text when users hover over or focus on an element.

## Usage


```js
<Tooltip text="Byte9" position="top">
  Tooltip on top
</Tooltip>

<Tooltip text="Byte9" position="bottom">
  Tooltip on bottom
</Tooltip>

<Tooltip text="Byte9" position="right">
  Tooltip on right
</Tooltip>

<Tooltip text="Byte9" position="left">
  Tooltip on left
</Tooltip>
```

## API

##### Tooltip can receive a number of `props` as follow:


| NAME   | TYPE | DEFAULT | Description |
| :---  | :---:  | :---: | ------- |
| position | string | 'top' | Where the tooltip should be position relative to the element: top, left, bottom right |
| text | String | 'No content' | if no text is received, it will output "No content" |
| onChange | Function | 'No content' | Children elements the tooltip may have |

