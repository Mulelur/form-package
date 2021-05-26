import React from "react";
import "./styles/simpleOptions.css";

export default function SimpleOptions({ children, ...restProps }) {
  return (
    <div {...restProps} className="simple">
      {children}
    </div>
  );
}

export function SizeWidget({ children, ...restProps }) {
  return (
    <div className="sizeWidget">
      <input {...restProps} className="sizeWidget__input" type="text" />
      <label className="sizeWidget__label">{children}</label>
    </div>
  );
}
