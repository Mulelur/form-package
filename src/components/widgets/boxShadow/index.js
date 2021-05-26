import React, { Children } from "react";
import "./styles/boxShadow.css";

export default function BoxShadowWidget({ children, ...restProps }) {
  return (
    <div className="boxShadow">
      <div className="boxShadow__content">
        <input {...restProps} className="boxShadow__input" />
      </div>
      <h4 className="boxShadow">{children}</h4>
    </div>
  );
}
