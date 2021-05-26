import React, { useContext, useState } from "react";
import { FormContext } from "../../../context/FormContext";
import { AddIcon, RemoveIcon } from "../../../icons/icons";
import "./styles/advancedOptions.css";

export default function AdvancedOptions({ children, ...restProps }) {
  return (
    <div {...restProps} className="advanced">
      {children}
    </div>
  );
}

export function BoxShadow({ children }) {
  const [showBody, setShowBody] = useState(false);
  function handleShowBody() {
    setShowBody(!showBody);
  }
  return (
    <div
      onClick={(e) => {
        handleShowBody(e);
      }}
      className="boxShadow"
    >
      <div className="boxShadow__header">
        <h4 className="boxShadow__title">Box Shadow</h4>
        <AddIcon />
      </div>
      {showBody && (
        <div className="boxShadow__body">
          <div className="boxShadow__content">{children}</div>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
}

export function OutLineColor() {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className="outLineColor">
      <div
        onClick={(e) => {
          setShowBody(!showBody);
        }}
        className="outLineColor__header"
      >
        <h4 className="outLineColor__title">Out Line Color</h4>
        <AddIcon />
      </div>
      {showBody && (
        <div className="outLineColor__body">
          <div className="outLineColor__content">0 0 0 0</div>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
}

export function Label({ children, ...restProps }) {
  const [showBody, setShowBody] = useState(false);
  const { state, dispatch } = useContext(FormContext);
  const [value, setValue] = useState(state.selectedFilde.customOptions.label);
  return (
    <div className="label">
      <div
        onClick={(e) => {
          setShowBody(!showBody);
        }}
        className="label__header"
      >
        <h4 className="label__title">Label</h4>
        <AddIcon />
      </div>
      {showBody && (
        <div className="label__body">
          <div className="label__content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "changeLabel", payload: value });
                setValue("");
              }}
            >
              <input
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                className="label__input"
                value={value}
              />
            </form>
          </div>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
}
