## Description

Spinner and ProgressBar component generally allow to show graphically the progress status of a task or process.

## Usage

#### Default Bar

```js
<ProgressBar progress={40} />
```

#### Custom progress bar with steps and icon

```js
const ProgressDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(100), 2000);
  }, []);

  const handleChange = ({ value: rangeValue }) =>
    setProgress(Number(rangeValue));

  const steps = [
    {
      start: 0,
      final: 99,
      color: "#ffc107",
      icon: "priority_high"
    },
    {
      start: 99,
      final: 100,
      color: "#4caf50",
      icon: "done"
    }
  ];

  return (
    <ProgressBar
      steps={steps}
      progress={progress}
      message={{
        incomplete: "Loading...",
        status: `${progress}%`,
        position: ProgressBar.position.left
      }}
    />
  );
};

<ProgressDemo />;
```

#### Default Spinner

```js
<Spinner />
```

#### Custom spinner with content locked

```js
<Spinner
  customStyles={{
    backgroundColor: "rgba(0, 0, 0, .1)",
    border: "4px solid rgba(0, 0, 0, .1)",
    borderTopColor: "#fff",
    size: 70
  }}
  animation={Spinner.animationType.ease}
  lockContent
/>
```

## API

Coming soon...
