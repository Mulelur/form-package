import React from "react";
import "./styles/editorBar.css";

export default function EditorBar({ children, ...restProps }) {
  return (
    <div className="editorBar" {...restProps}>
      <div className="editorBar__content">{children}</div>
    </div>
  );
}

export function End() {
  return <div className="editorBar__footer"></div>;
}
