import React from "react";
import "./styles/fildesContainer.css";

export default function Fildes({ children, ...restProps }) {
  return (
    <div className="fildes">
      <div className="fildes__header">
        <h4 className="fildes__title">Preview</h4>
      </div>
      <div className="fildes__body" {...restProps}>
        {children}
      </div>
      {/* <span className="fildes__footer">b</span> */}
    </div>
  );
}
