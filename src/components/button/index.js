import React from "react";
import "./styles/button.css";

export default function Buttons({ children, ...restProps }) {
  return (
    <div className="buttons">
      <div className="buttons__header">
        <h4 className="buttons__title">Button</h4>
      </div>
      <div className="buttons__body">
        <button {...restProps} className="buttons__body-button">
          Add Button
        </button>
      </div>
    </div>
  );
}

export function Button({ value, ...restProps }) {
  return (
    <button {...restProps} className="button">
      {value}
    </button>
  );
}
