import { values } from "lodash";
import React, { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function MainSelecteField({ children, ...restProps }) {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <div className="form-group">
        <label className="form-label">Select a field</label>
        <div className="form-control-wrap">
          <select
            className="form-select form-control form-control-lg select2-hidden-accessible"
            data-search="on"
            data-select2-id="4"
            tabindex="-1"
            aria-hidden="true"
            onClick={(e) => {
              const value = e.target.value;
              dispatch({ type: "setFieldType", payload: value });
            }}
          >
            <option value="default_option" data-select2-id="6">
              Default Option
            </option>
            {state.fields.map((item) => {
              return <option value={item.type}>{item.type}</option>;
            })}
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            data-select2-id="5"
            style={{ width: "398.5px" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabindex="0"
                aria-disabled="false"
                aria-labelledby="select2-vcux-container"
              ></span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true"></span>
          </span>
        </div>
      </div>
    </>
  );
}
