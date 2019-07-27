## Description

Drawer component is a panel that is typically used to render the content of the drawer with navigation items.

## Usage

```js
<Drawer modifier="left" title="Drawer Component">
  <DrawerMainContent>
    <p>
      Elit occaecat qui Lorem eiusmod culpa sunt culpa exercitation Lorem culpa.
      Veniam irure occaecat incididunt amet ullamco Lorem et aliquip enim.
      Ullamco pariatur minim aliquip dolor labore cillum sit amet ullamco qui
      sit officia quis tempor deserunt eu anim.
    </p>
  </DrawerMainContent>
  <DrawerPageContent>
    <p>
      Rough js to toggle open/close. Would be nice to add a class on the content
      header menu button so it can be hidden when the drawer is open & user
      clicks arrow button on drawer to close
    </p>
  </DrawerPageContent>
</Drawer>
```

## API

##### Drawer menu can receive a number of `props` as follow:

| NAME         |      TYPE      | DEFAULT |   OPTIONS   |
| :----------- | :------------: | :-----: | :---------: |
| modifier     |     string     |  empty  | left, right |
| title        |     string     |  empty  |
| isResponsive |    boolean     |  false  |
| isPermanent  |    boolean     |  false  |
| children     | array of nodes |  empty  |
