export const NOOP = () => {
  return;
};
export function generateUEID() {
  let first: string | number = Math.round(Math.random() * 46656);
  let second: string | number = Math.round(Math.random() * 46656);
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);
  return first + second;
}
