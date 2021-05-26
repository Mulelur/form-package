import React from "react";
import "./styles/endPoint.css";
export default function EndPoint({ ...restProps }) {
  return (
    <div className="endPoint">
      <div className="endPoint__header">
        <h4 className="endPoint__title">End Point</h4>
      </div>
      <div className="endpoint__body">
        <input {...restProps} className="endpoint__input" />
      </div>
    </div>
  );
}
