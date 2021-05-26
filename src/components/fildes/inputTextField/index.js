import React from "react";
import "./styles/inputTextField.css";

export default function InputField({ options }) {
  function handleDragStart(e) {
    e.dataTransfer.setData("type", "text");
  }
  const { width, height, borderRadius, label } = options;
  return (
    <div
      onDragStart={(e) => {
        handleDragStart(e);
      }}
      draggable
      className="form-group"
    >
      <label className="form-label" htmlFor="default-01">
        {label}
      </label>
      <div className="form-control-wrap">
        <input
          style={{
            width: `${width}px`,
            height: `${height}px`,
            // borderRadius: `${borderRadius}`,
          }}
          type="text"
          className="form-control"
          id="default-01"
          placeholder="Input placeholder"
        />
      </div>
    </div>
  );
}
