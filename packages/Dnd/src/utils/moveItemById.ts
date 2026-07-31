type DropMode = 'before' | 'after' | 'inside';

interface IDropTarget {
  overId: any;
  mode: DropMode;
}

interface IMoveArgs {
  items: any[];
  childrenProp: string;
  dragId: any;
  target: IDropTarget;
}

/**
 * Recursively removes the node with `id` from the tree, returning a new list
 * (structural clone of the affected branches only) plus the removed node.
 */
const removeById = (list: any[], childrenProp: string, id: any) => {
  let removed: any = null;
  const next: any[] = [];

  list.forEach((item: any) => {
    if (item.id === id) {
      removed = item;
      return;
    }

    let nextItem = item;
    if (Array.isArray(item[childrenProp])) {
      const result = removeById(item[childrenProp], childrenProp, id);
      if (result.removed) {
        removed = result.removed;
        nextItem = { ...item, [childrenProp]: result.next };
      }
    }

    next.push(nextItem);
  });

  return { next, removed };
};

/**
 * Recursively inserts `node` relative to `target.overId` according to the mode
 * (`before`/`after` as a sibling, or `inside` as the first child).
 */
const insertByTarget = (list: any[], childrenProp: string, node: any, target: IDropTarget) => {
  const out: any[] = [];

  list.forEach((item: any) => {
    if (target.mode === 'before' && item.id === target.overId) {
      out.push(node);
    }

    if (target.mode === 'inside' && item.id === target.overId) {
      const children = Array.isArray(item[childrenProp]) ? item[childrenProp] : [];
      out.push({ ...item, [childrenProp]: [node, ...children] });
      return;
    }

    let nextItem = item;
    if (Array.isArray(item[childrenProp])) {
      nextItem = {
        ...item,
        [childrenProp]: insertByTarget(item[childrenProp], childrenProp, node, target),
      };
    }
    out.push(nextItem);

    if (target.mode === 'after' && item.id === target.overId) {
      out.push(node);
    }
  });

  return out;
};

/**
 * Produces a new items tree with the dragged node relocated to the drop target.
 * The original tree is never mutated and, crucially, nothing is moved until this
 * is called (on drop) — enabling deferred placement without live reordering.
 */
const moveItemById = ({ items, childrenProp, dragId, target }: IMoveArgs) => {
  const { next, removed } = removeById(items, childrenProp, dragId);
  if (!removed) {
    return items;
  }
  return insertByTarget(next, childrenProp, removed, target);
};

/**
 * True when `id` is the node itself or lives anywhere inside its subtree.
 * Used to forbid dropping a node into its own descendants.
 */
const isSelfOrDescendant = (node: any, childrenProp: string, id: any): boolean => {
  if (node.id === id) {
    return true;
  }
  const children = node[childrenProp];
  if (!Array.isArray(children)) {
    return false;
  }
  return children.some((child: any) => isSelfOrDescendant(child, childrenProp, id));
};

/**
 * Locates an item by id and returns it together with its parent item (or null
 * when it lives at the root). Handy for `confirmChange` destination checks.
 */
const findItemWithParent = (
  list: any[],
  childrenProp: string,
  id: any,
  parent: any = null,
): { item: any; parent: any } | null => {
  for (const item of list) {
    if (item.id === id) {
      return { item, parent };
    }
    if (Array.isArray(item[childrenProp])) {
      const found = findItemWithParent(item[childrenProp], childrenProp, id, item);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

export { moveItemById, isSelfOrDescendant, findItemWithParent };
export type { DropMode, IDropTarget };
