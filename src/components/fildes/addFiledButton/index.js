import React from "react";
import "./styles/addFieldButton.css";

export default function AddFieldButton({ children, ...restProps }) {
  return (
    <button className="addFieldButton" {...restProps}>
      {children}
    </button>
  );
}
