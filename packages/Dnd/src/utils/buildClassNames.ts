/**
 * Joins a base class with any modifier keys whose value is truthy.
 * Kept local to the package so class-name building does not depend on the
 * exact export shape of the installed @blaze-react/utils version.
 *
 * buildClassNames('nestable-item', { 'is-dragging': true, 'drop-after': false })
 *   => 'nestable-item is-dragging'
 */
const buildClassNames = (base: string, modifiers: { [key: string]: any } = {}): string => {
  const active = Object.keys(modifiers).filter((key) => Boolean(modifiers[key]));
  return [base, ...active].join(' ').trim();
};

export { buildClassNames };
