import React from "react";
import ReactDOM from "react-dom";

interface IDragLayerProps {
  dragLayerRef: any;
  label: string;
}

/**
 * A small indicator that follows the cursor while dragging. It intentionally
 * does NOT render a full-size (potentially deeply nested) copy of the dragged
 * item — just a compact badge so the pointer stays the focus and no oversized
 * preview is carried around.
 *
 * It is portalled to <body> so it escapes any transformed / overflow / stacking
 * ancestors in the host app (e.g. the admin page-builder panels), which would
 * otherwise clip it or break its fixed positioning.
 */
const DragLayer: React.SFC<IDragLayerProps> = ({ dragLayerRef, label }) => {
  const layer = (
    <div
      className="nestable-drag-layer"
      ref={dragLayerRef}
      data-testid="nestable-drag-layer"
    >
      <div className="nestable-drag-badge">
        <i className="material-icons">drag_indicator</i>
        <span className="nestable-drag-badge__caption">Moving</span>
        <span className="nestable-drag-badge__label">{label}</span>
      </div>
    </div>
  );

  if (typeof document !== "undefined" && document.body) {
    return ReactDOM.createPortal(layer, document.body);
  }
  return layer;
};
export default DragLayer;
