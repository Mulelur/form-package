import React, { useContext } from "react";
import { Fields, InputTextField } from "../components";
import AddFieldButton from "../components/fildes/addFiledButton";
import { FormContext } from "../context/FormContext";

export default function FildesContainer() {
  const { state, dispatch, act, setAct } = useContext(FormContext);
  return (
    <Fields>
      {state.selectedFilde.filde}
      <AddFieldButton
        onClick={(e) => {
          const selected = state.selectedFilde;
          setAct([...act, selected]);
          dispatch({ type: "addFilde" });
        }}
      >
        add
      </AddFieldButton>
    </Fields>
  );
}
