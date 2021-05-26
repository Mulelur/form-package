import React from "react";
import "./styles/filde.css";

export default function Filde({ children, ...restProps }) {
  return (
    <div {...restProps} className="filde">
      {children}
    </div>
  );
}
