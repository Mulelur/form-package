import React, { useState, useReducer } from "react";
import { Frame } from "../components";
import { FormContext } from "../context/FormContext";
import EditorBarContainer from "./editorBar";
import HierarchyBarContainer from "./hierarchyBar";
import WorkAreaContainer from "./workArea";

export default function FrameContainer() {
  const [act, setAct] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const initialState = {
    selectedFilde: {},
    activeFildes: act,
    createdFilde: "",
    fields: [
      { type: "text-input" },
      { type: "text-area" },
      { type: "select" },
      { type: "date-picker" },
      { type: "file-upload" },
    ],
    isEdit: true,
    endpoint: "",
  };
  const reducer = (state = initialState, action) => {
    console.log(state.endpoint);
    switch (action.type) {
      case "addFilde":
        state.activeFildes = [...act];
        return { ...state };
      case "selectFilde":
        state.selectedFilde = action.payload;
        return { ...state };

      case "createFilde":
        state.createdFildes.push(action.payload);
        state.selectedFilde = action.payload;
        return { ...state };
      case "changeOption":
        const option = action.payload.option;
        const value = action.payload.value;
        const options = Object.entries(state.selectedFilde.customOptions);
        const item = options.filter((item) => {
          if (item[0] === option) {
            item[1] = value;
          }
          return item;
        });
        console.log(state.selectedFilde.customOptions);

        return { ...state };
      case "changeLabel":
        state.selectedFilde.customOptions.label = action.payload;
        return { ...state };
      case "setFieldType":
        state.createdFilde = action.payload;
        return { ...state };
      case "toggleIsEdit":
        state.isEdit = !state.isEdit;
        return { ...state };
      case "setEndPoint":
        state.endpoint = action.payload;
        return { ...state };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider
      value={{ state, dispatch, act, setAct, isEdit, setIsEdit }}
    >
      <Frame>
        {isEdit && <HierarchyBarContainer />}
        <WorkAreaContainer />
        <EditorBarContainer />
      </Frame>
    </FormContext.Provider>
  );
}
