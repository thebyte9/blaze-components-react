import React from "react";
import ReactDOM from "react-dom";

type DropMode = "before" | "after" | "inside";

interface IDragLayerProps {
  dragLayerRef: any;
  label: string;
  mode?: DropMode | null;
  icon?: any;
}

// Fallback glyph per placement, used only when the host does not supply an icon of
// its own. `idle` covers the state before the pointer has resolved a valid target.
const PLACEMENT_ICON: { [key: string]: string } = {
  after: "arrow_downward",
  before: "arrow_upward",
  idle: "drag_indicator",
  inside: "subdirectory_arrow_right"
};

/**
 * A small indicator that follows the cursor while dragging. It intentionally
 * does NOT render a full-size (potentially deeply nested) copy of the dragged
 * item — just a compact card so the pointer stays the focus and no oversized
 * preview is carried around.
 *
 * The card is deliberately state-free: a fixed "Moving" caption and the name of the
 * item, and nothing more. The caret + line drawn in the list is what communicates
 * where the component will land, so recolouring or rewording the badge to say the
 * same thing again only added noise to the element moving under the cursor.
 *
 * It is portalled to <body> so it escapes any transformed / overflow / stacking
 * ancestors in the host app (e.g. the admin page-builder panels), which would
 * otherwise clip it or break its fixed positioning.
 */
const DragLayer: React.SFC<IDragLayerProps> = ({ dragLayerRef, label, mode, icon }) => {
  // A host-supplied icon identifies the dragged item (the page builder passes the
  // component's own type icon). Without one, fall back to a placement glyph so
  // consumers that do not pass `renderDragIcon` still get a meaningful badge.
  const iconContent = icon || (
    <i className="material-icons">{PLACEMENT_ICON[mode || "idle"]}</i>
  );

  const layer = (
    <div
      className="nestable-drag-layer"
      ref={dragLayerRef}
      data-testid="nestable-drag-layer"
    >
      <div className="nestable-drag-badge" data-testid="nestable-drag-badge">
        <span className="nestable-drag-badge__icon">{iconContent}</span>
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

DragLayer.defaultProps = {
  icon: null,
  mode: null
};

export default DragLayer;
