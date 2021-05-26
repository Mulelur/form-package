import React, { useContext } from "react";
import { EditorBar } from "../components";
import { FormContext } from "../context/FormContext";
import ButtonsContainer from "./buttons/buttons";
import CreateFieldContainer from "./createFilde";
import EndPointContainer from "./endPoint/endPoint";
import FildesContainer from "./fildes";
import OptionsContainer from "./options";

export default function EditorBarContainer() {
  const { isEdit } = useContext(FormContext);
  return (
    <EditorBar>
      {isEdit ? (
        <>
          <CreateFieldContainer />
          <FildesContainer />
          <ButtonsContainer />
          <OptionsContainer />
        </>
      ) : (
        <EndPointContainer />
      )}
    </EditorBar>
  );
}
