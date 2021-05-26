import React, { useContext } from "react";
import { Buttons } from "../../components";
import { Button } from "../../components/button";
import { FormContext } from "../../context/FormContext";

const customOptions = {
  width: "195",
  height: "28",
  borderRadius: "4",
  boxShadow: {
    "-x": "",
    "-y": "",
    x: "",
    y: "",
    color: "",
  },
  outLineColor: "",
  label: "Input",
};

export default function ButtonsContainer() {
  const { dispatch } = useContext(FormContext);
  function createFilde(button) {
    switch (button) {
      case "button":
        const InputFildeObject = {
          id: Date.now(),
          fildeType: button,
          customOptions: customOptions,
          value: "Button",
          filde: <Button value="Button" options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: InputFildeObject });
        return InputFildeObject;
      default:
        throw new Error();
    }
  }
  function handleDragStart(e) {
    createFilde("button");
  }
  return (
    <Buttons
      draggable
      onDragStart={(e) => {
        handleDragStart(e);
      }}
    ></Buttons>
  );
}
