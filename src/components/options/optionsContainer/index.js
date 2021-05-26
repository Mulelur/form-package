import React from "react";
import "./styles/optionsContainer.css";

export default function Options({ children, ...restProps }) {
  return (
    <div className="options">
      <div className="options__header">
        <h4 className="options__title">Options</h4>
      </div>
      <div className="options__body">{children}</div>
    </div>
  );
}
