import React from "react";
import "./styles/grid.css";

export default function Grid({ children, ...restProps }) {
  return (
    <div {...restProps} className="grid">
      {children}
    </div>
  );
}
