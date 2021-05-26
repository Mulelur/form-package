import React, { useContext } from "react";
import { CreateField, InputTextField } from "../components";
import DatePicker from "../components/fildes/datePicker";
import Select from "../components/fildes/select";
import { FormContext } from "../context/FormContext";
import MainSelecteFieldContainer from "./fildes/mainSelecteField";
import TextAreContainer from "./fildes/textArea";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxxx-yxxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & Date.now()) | 0x8;
      return v.toString(16);
    }
  );
}
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
  required: false,
};

export default function CreateFieldContainer() {
  const { state, dispatch } = useContext(FormContext);
  const Fieldtype = state.createdFilde;
  function createFilde(type) {
    switch (type) {
      case "text-input":
        const InputFildeObject = {
          id: Date.now(),
          fildeType: type,
          customOptions: customOptions,
          filde: <InputTextField options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: InputFildeObject });
        return InputFildeObject;
      case "text-area":
        const TextFieldObject = {
          id: Date.now(),
          fildeType: type,
          customOptions: customOptions,
          filde: <TextAreContainer options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: TextFieldObject });
        return TextFieldObject;
      case "select":
        const SelectObject = {
          id: Date.now(),
          fildeType: type,
          customOptions: customOptions,
          filde: <Select options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: SelectObject });
        return SelectObject;
      case "date-picker":
        const DatePickerObject = {
          id: Date.now(),
          fildeType: type,
          customOptions: customOptions,
          filde: <DatePicker options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: DatePickerObject });
        return DatePickerObject;
      case "file-upload":
        const FileUploadObject = {
          id: Date.now(),
          fildeType: type,
          customOptions: customOptions,
          filde: <DatePicker options={customOptions} />,
        };
        dispatch({ type: "selectFilde", payload: FileUploadObject });
        return FileUploadObject;
      default:
        throw new Error();
    }
  }
  function handleCreate(F) {
    createFilde(Fieldtype);
  }
  return (
    <CreateField onClick={(e) => handleCreate(Fieldtype)}>
      <MainSelecteFieldContainer />
    </CreateField>
  );
}
