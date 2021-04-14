interface ITransformProps {
  [index: string]: string;
  transform: string;
} 

const getTransformProps = (x: number, y: number): ITransformProps => ({
  transform: `translate(${x}px, ${y}px)`
});

export { getTransformProps };
