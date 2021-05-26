import React from "react";
import "./styles/plane.css";

export default function Planne({ children, ...restProps }) {
  return (
    <div {...restProps} className="plane">
      {children}
    </div>
  );
}
