import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import "./styles/endPoint.css";
export default function EndPoint({ ...restProps }) {
  const { state, dispatch } = useContext(FormContext);
  const [value, setValue] = useState("");

  function handleEndPoint(e) {
    e.preventDefault();
    dispatch({ type: "setEndPoint", payload: value });
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="endPoint">
      <div className="endPoint__header">
        <h4 className="endPoint__title">End Point</h4>
      </div>
      <div className="endpoint__body">
        <form
          onSubmit={(e) => {
            handleEndPoint(e);
          }}
        >
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={value}
            className="endpoint__input"
          />
        </form>
      </div>
    </div>
  );
}
