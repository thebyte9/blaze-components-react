import React, { Component, createRef } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import DragLayer from './DragLayer/index';
import NestableItem from './NestableItem';
import {
  buildClassNames,
  closest,
  findItemWithParent,
  getTransformProps,
  isSelfOrDescendant,
  listWithChildren,
  moveItemById,
} from './utils';

type DropMode = 'before' | 'after' | 'inside';

interface IDropTarget {
  overId: any;
  mode: DropMode;
}

interface INestableProps {
  items?: any;
  childrenProp?: any;
  renderItem?: (...args: any[]) => any;
  onChange?: any;
  confirmChange?: any;
  canNestInside?: (item: any) => boolean;
  renderDragIcon?: (item: any) => any;
  childrenWrapperClassName?: any;
}

interface INestableState {
  items: any;
  dragItem: any;
  dropTarget: IDropTarget | null;
  isDirty: boolean;
}

class Nestable extends Component<INestableProps, INestableState> {
  public static defaultProps = {
    childrenProp: 'children',
    confirmChange: () => true,
    items: [],
    onChange: () => {
      return;
    },
    renderItem: ({ item }: { item: any }) => item.toString(),
  };
  public state: INestableState;
  public el: any;
  private dragLayerRef: any;
  private hovered: { item: any; el: any } | null;
  private lastPointer: { x: number; y: number } | null;

  constructor(props: INestableProps) {
    super(props);
    this.state = {
      dragItem: null,
      dropTarget: null,
      isDirty: false,
      items: [],
    };
    this.dragLayerRef = createRef();
    this.el = null;
    this.hovered = null;
    this.lastPointer = null;
  }

  public componentDidMount() {
    let { items } = this.props;
    const { childrenProp } = this.props;
    items = listWithChildren(items, childrenProp);
    this.setState({ items });
  }

  public componentDidUpdate(prevProps: any) {
    const { items: newItems, childrenProp } = this.props;
    const isPropsUpdated = shallowCompare({ props: this.props, state: {} } as any, prevProps, {});
    if (isPropsUpdated) {
      this.stopTrackMouse();
      this.updateProps(newItems, childrenProp);
    }
  }

  public componentWillUnmount() {
    this.stopTrackMouse();
  }

