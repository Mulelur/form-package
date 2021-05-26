import React, { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { Priview } from "../../../icons/icons";
import "./styles/workArea.css";

export default function WorkArea({ children, ...restProps }) {
  const { isEdit, setIsEdit } = useContext(FormContext);
  function handleIsEdit() {
    setIsEdit(!isEdit);
  }
  return (
    <div {...restProps} className="workArea">
      <div className="workArea__header">
        <Priview
          onClick={(e) => {
            handleIsEdit(e);
          }}
        />
      </div>
      <div className="workArea__body">{children}</div>
    </div>
  );
}
