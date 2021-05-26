import React, { useContext } from "react";
import { Options } from "../../components";
import { FormContext } from "../../context/FormContext";
import AdvancedContainer from "./advanced";
import SimpleContainer from "./simple";

export default function OptionsContainer() {
  const { state, dispatch } = useContext(FormContext);
  return state.selectedFilde.hasOwnProperty("customOptions") ? (
    <Options>
      <SimpleContainer />
      <AdvancedContainer />
    </Options>
  ) : (
    <div></div>
  );
}
