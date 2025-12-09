## Description

MultiSelect is a component that allows you to select multiple items with check boxes.
It is useful for labeling, contact lists, country selectors, etc.

## Usage

```js
const data = {
  identification: "id",
  keyValue: "name",
  filterBy: ["name", "description"],
  data: [
    {
      show: true,
      checked: true,
      id: 1,
      name: "Blaze",
      description: "Lorem ipsum dolor."
    },
    {
      show: true,
      checked: false,
      id: 2,
      name: "KP",
      description: "Aliquam tincidunt."
    },
    {
      show: true,
      checked: true,
      id: 3,
      name: "Pulser",
      description: "Vestibulum auctor."
    }
  ]
};

<Multiselect data={data} />;
```

### Condensed chip preview (1 item + N more)

By default, all selected chips are shown. To condense, pass checkedPreviewCount.
```js
<Multiselect
  name="tags"
  label="Tags"
  data={data}
  checkedPreviewCount={1}
  formatMoreLabel={(n) => `${n} more`}/>
```

### onItemsRendered

When the select options are scrolled if the onItemsRendered prop and isDynamic is false is set then this component will call it passing in the current start and stop indexes of the option items on display e.g.
```js
const onItemsRendered = ({ startIndex: 0, stopIndex: 20 }) => ...;
```


## API

##### Multiselect can receive a number of `props` as follow:

| Prop                  | Type                                                          | Default                       | Description                                                                                   |
| --------------------- | ------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                | `MultiselectData`                                             | `{}`                          | Source data + config.                                                                         |
| `name`                | `string`                                                      | —                             | Field name returned in `getSelected`.                                                         |
| `label`               | `ReactNode`                                                   | `''`                          | Field label (can include tooltip component).                                                  |
| `placeholder`         | `string`                                                      | `'Choose...'`                 | Input placeholder.                                                                            |
| `limit`               | `number`                                                      | `0`                           | Max selections (0 = unlimited). Reaching limit disables unselected options.                   |
| `required`            | `boolean`                                                     | `false`                       | Marks label as required.                                                                      |
| `error`               | `boolean`                                                     | `false`                       | Shows error state in the dropdown.                                                            |
| `validationMessage`   | `string`                                                      | `'This field is required'`    | Error text when `error` is true.                                                              |
| `notFoundMessage`     | `string`                                                      | `'No records available'`      | Empty-state text when no matches.                                                             |
| `limitReachedMessage` | `string`                                                      | `'Select item limit reached'` | Text shown when `limit` reached.                                                              |
| `searchTerm`          | `string`                                                      | `''`                          | Initial search value.                                                                         |
| `tooltip`             | `{ tooltipContent: ReactNode, trigger?: 'click' \| 'hover' }` | `{}`                          | Optional tooltip shown next to label.                                                         |
| `getSelected`         | `(e: { target: { name: string; value: string[] }}) => void`   | `() => void 0`                | Called whenever selection changes (IDs array in `value`).                                     |
| `onChange`            | `({ event, value, name, clearList }) => void`                 | `(arg) => arg`                | Input change handler. In dynamic mode, call `clearList()` then set new `data`.                |
| `isDynamic`           | `boolean`                                                     | `false`                       | Enables dynamic mode (you control options via `onChange`; list virtualization still applies). |
| `onItemsRendered`     | `({ startIndex: number, stopIndex: number }) => void`         | `() => {}`                    | Fired when the dropdown opens/scrolls **in dynamic mode**.                                    |
| `checkedPreviewCount` | `number`                                                      | *undefined* (show all)        | Number of selected chips to show before collapsing into “N more”.                             |
| `formatMoreLabel`     | `(n: number) => string`                                       | `(n) => \`\${n} more\`\`      | Customize “N more” label text.                                                                |
| `...attrs`            | `Input` props                                                 | —                             | Any extra props are spread onto the internal `<Input />` (e.g., `data-testid`).               |

