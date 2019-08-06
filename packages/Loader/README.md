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
      backgroundColor: ProgressBar.backgroundColor.orange,
      icon: "priority_high"
    },
    {
      start: 99,
      final: 100,
      backgroundColor: ProgressBar.backgroundColor.green,
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
<Spinner size={Spinner.size.small} />
```

#### Custom spinner with content locked

```js
<Spinner animation={Spinner.animationType.ease} lockContent />
```

## API

Coming soon...
