import React, { useContext, useState } from "react";
import { SimpleOptions } from "../../components";
import { SizeWidget } from "../../components/options/simpleOptions";
import { FormContext } from "../../context/FormContext";

export default function SimpleContainer() {
  const { state, dispatch } = useContext(FormContext);
  const { width, height, borderRadius } = state.selectedFilde.customOptions;
  const [widthValue, setWidthValue] = useState(width);
  const [heightValue, setheightValue] = useState(height);

  return (
    <SimpleOptions>
      <div style={{ display: "flex" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "changeOption",
              payload: {
                value: widthValue,
                option: "width",
              },
            });
          }}
        >
          <SizeWidget
            onChange={(e) => {
              setWidthValue(e.target.value);
            }}
            value={widthValue}
          >
            width
          </SizeWidget>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "changeOption",
              payload: {
                value: heightValue,
                option: "height",
              },
            });
          }}
        >
          <SizeWidget
            onChange={(e) => {
              setheightValue(e.target.value);
            }}
            value={heightValue}
          >
            height
          </SizeWidget>
        </form>
      </div>
      <SizeWidget value={borderRadius}>radius</SizeWidget>
    </SimpleOptions>
  );
}
