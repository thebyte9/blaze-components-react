import classnames from "classnames";
import update from "immutability-helper";
import React, { Component, createRef } from "react";
import shallowCompare from "react-addons-shallow-compare";
import DragLayer from "./DragLayer/index";
import NestableItem from "./NestableItem";
import {
  closest,
  getItemByPath,
  getPathById,
  getRealNextPath,
  getSplicePath,
  getTransformProps,
  listWithChildren,
  tryDecreaseDepth,
  tryIncreaseDepth
} from "./utils";
interface INestableProps {
  items?: any;
  childrenProp?: any;
  renderItem?: (...args: any[]) => any;
  onChange?: any;
  confirmChange?: any;
}
interface INestableState {
  items: any;
  dragItem: null;
  isDirty: boolean;
}
class Nestable extends Component<INestableProps, INestableState> {
  public static defaultProps = {
    childrenProp: "children",
    confirmChange: () => true,
    items: [],
    onChange: () => {
      return;
    },
    renderItem: ({ item }: { item: any }) => item.toString()
  };
  public state: any;
  public el: any;
  private dragLayerRef: any;
  private mouse: any;
  constructor(props: INestableProps) {
    super(props);
    this.state = {
      dragItem: null,
      isDirty: false,
      items: []
    };
    this.dragLayerRef = createRef();
    this.el = null;
    this.mouse = {
      last: { x: 0 },
      shift: { x: 0 }
    };
  }
  public componentDidMount() {
    let { items } = this.props;
    const { childrenProp } = this.props;
    items = listWithChildren(items, childrenProp);
    this.setState({ items });
  }
  public componentDidUpdate(prevProps: any) {
    const { items: newItems, childrenProp } = this.props;
    const isPropsUpdated = shallowCompare(
      { props: this.props, state: {} } as any,
      prevProps,
      {}
    );
    if (isPropsUpdated) {
      this.stopTrackMouse();
      this.updateProps(newItems, childrenProp);
    }
  }
  public componentWillUnmount() {
    this.stopTrackMouse();
  }
  public startTrackMouse = () => {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onDragEnd);
  };
  public stopTrackMouse = () => {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onDragEnd);
  };
  public onMouseEnter = (e: any, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { dragItem, items } = this.state;
    const { childrenProp } = this.props;
    if (!dragItem || dragItem.id === item.id) {
      return;
    }
    const pathFrom = getPathById({
      childrenProp,
      id: dragItem.id,
      items
    });
    const pathTo = getPathById({
      childrenProp,
      id: item.id,
      items
    });
    this.moveItem({ dragItem, pathFrom, pathTo });
  };
  public onMouseMove = (e: any) => {
    const { childrenProp } = this.props;
    const { dragItem, items } = this.state;
    const { clientX, clientY } = e;
    const transformProps = getTransformProps(clientX - 30, clientY - 50);
    const dragLayer = this.dragLayerRef.current;
    Object.keys(transformProps).forEach(key => {
      if (
        Object.prototype.hasOwnProperty.call(transformProps, key) &&
        dragLayer &&
        dragLayer.style
      ) {
        dragLayer.style[key] = transformProps[key];
      }
    });
    const diffX = clientX - this.mouse.last.x;
    if (
      (diffX >= 0 && this.mouse.shift.x >= 0) ||
      (diffX <= 0 && this.mouse.shift.x <= 0)
    ) {
      this.mouse.shift.x += diffX;
    } else {
      this.mouse.shift.x = 0;
    }
    this.mouse.last.x = clientX;
    if (dragItem && Math.abs(this.mouse.shift.x)) {
      const movementData = {
        childrenProp,
        dragItem,
        items
      };
      const availableDrop =
        this.mouse.shift.x > 0
          ? tryIncreaseDepth(movementData)
          : tryDecreaseDepth(movementData);
      availableDrop && this.moveItem(availableDrop);
      this.mouse.shift.x = 0;
    }
  };
  public onDragEnd = (e: any) => {
    e && e.preventDefault();
    this.stopTrackMouse();
    this.el = null;
    this.dragApply();
  };
  public onDragStart = (e: any, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.el = closest(e.target, ".nestable-item-parent");
    this.startTrackMouse();
    this.onMouseMove(e);
    this.setState({
      dragItem: item
    });
  };
  public updateProps(newItems: any, childrenProp: any) {
    this.setState({
      dragItem: null,
      isDirty: false,
      items: listWithChildren(newItems, childrenProp)
    });
  }
  public moveItem({ dragItem, pathFrom, pathTo }: any) {
    const { childrenProp, confirmChange } = this.props;
    let { items } = this.state;
    const realPathTo = getRealNextPath({
      childrenProp,
      items,
      nextPath: pathTo,
      prevPath: pathFrom
    });
    const destinationPath =
      realPathTo.length > pathTo.length ? pathTo : pathTo.slice(0, -1);
    const destinationParent = getItemByPath({
      childrenProp,
      items,
      path: destinationPath
    });
    if (!confirmChange(dragItem, destinationParent)) {
      return;
    }
    const removePath = getSplicePath(pathFrom, {
      childrenProp,
      numToRemove: 1
    });
    const insertPath = getSplicePath(realPathTo, {
      childrenProp,
      itemsToInsert: [dragItem],
      numToRemove: 0
    });
    items = update(items, removePath);
    items = update(items, insertPath);
    this.setState({
      isDirty: true,
      items
    });
  }
  public dragApply() {
    const { onChange } = this.props;
    const { items, isDirty, dragItem } = this.state;
    this.setState({
      dragItem: null,
      isDirty: false
    });
    onChange && isDirty && onChange(items, dragItem);
  }
  public render() {
    const { items, dragItem } = this.state;
    const { renderItem, childrenProp } = this.props;
    const wrapperClassName = classnames("nestable", {
      "is-dragging": dragItem
    });
    return (
      <div className={wrapperClassName}>
        <ol className="nestable-list nestable-group">
          {items.map((item: any, index: number) => (
            <NestableItem
              dragItem={dragItem}
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
          <DragLayer dragLayerRef={this.dragLayerRef} dragItem={dragItem}>
            <NestableItem
              dragItem={dragItem}
              renderItem={renderItem}
              childrenProp={childrenProp}
              onMouseEnter={this.onMouseEnter}
              onDragStart={this.onDragStart}
              item={dragItem}
              isCopy
            />
          </DragLayer>
        )}
      </div>
    );
  }
}
export default Nestable;
