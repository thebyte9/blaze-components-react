import {
  findItemWithParent,
  isSelfOrDescendant,
  moveItemById,
} from '../../../src/utils/moveItemById';

const buildTree = () => [
  { id: 'a', items: null },
  { id: 'b', items: null },
  {
    id: 'c',
    items: [
      { id: 'c1', items: null },
      { id: 'c2', items: null },
    ],
  },
];

describe('moveItemById (deferred placement)', () => {
  it('does not mutate the original tree', () => {
    const items = buildTree();
    const snapshot = JSON.stringify(items);
    moveItemById({ items, childrenProp: 'items', dragId: 'a', target: { overId: 'b', mode: 'after' } });
    expect(JSON.stringify(items)).toEqual(snapshot);
  });

  it('moves an item before a sibling', () => {
    const items = buildTree();
    const next = moveItemById({
      items,
      childrenProp: 'items',
      dragId: 'b',
      target: { overId: 'a', mode: 'before' },
    });
    expect(next.map((item: any) => item.id)).toEqual(['b', 'a', 'c']);
  });

  it('moves an item after a sibling', () => {
    const items = buildTree();
    const next = moveItemById({
      items,
      childrenProp: 'items',
      dragId: 'a',
      target: { overId: 'b', mode: 'after' },
    });
    expect(next.map((item: any) => item.id)).toEqual(['b', 'a', 'c']);
  });

  it('nests an item inside a target as its first child', () => {
    const items = buildTree();
    const next = moveItemById({
      items,
      childrenProp: 'items',
      dragId: 'a',
      target: { overId: 'c', mode: 'inside' },
    });
    const c = next.find((item: any) => item.id === 'c');
    expect(next.map((item: any) => item.id)).toEqual(['b', 'c']);
    expect(c.items.map((child: any) => child.id)).toEqual(['a', 'c1', 'c2']);
  });

  it('returns the original list when the drag id is missing', () => {
    const items = buildTree();
    const next = moveItemById({
      items,
      childrenProp: 'items',
      dragId: 'missing',
      target: { overId: 'a', mode: 'after' },
    });
    expect(next).toBe(items);
  });
});

describe('isSelfOrDescendant', () => {
  const [, , c] = buildTree();

  it('is true for the node itself', () => {
    expect(isSelfOrDescendant(c, 'items', 'c')).toBe(true);
  });

  it('is true for a descendant', () => {
    expect(isSelfOrDescendant(c, 'items', 'c2')).toBe(true);
  });

  it('is false for an unrelated node', () => {
    expect(isSelfOrDescendant(c, 'items', 'a')).toBe(false);
  });
});

describe('findItemWithParent', () => {
  it('finds a root node with a null parent', () => {
    const items = buildTree();
    const found = findItemWithParent(items, 'items', 'b');
    expect(found && found.item.id).toEqual('b');
    expect(found && found.parent).toBeNull();
  });

  it('finds a nested node with its parent', () => {
    const items = buildTree();
    const found = findItemWithParent(items, 'items', 'c2');
    expect(found && found.item.id).toEqual('c2');
    expect(found && found.parent.id).toEqual('c');
  });

  it('returns null when the id is absent', () => {
    const items = buildTree();
    expect(findItemWithParent(items, 'items', 'zzz')).toBeNull();
  });
});
