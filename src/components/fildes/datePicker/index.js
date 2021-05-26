import React from "react";
import "./styles/datePicker.css";

export default function DatePicker({ children, ...restProps }) {
  return (
    <div className="form">
      <label className="form__label">Datepicker</label>
      <div className="form__control-wrap">
        <input type="text" className="form__control date-picker" />
      </div>
      <div className="form__note">
        Date format <code>mm/dd/yyyy</code>
      </div>
    </div>
  );
}