  public startTrackMouse = () => {
    // Capture phase: host apps may stopPropagation on mouse/drag events in
    // intermediate elements; capture guarantees the tracker still sees them.
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onDragEnd, true);
    // The drag handle is a native `draggable` element, so during a real HTML5
    // drag the browser suppresses mousemove/mouseup and emits drag events
    // instead. Track those too so the cursor badge follows and the drop is
    // applied regardless of which model the browser uses.
    document.addEventListener('dragover', this.onDragOver, true);
    document.addEventListener('drop', this.onDragEnd, true);
    document.addEventListener('dragend', this.onDragEnd, true);
  };

  public stopTrackMouse = () => {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onDragEnd, true);
    document.removeEventListener('dragover', this.onDragOver, true);
    document.removeEventListener('drop', this.onDragEnd, true);
    document.removeEventListener('dragend', this.onDragEnd, true);
  };

  // Resolve the portalled drag-layer node (ref first, DOM fallback) and glue it
  // to the cursor. Shared by the mouse and drag handlers. Records the pointer so
  // the layer can be positioned immediately when it mounts (it does not exist
  // yet during the dragstart event itself).
  public positionLayer = (clientX: number, clientY: number) => {
    this.lastPointer = { x: clientX, y: clientY };
    const dragLayer =
      this.dragLayerRef.current ||
      (typeof document !== 'undefined' && document.querySelector('.nestable-drag-layer'));
    this.applyLayerTransform(dragLayer);
  };

  private applyLayerTransform = (dragLayer: any) => {
    if (dragLayer && dragLayer.style && this.lastPointer) {
      const transformProps = getTransformProps(this.lastPointer.x + 12, this.lastPointer.y + 12);
      Object.keys(transformProps).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(transformProps, key)) {
          dragLayer.style[key] = transformProps[key];
        }
      });
    }
  };

  // Callback ref for the portalled layer: position it at the cursor the moment
  // it mounts, instead of flashing at the viewport origin until the first
  // tracked event arrives.
  private setDragLayerNode = (node: any) => {
    this.dragLayerRef.current = node;
    if (node) {
      this.applyLayerTransform(node);
    }
  };

  // Records which item the cursor is currently over so onMouseMove can keep the
  // drop indicator in sync as the pointer travels within that item.
  public onMouseEnter = (e: any, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.dragItem) {
      return;
    }
    this.hovered = { item, el: e.currentTarget };
    this.updateDropTarget(e.clientX, e.clientY);
  };

  public onMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    this.positionLayer(clientX, clientY);
    this.updateDropTarget(clientX, clientY);
  };

  // Native HTML5 drag path: dragover fires continuously with valid client
  // coordinates. preventDefault keeps it a valid drop target so it doesn't stop
  // firing. Reuse the hovered item's element under the pointer.
  public onDragOver = (e: any) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    if (!clientX && !clientY) {
      return;
    }
    this.positionLayer(clientX, clientY);
    const target = e.target && e.target.closest ? e.target.closest('.nestable-item') : null;
    if (target && target.id) {
      const found = findItemWithParent(this.state.items, this.props.childrenProp, target.id);
      if (found) {
        this.hovered = { item: found.item, el: target };
      }
    }
    this.updateDropTarget(clientX, clientY);
  };

  public onDragStart = (e: any, item: any) => {
    e.stopPropagation();
    // Set up the native drag so `dragover` fires cross-browser. We keep the
    // browser's default drag ghost visible AND render our own cursor badge
    // alongside it.
    if (e.dataTransfer) {
      try {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(item.id || ''));
      } catch (err) {
        /* dataTransfer not available in some environments */
      }
    }
    this.el = closest(e.target, '.nestable-item-parent');
    this.hovered = null;
    // Keep the dragged node exactly where it is (no live reorder / removal).
    this.setState({ dragItem: item, dropTarget: null, isDirty: false });
    this.startTrackMouse();
    this.positionLayer(e.clientX, e.clientY);
  };

  public onDragEnd = (e: any) => {
    e && e.preventDefault();
    this.stopTrackMouse();
    this.el = null;
    this.hovered = null;
    this.applyDrop();
  };

  public updateProps(newItems: any, childrenProp: any) {
    this.setState({
      dragItem: null,
      dropTarget: null,
      isDirty: false,
      items: listWithChildren(newItems, childrenProp),
    });
  }

  // Computes a candidate drop target from the cursor position over the currently
  // hovered item WITHOUT mutating the tree. Nothing moves until drop.
  private updateDropTarget(clientX: number, clientY: number) {
    const { dragItem, items } = this.state;
    const { childrenProp, confirmChange } = this.props;

    if (!dragItem || !this.hovered || !this.hovered.el) {
      return;
    }

    const overItem = this.hovered.item;

    // Never allow dropping a node into itself or one of its descendants.
    if (isSelfOrDescendant(dragItem, childrenProp, overItem.id)) {
      if (this.state.dropTarget) {
        this.setState({ dropTarget: null });
      }
      return;
    }

    // Measure the COMPACT header of the hovered row (its name element), not the
    // whole subtree, so nesting/sibling bands are sized to the visible header.
    // The hovered element is the <li>; its first child is `.nestable-item-name`.
    const hoveredLi = this.hovered.el as HTMLElement;
    const nameEl = (hoveredLi && (hoveredLi.firstElementChild as HTMLElement)) || hoveredLi;
    const rect = nameEl.getBoundingClientRect();
    // Header bottom = top of the nested children list *when it is actually
    // visible*, otherwise the name box itself. Accordion rows may be collapsed,
    // hiding the nested list (its rect is all-zeros); guarding against that keeps
    // headerHeight sane so before/inside/after bands all remain reachable.
    const childOl = nameEl.querySelector ? nameEl.querySelector('.nestable-list') : null;
    let headerBottom = rect.bottom;
    if (childOl) {
      const childRect = childOl.getBoundingClientRect();
      if (childRect.height > 0 && childRect.top > rect.top) {
        headerBottom = childRect.top;
      }
    }
    const headerHeight = Math.max(headerBottom - rect.top, 1);
    const offsetY = clientY - rect.top;

    // Whether this target can hold children. By default we infer it from the data
    // shape (childrenProp is an array), which keeps flat reorder lists flat.
    //
    // That inference alone is too strict for schema-driven hosts: listWithChildren
    // normalises a missing children key to `null`, so a container that has never
    // held a child looks identical to a leaf and could never be nested into — the
    // most common "I can't drop inside this" case. Hosts that know better (the page
    // builder reads `allowChildren` off the component schema) pass `canNestInside`
    // and own the decision. Creating the array on drop is already safe:
    // insertByTarget falls back to [] when childrenProp is null.
    const { canNestInside: canNestInsideProp } = this.props;
    const canNestInside =
      typeof canNestInsideProp === 'function'
        ? canNestInsideProp(overItem)
        : Array.isArray(overItem[childrenProp]);

    let intent: DropMode;
    if (canNestInside) {
      // Sibling placement is already easy to hit OUTSIDE the header: a row's top
      // padding sits above rect.top, so offsetY goes negative there and reads as
      // `before`, and the gap beneath a row is covered by the next row's own
      // before-zone. So keep the in-header edge bands narrow and let the body of
      // a container header mean "nest inside" — that is where users aim.
      //
      // These bands used to be max(35% of header, 16px), which met in the middle
      // on compact headers: at 32px they left no inside zone at all, and at 40px
      // only an 8px sliver, making nesting unreachable exactly where it was most
      // expected. The 30% ceiling guarantees the inside zone keeps >= 40% of the
      // header at any height.
      const band = Math.min(Math.max(headerHeight * 0.2, 6), 12, headerHeight * 0.3);
      if (offsetY <= band) {
        intent = 'before';
      } else if (offsetY >= headerHeight - band) {
        intent = 'after';
      } else {
        intent = 'inside';
      }
    } else {
      intent = offsetY < headerHeight / 2 ? 'before' : 'after';
    }

    // Resolve the destination parent for confirmChange: the hovered item when
    // nesting inside, otherwise the hovered item's parent.
    const found = findItemWithParent(items, childrenProp, overItem.id);

    // Candidate placements, best first. When the pointer asks to nest but the
    // destination refuses children (confirmChange — e.g. a component whose schema
    // sets allowChildren false), degrade to sibling placement instead of clearing
    // the indicator. Showing nothing while the pointer sits over a header reads as
    // "drag and drop is broken" rather than "you cannot nest here".
    const siblingFallback: DropMode = offsetY < headerHeight / 2 ? 'before' : 'after';
    const candidates: DropMode[] = intent === 'inside' ? ['inside', siblingFallback] : [intent];

    let mode: DropMode | null = null;
    for (const candidate of candidates) {
      const destinationParent = candidate === 'inside' ? overItem : found && found.parent;
      if (confirmChange(dragItem, destinationParent)) {
        mode = candidate;
        break;
      }
    }

    if (!mode) {
      if (this.state.dropTarget) {
        this.setState({ dropTarget: null });
      }
      return;
    }

    const { dropTarget } = this.state;
    if (dropTarget && dropTarget.overId === overItem.id && dropTarget.mode === mode) {
      return;
    }

    this.setState({ dropTarget: { overId: overItem.id, mode } });
  }

  // Applies the deferred move exactly once, on drop.
  private applyDrop() {
    const { onChange, childrenProp } = this.props;
    const { items, dragItem, dropTarget } = this.state;

    if (!dragItem || !dropTarget) {
      this.setState({ dragItem: null, dropTarget: null, isDirty: false });
      return;
    }

    const newItems = moveItemById({
      childrenProp,
      dragId: dragItem.id,
      items,
      target: dropTarget,
    });

    this.setState({ items: newItems, dragItem: null, dropTarget: null, isDirty: false });
    onChange && onChange(newItems, dragItem);
  }

  private getItemLabel(item: any): string {
    if (!item) {
      return '';
    }
    return item.name || item.title || item.label || String(item.id || '');
  }

  public render() {
    const { items, dragItem, dropTarget } = this.state;
    const { renderItem, childrenProp, renderDragIcon } = this.props;
    const wrapperClassName = buildClassNames('nestable', {
      'is-dragging': dragItem,
    });
    return (
      <div className={wrapperClassName}>
        <ol className="nestable-list nestable-group" data-testid="nestable-group">
          {items.map((item: any, index: number) => (
            <NestableItem
              dragItem={dragItem}
              dropTarget={dropTarget}
              renderItem={renderItem}
              childrenProp={childrenProp}
              onMouseEnter={this.onMouseEnter}
              onDragStart={this.onDragStart}
              key={item.id}
              index={index}
              item={item}
            />
          ))}
        </ol>
        {dragItem && (
          <DragLayer
            dragLayerRef={this.setDragLayerNode}
            label={this.getItemLabel(dragItem)}
            mode={dropTarget ? dropTarget.mode : null}
            icon={renderDragIcon ? renderDragIcon(dragItem) : null}
          />
        )}
      </div>
    );
  }
}

export default Nestable;
