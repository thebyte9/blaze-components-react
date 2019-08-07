## Description

Use Snackbar component to show feedback about any operation performed
by the user.

## Usage

- Simple warning with default icon

```js
<Snackbar
  position={Snackbar.position.bottomRight}
  modifier={Snackbar.modifier.info}
  isActive
>
  Lorem Ispum dolor
</Snackbar>
```

- Simple success with duration and custom icon

```js
<Snackbar
  position={Snackbar.position.bottomLeft}
  modifier={Snackbar.modifier.success}
  iconName="how_to_reg"
  duration={5000}
  isActive
>
  Lorem <a href="#">Link</a>
</Snackbar>
```

- Toggle example

```js
const Notification = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Button onClick={() => setActive(!active)}>Toggle</Button>
      <Snackbar
        position={Snackbar.position.topRight}
        isActive={active}
        onClose={() => setActive(false)}
      >
        {children}
      </Snackbar>
    </div>
  );
};

<Notification>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <hr />
    <p>Ipsam ratione nam quae cumque sit</p>
  </div>
</Notification>;
```

## API

##### Snackbar can receive a number of `props` as follow:

| NAME     |         TYPE          | DEFAULT  | OPTIONS                                    |
| :------- | :-------------------: | :------: | ------------------------------------------ |
| modifier |        string         |  empty   | alert, info, success, warning              |
| position |        string         |  empty   | bottomLeft, bottomRight, topLeft, topRight |
| iConName |        string         |  empty   | Material Design Icons                      |
| onClose  |       function        | () => {} |                                            |
| duration |        number         |
| children | single/array of nodes |
