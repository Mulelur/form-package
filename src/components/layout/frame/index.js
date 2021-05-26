import React from "react";
import "./styles/frame.css";

export default function Frame({ children, ...restProps }) {
  return (
    <div {...restProps} className="frame">
      {children}
    </div>
  );
}
