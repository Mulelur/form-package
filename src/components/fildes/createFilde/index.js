import React from "react";
import "./styles/createFilde.css";

export default function CreateFilde({ children, ...restProps }) {
  return (
    <div className="createField">
      <div className="createField__header">
        <h4 className="createField___title">Create a Form Field</h4>
      </div>
      <div className="creatField__body">
        <div className="createField__selecteField">{children}</div>
        <button {...restProps} className="createFilde">
          create
        </button>
      </div>
    </div>
  );
}
