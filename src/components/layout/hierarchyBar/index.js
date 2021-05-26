import React from "react";
import "./styles/hierarchyBar.css";

export default function HierarchyBar({ children, ...restProps }) {
  return (
    <div {...restProps} className="hierarchyBar">
      <div className="hierarchyBar__header">
        <h4 className="hierarchyBar__title">Layers</h4>
      </div>
      <div className="hierarchyBar__Body">{children}</div>
    </div>
  );
}

export function HierarchyItem({ children, ...restProps }) {
  return (
    <div {...restProps} className="hierarchyItem">
      {children}
    </div>
  );
}

export function HierarchyItemSelected({ children, ...restProps }) {
  return (
    <div {...restProps} className="hierarchyItem__selected">
      {children}
    </div>
  );
}
