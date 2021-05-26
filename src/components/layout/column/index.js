import React, { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import "./styles/column.css";

export default function Column({ children, ...restProps }) {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div {...restProps} className="column">
      {children}
    </div>
  );
}
